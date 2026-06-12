const App = {
  // Navigation Router
  routes: {
    '': () => Render.home(),
    '/': () => Render.home(),
    '/subjects': () => Render.subjects(),
    '/formulas': () => Render.formulas(),
    '/calculators': () => Render.calculators(),
    '/materials': () => Render.materials(),
    '/design-data': () => Render.designData(),
    '/units': () => Render.units(),
    '/ai': (q) => Render.ai(q),
    '/dashboard': () => Render.dashboard()
  },

  init() {
    // Initialize Utilities (Theme, etc.)
    Utils.initTheme();

    // Listen to hash changes
    window.addEventListener('hashchange', () => this.handleRouting());
    
    // Setup Search Event Listeners
    this.setupSearchSystem();

    // Setup Mobile Menu Listeners
    this.setupMobileMenu();

    // Initial Routing
    this.handleRouting();
  },

  handleRouting() {
    const hash = window.location.hash || '#/';
    let path = hash.substring(1); // Remove '#'
    
    // Parse query parameters
    let qParam = '';
    if (path.includes('?')) {
      const parts = path.split('?');
      path = parts[0];
      const params = new URLSearchParams(parts[1]);
      qParam = params.get('q') || '';
    }

    // Highlighting current nav link in sidebar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const linkHash = link.getAttribute('href');
      // Highlight exact matches
      if (linkHash === hash || (hash === '#/' && linkHash === '#/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu on navigate
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar && overlay) {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('show');
    }

    // Dynamic Article and Subject Routes
    if (path.startsWith('/article/')) {
      const slug = path.replace('/article/', '');
      Render.article(slug);
      return;
    }

    if (path.startsWith('/subject/')) {
      const slug = path.replace('/subject/', '');
      Render.subject(slug);
      return;
    }

    // Standard Routes lookup
    const routeAction = this.routes[path];
    if (routeAction) {
      routeAction(qParam);
    } else {
      // Fallback to home
      Render.home();
    }

    // Scroll to top of content on load
    window.scrollTo(0, 0);
  },

  setupSearchSystem() {
    const searchOverlay = document.getElementById('searchOverlay');
    const globalSearchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');
    const searchClose = document.getElementById('searchClose');
    const topbarSearch = document.getElementById('topbarSearch');
    const sidebarSearch = document.getElementById('sidebarSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';

    // Show Overlay triggers
    const triggerOverlay = (initialVal = '') => {
      searchOverlay.classList.remove('hidden');
      globalSearchInput.value = initialVal;
      globalSearchInput.focus();
      triggerSearch();
    };

    topbarSearch.addEventListener('click', () => triggerOverlay(topbarSearch.value));
    topbarSearch.addEventListener('input', () => triggerOverlay(topbarSearch.value));
    sidebarSearch.addEventListener('click', () => triggerOverlay(sidebarSearch.value));
    sidebarSearch.addEventListener('input', () => triggerOverlay(sidebarSearch.value));

    // Close search overlay
    const closeSearch = () => {
      searchOverlay.classList.add('hidden');
      topbarSearch.value = '';
      sidebarSearch.value = '';
    };

    searchClose.addEventListener('click', closeSearch);
    
    // Close overlay on ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });

    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        triggerSearch();
      });
    });

    // ChatGPT debounce timer
    let aiSearchTimer = null;
    let lastAiQuery = '';

    // Run fuzzy search query and render items + trigger ChatGPT
    const triggerSearch = () => {
      const queryStr = globalSearchInput.value.trim();
      const aiPanel = document.getElementById('aiSearchResult');
      const aiBadge = document.getElementById('aiLiveBadge');

      if (queryStr.length < 2) {
        searchResults.innerHTML = `<div class="search-empty">Type at least 2 characters to search across subjects, formulas, and databases...</div>`;
        if (aiPanel) aiPanel.innerHTML = `<div class="ai-search-idle"><span class="ai-idle-icon">💡</span><p>Start typing to get an AI-powered answer alongside your search results.</p></div>`;
        return;
      }

      // === RESPONSE 1: Normal Website Results ===
      const results = SearchEngine.query(queryStr, currentFilter);
      if (results.length === 0) {
        searchResults.innerHTML = `<div class="search-empty">No results found matching "${queryStr}"</div>`;
      } else {
        let resultsHtml = '';
        results.forEach(res => {
          let formulaBlock = res.formula ? `<div class="result-formula">$$${res.formula}$$</div>` : '';
          let tagsHtml = res.keywords ? res.keywords.map(kw => `<span class="result-tag">${kw}</span>`).join('') : '';

          resultsHtml += `
            <div class="search-result-item" onclick="location.hash='${res.link}'; document.getElementById('searchOverlay').classList.add('hidden');">
              <div class="result-icon ${res.badgeClass.replace('badge-', 'bg-')}">${res.type === 'formula' ? '∑' : res.type === 'calculator' ? '🧮' : '📖'}</div>
              <div class="result-body">
                <div class="result-title">${res.title}</div>
                <div class="result-meta">
                  <span class="badge ${res.badgeClass}">${res.badge}</span>
                </div>
                <div class="result-desc">${res.desc}</div>
                ${formulaBlock}
                <div class="result-tags">
                  ${tagsHtml}
                </div>
              </div>
              <button class="result-open">Open</button>
            </div>
          `;
        });

        searchResults.innerHTML = resultsHtml;

        // Render KaTeX in search results
        if (window.renderMathInElement) {
          window.renderMathInElement(searchResults, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false }
            ]
          });
        }
      }

      // === RESPONSE 2: ChatGPT AI Answer ===
      // Debounce AI call (wait 600ms after user stops typing)
      if (aiSearchTimer) clearTimeout(aiSearchTimer);
      if (queryStr === lastAiQuery) return; // Don't re-query same text

      aiSearchTimer = setTimeout(async () => {
        lastAiQuery = queryStr;

        // Show shimmer skeleton
        if (aiPanel) {
          aiPanel.innerHTML = `
            <div class="ai-search-skeleton">
              <div class="skeleton-line skeleton-title"></div>
              <div class="skeleton-line skeleton-text"></div>
              <div class="skeleton-line skeleton-text short"></div>
              <div class="skeleton-line skeleton-formula"></div>
              <div class="skeleton-line skeleton-text"></div>
              <div class="skeleton-line skeleton-text short"></div>
            </div>
          `;
        }

        // Always get an answer — ChatGPT if key exists, local knowledge base otherwise
        let aiData;
        try {
          aiData = await AiAssistant.askChatGPT(queryStr);
        } catch (err) {
          // Silently fall back to local knowledge base
          aiData = AiAssistant.generateResponse(queryStr);
        }

        if (aiPanel) {
          const renderAiAnswer = (data) => {
            let appsHtml = '';
            if (data.applications && data.applications.length) {
              appsHtml = `<div class="ai-result-apps"><strong>Applications:</strong><ul>${data.applications.map(a => `<li>${a}</li>`).join('')}</ul></div>`;
            }
            let relatedHtml = '';
            if (data.related && data.related.length) {
              relatedHtml = `<div class="ai-result-related">${data.related.map(r => `<span class="ai-related-chip">${r}</span>`).join('')}</div>`;
            }

            aiPanel.innerHTML = `
              <div class="ai-search-answer">
                <div class="ai-answer-title">${data.title || 'AI Answer'}</div>
                <div class="ai-answer-theory">${data.theory || ''}</div>
                ${data.formula ? `<div class="ai-answer-formula">${data.formula}</div>` : ''}
                ${data.example ? `<div class="ai-answer-example"><div class="ai-example-label">📐 Example</div><div class="ai-example-body">${data.example}</div></div>` : ''}
                ${appsHtml}
                ${relatedHtml}
              </div>
            `;

            // Render KaTeX in AI panel
            if (window.renderMathInElement) {
              window.renderMathInElement(aiPanel, {
                delimiters: [
                  { left: "$$", right: "$$", display: true },
                  { left: "$", right: "$", display: false }
                ]
              });
            }
          };

          renderAiAnswer(aiData);
        }
      }, 600);
    };

    globalSearchInput.addEventListener('input', triggerSearch);

    // Voice search connection
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => {
        const rec = Utils.initVoiceSearch((result) => {
          triggerOverlay(result);
        });
        if (rec) rec.start();
      });
    }

    // Bookmarks shortcut navigation
    const bBtn = document.getElementById('bookmarksBtn');
    if (bBtn) {
      bBtn.addEventListener('click', () => {
        location.hash = '#/dashboard';
      });
    }
  },

  setupMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menuBtn');
    const overlay = document.getElementById('overlay');
    const sidebarClose = document.getElementById('sidebarClose');

    const openMenu = () => {
      sidebar.classList.add('mobile-open');
      overlay.classList.add('show');
    };

    const closeMenu = () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('show');
    };

    menuBtn.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    sidebarClose.addEventListener('click', closeMenu);

    // Sidebar footer theme toggling
    document.getElementById('themeToggle').addEventListener('click', () => Utils.toggleTheme());
    document.getElementById('themeToggle2').addEventListener('click', () => Utils.toggleTheme());

    // API Key Modal Setup
    this.setupApiKeyModal();
  },

  setupApiKeyModal() {
    const apiBtn = document.getElementById('apiStatusBtn');
    const modal = document.getElementById('apiKeyModal');
    const closeBtn = document.getElementById('apiModalClose');
    const keyInput = document.getElementById('apiKeyInput');
    const saveBtn = document.getElementById('apiKeySave');
    const removeBtn = document.getElementById('apiKeyRemove');
    const toggleVisBtn = document.getElementById('apiKeyToggleVis');
    const statusEl = document.getElementById('apiModalStatus');

    if (!apiBtn || !modal) return;

    const updateStatus = () => {
      const hasKey = Utils.hasApiKey();
      const maskedKey = hasKey ? 'sk-••••••••' + Utils.getApiKey().slice(-4) : '';
      if (hasKey) {
        statusEl.className = 'api-modal-status connected';
        statusEl.innerHTML = `<span>✅</span> Connected — Key ending in ...${Utils.getApiKey().slice(-4)}`;
        keyInput.value = '';
        keyInput.placeholder = maskedKey;
      } else {
        statusEl.className = 'api-modal-status disconnected';
        statusEl.innerHTML = `<span>⚠️</span> No API key set — ChatGPT search answers will use offline fallback`;
        keyInput.value = '';
        keyInput.placeholder = 'sk-xxxxxxxxxxxxxxxxxxxxxxxx';
      }
    };

    // Open modal
    apiBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      updateStatus();
    });

    // Close modal
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });

    // Save key
    saveBtn.addEventListener('click', () => {
      const key = keyInput.value.trim();
      if (!key) {
        Utils.showToast('Please enter a valid API key', 'warning');
        return;
      }
      Utils.setApiKey(key);
      updateStatus();
      Utils.showToast('API key saved! ChatGPT answers are now live.', 'info');
    });

    // Remove key
    removeBtn.addEventListener('click', () => {
      Utils.setApiKey('');
      updateStatus();
      Utils.showToast('API key removed. Using offline fallback.', 'info');
    });

    // Toggle visibility
    toggleVisBtn.addEventListener('click', () => {
      if (keyInput.type === 'password') {
        keyInput.type = 'text';
        toggleVisBtn.textContent = '🙈';
      } else {
        keyInput.type = 'password';
        toggleVisBtn.textContent = '👁️';
      }
    });
  }
};

// Start application when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
