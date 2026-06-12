const Render = {
  // Page rendering hub
  home() {
    const mainEl = document.getElementById('app');
    
    // Quick link clicks
    window.selectQuickSearch = (q) => {
      const gSearch = document.getElementById('globalSearch');
      if (gSearch) {
        gSearch.value = q;
        document.getElementById('searchOverlay').classList.remove('hidden');
        gSearch.focus();
        // Trigger input event
        gSearch.dispatchEvent(new Event('input'));
      }
    };

    mainEl.innerHTML = `
      <section class="hero">
        <div class="hero-particles"></div>
        <div class="hero-badge">⚡ World's First <span>Mechanical Wiki</span> Platform</div>
        <h1 class="hero-title">MECHANICAL WIKIPEDIA</h1>
        <p class="hero-tagline">"Search Anything in Mechanical Engineering"</p>
        
        <div class="hero-search-wrap">
          <div class="hero-search">
            <input type="text" id="heroSearchInput" placeholder="Search formulas, subjects, concepts, materials, standards, calculators..." autocomplete="off"/>
            <div class="hero-search-btns">
              <button id="heroVoiceBtn" class="hero-voice-btn" title="Voice search">🎤</button>
              <button id="heroSearchBtn" class="hero-search-btn">Search</button>
            </div>
          </div>
          <div id="heroSuggestions" class="hero-suggestions"></div>
        </div>

        <div class="hero-quick-links">
          <span class="quick-link" onclick="selectQuickSearch('stress')">stress</span>
          <span class="quick-link" onclick="selectQuickSearch('gear')">gear</span>
          <span class="quick-link" onclick="selectQuickSearch('reynolds')">reynolds</span>
          <span class="quick-link" onclick="selectQuickSearch('bernoulli')">bernoulli</span>
          <span class="quick-link" onclick="selectQuickSearch('steel')">steel</span>
        </div>

        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">Subjects</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5000+</div>
            <div class="stat-label">Formulas</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2000+</div>
            <div class="stat-label">Design Tables</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Calculators</div>
          </div>
        </div>
      </section>

      <div class="home-sections">
        <div class="section-header" style="margin-top: 40px;">
          <div>
            <h2 class="section-title">Explore Modules</h2>
            <div class="section-subtitle">Comprehensive quick links to main application databases</div>
          </div>
        </div>
        <div class="feature-grid">
          <div class="feature-card" style="--card-color: var(--accent)" onclick="location.hash='#/subjects'">
            <div class="feature-icon">📚</div>
            <div class="feature-name">Subjects</div>
            <div class="feature-desc">100+ Engineering courses & disciplines</div>
          </div>
          <div class="feature-card" style="--card-color: var(--accent3)" onclick="location.hash='#/formulas'">
            <div class="feature-icon">∑</div>
            <div class="feature-name">Formulas</div>
            <div class="feature-desc">Offline equations sheet & parameters</div>
          </div>
          <div class="feature-card" style="--card-color: var(--accent2)" onclick="location.hash='#/calculators'">
            <div class="feature-icon">🧮</div>
            <div class="feature-name">Calculators</div>
            <div class="feature-desc">Dynamic solvers and solution logs</div>
          </div>
          <div class="feature-card" style="--card-color: var(--success)" onclick="location.hash='#/materials'">
            <div class="feature-icon">⚗️</div>
            <div class="feature-name">Material DB</div>
            <div class="feature-desc">Structural & mechanical properties</div>
          </div>
          <div class="feature-card" style="--card-color: var(--danger)" onclick="location.hash='#/design-data'">
            <div class="feature-icon">📐</div>
            <div class="feature-name">Design Data</div>
            <div class="feature-desc">ASME/ISO fasteners, bearings & tolerances</div>
          </div>
          <div class="feature-card" style="--card-color: var(--warning)" onclick="location.hash='#/units'">
            <div class="feature-icon">📏</div>
            <div class="feature-name">Converter</div>
            <div class="feature-desc">Instant engineering unit converters</div>
          </div>
        </div>

        <div class="grid-2">
          <div>
            <div class="section-header">
              <h2 class="section-title">Trending Engineering Topics</h2>
            </div>
            <div class="trending-list">
              <div class="trending-item" onclick="location.hash='#/article/reynolds-number'">
                <span class="trending-rank">01</span>
                <span class="trending-name">Reynolds Number & Pipe Flow</span>
                <span class="trending-subject">Fluid Mechanics</span>
                <span class="trending-arrow">→</span>
              </div>
              <div class="trending-item" onclick="location.hash='#/article/stress'">
                <span class="trending-rank">02</span>
                <span class="trending-name">Stress & Strain Tensors</span>
                <span class="trending-subject">Solid Mechanics</span>
                <span class="trending-arrow">→</span>
              </div>
              <div class="trending-item" onclick="location.hash='#/article/gear-design'">
                <span class="trending-rank">03</span>
                <span class="trending-name">Spur Gear Teeth Proportions</span>
                <span class="trending-subject">Machine Design</span>
                <span class="trending-arrow">→</span>
              </div>
              <div class="trending-item" onclick="location.hash='#/article/bernoulli-equation'">
                <span class="trending-rank">04</span>
                <span class="trending-name">Bernoulli Conservation Equation</span>
                <span class="trending-subject">Fluid Dynamics</span>
                <span class="trending-arrow">→</span>
              </div>
            </div>
          </div>

          <div>
            <div class="section-header">
              <h2 class="section-title">AI Assistant Shortcuts</h2>
            </div>
            <div class="card">
              <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 16px;">
                Ask the built-in mechanical assistant to write out design steps, compare tools, or formulate variables instantly.
              </p>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn btn-secondary btn-sm" onclick="location.hash='#/ai?q=design%20a%20shaft'">🛠️ Design a shaft</button>
                <button class="btn btn-secondary btn-sm" onclick="location.hash='#/ai?q=compare%20fem%20and%20fea'">💻 Compare FEM and FEA</button>
                <button class="btn btn-secondary btn-sm" onclick="location.hash='#/ai?q=explain%20otto%20cycle'">🔥 Explain Otto Cycle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Connect Hero search box to Global Search overlay
    const heroInput = document.getElementById('heroSearchInput');
    const heroBtn = document.getElementById('heroSearchBtn');
    const heroVoiceBtn = document.getElementById('heroVoiceBtn');

    const openSearch = (initVal = '') => {
      const overlay = document.getElementById('searchOverlay');
      const globInput = document.getElementById('globalSearch');
      overlay.classList.remove('hidden');
      if (initVal) {
        globInput.value = initVal;
        globInput.dispatchEvent(new Event('input'));
      }
      globInput.focus();
    };

    heroInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') openSearch(heroInput.value);
    });
    heroInput.addEventListener('click', () => openSearch(heroInput.value));
    heroBtn.addEventListener('click', () => openSearch(heroInput.value));

    // Voice search
    if (heroVoiceBtn) {
      heroVoiceBtn.addEventListener('click', () => {
        const rec = Utils.initVoiceSearch((result) => {
          openSearch(result);
        });
        if (rec) rec.start();
      });
    }
  },

  subjects() {
    const mainEl = document.getElementById('app');
    
    // Group subjects by category
    const grouped = {};
    SUBJECT_CATEGORIES.forEach(cat => grouped[cat] = []);
    SUBJECTS.forEach(sub => {
      grouped[sub.category].push(sub);
    });

    let categoriesHtml = '';
    SUBJECT_CATEGORIES.forEach(cat => {
      let cardsHtml = '';
      grouped[cat].forEach(sub => {
        cardsHtml += `
          <div class="subject-card" onclick="location.hash='#/subject/${sub.id}'">
            <div class="subject-card-accent" style="background: ${sub.color}"></div>
            <div class="subject-card-icon">${sub.icon}</div>
            <div class="subject-card-name">${sub.name}</div>
            <div class="subject-card-cat">${sub.category}</div>
            <div class="subject-card-topics">${sub.topics} articles</div>
          </div>
        `;
      });

      categoriesHtml += `
        <div class="subjects-category">
          <h3 class="subjects-cat-title">📚 ${cat}</h3>
          <div class="grid-4">
            ${cardsHtml}
          </div>
        </div>
      `;
    });

    mainEl.innerHTML = `
      <div class="subjects-page page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Mechanical Engineering Subjects</h1>
            <div class="section-subtitle">Browse through subjects across core and specialized sectors</div>
          </div>
        </div>
        ${categoriesHtml}
      </div>
    `;
  },

  subject(subjectId) {
    const mainEl = document.getElementById('app');
    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) {
      mainEl.innerHTML = `<div class="page"><div class="calc-error">Subject "${subjectId}" not found.</div></div>`;
      return;
    }

    // Filter formulas, calculators, and articles related to this subject
    const relatedFormulas = FORMULAS.filter(f => f.subject === subjectId);
    const relatedArticles = Object.keys(ARTICLES)
      .map(key => ({ id: key, ...ARTICLES[key] }))
      .filter(a => a.subject === subjectId);
    const relatedCalculators = CALCULATORS.filter(c => c.subject === subjectId);

    let articlesList = '';
    relatedArticles.forEach(art => {
      articlesList += `
        <div class="recent-item" onclick="location.hash='#/article/${art.id}'">
          <span class="recent-icon">📖</span>
          <span class="recent-label">${art.title}</span>
          <span class="recent-time">Article</span>
        </div>
      `;
    });

    let formulasList = '';
    relatedFormulas.forEach(f => {
      formulasList += `
        <div class="recent-item" onclick="location.hash='#/article/${f.id}'">
          <span class="recent-icon">∑</span>
          <span class="recent-label">${f.name}</span>
          <span class="recent-time">${f.equation}</span>
        </div>
      `;
    });

    let calculatorsList = '';
    relatedCalculators.forEach(c => {
      calculatorsList += `
        <div class="recent-item" onclick="location.hash='#/calculators'">
          <span class="recent-icon">🧮</span>
          <span class="recent-label">${c.name}</span>
          <span class="recent-time">Calculator</span>
        </div>
      `;
    });

    mainEl.innerHTML = `
      <div class="page">
        <div class="article-breadcrumb">
          <span class="breadcrumb-link" onclick="location.hash='#/subjects'">Subjects</span>
          <span class="breadcrumb-sep">/</span>
          <span>${subject.name}</span>
        </div>
        <div class="section-header">
          <div>
            <h1 class="section-title">${subject.name}</h1>
            <div class="section-subtitle">${subject.category}</div>
          </div>
          <span class="badge badge-blue" style="font-size: 1.1rem; padding: 6px 16px;">${subject.icon}</span>
        </div>
        <div class="card" style="margin-bottom: 24px;">
          <p style="color: var(--text-secondary); line-height: 1.6;">${subject.description}</p>
        </div>

        <div class="grid-3">
          <div class="dashboard-card">
            <h3 class="widget-title">📚 Detailed Articles</h3>
            ${articlesList || '<div class="empty-state">No articles yet for this subject.</div>'}
          </div>
          <div class="dashboard-card">
            <h3 class="widget-title">∑ Core Formulas</h3>
            <div style="font-family: var(--font-mono)">
              ${formulasList || '<div class="empty-state">No formulas yet for this subject.</div>'}
            </div>
          </div>
          <div class="dashboard-card">
            <h3 class="widget-title">🧮 Calculators</h3>
            ${calculatorsList || '<div class="empty-state">No calculators yet for this subject.</div>'}
          </div>
        </div>
      </div>
    `;
  },

  formulas() {
    const mainEl = document.getElementById('app');
    
    let listHtml = '';
    FORMULAS.forEach(f => {
      const subObj = SUBJECTS.find(s => s.id === f.subject);
      let tagsHtml = '';
      f.keywords.forEach(kw => {
        tagsHtml += `<span class="result-tag">${kw}</span>`;
      });

      listHtml += `
        <div class="formula-list-item" onclick="location.hash='#/article/${f.id}'">
          <div class="formula-item-icon">∑</div>
          <div class="formula-item-body">
            <div class="formula-item-name">${f.name}</div>
            <div class="formula-item-eq" id="f-list-math-${f.id}">$$${f.equation}$$</div>
            <div class="formula-item-desc">${f.description}</div>
            <div class="formula-item-tags">
              <span class="badge badge-purple" style="font-size: 0.7rem;">${subObj ? subObj.name : ''}</span>
              ${tagsHtml}
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); location.hash='#/article/${f.id}#calculator'">Use Calculator</button>
        </div>
      `;
    });

    mainEl.innerHTML = `
      <div class="formulas-page page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Core Mechanical Engineering Formulas</h1>
            <div class="section-subtitle">Explore mechanical formulae with variables explanations and inline calculators</div>
          </div>
        </div>
        <div>
          ${listHtml}
        </div>
      </div>
    `;

    // Render KaTeX formulas in the list
    if (window.renderMathInElement) {
      window.renderMathInElement(mainEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }
  },

  article(slug) {
    const mainEl = document.getElementById('app');
    
    // Check if it's in ARTICLES database or dynamically build one from FORMULAS
    let art = ARTICLES[slug];
    let isDynamicFormula = false;

    if (!art) {
      const formulaObj = FORMULAS.find(f => f.id === slug);
      if (formulaObj) {
        isDynamicFormula = true;
        art = {
          title: formulaObj.name,
          subject: formulaObj.subject,
          definition: formulaObj.description,
          formula: formulaObj.equation,
          variables: formulaObj.variables,
          units: formulaObj.units || 'Dimensionless',
          explanation: `The formula ${formulaObj.name} expresses mathematical relationships between physical properties. ${formulaObj.description}`,
          assumptions: ['Steady-state variables', 'Homogeneous environment'],
          applications: formulaObj.applications || [],
          examples: formulaObj.examples || '',
          relatedTopics: formulaObj.relatedFormulas || [],
          references: ['Mechanical Engineering Handbook standards.']
        };
      }
    }

    if (!art) {
      mainEl.innerHTML = `<div class="page"><div class="calc-error">Article or formula "${slug}" not found.</div></div>`;
      return;
    }

    // Bookmarks tracking
    const isBookmarked = Utils.isBookmarked('article', slug);

    // Dynamic rendering variables table
    let varRows = '';
    art.variables.forEach(v => {
      varRows += `
        <tr>
          <td>${v.symbol}</td>
          <td>${v.name}</td>
          <td>${v.unit}</td>
        </tr>
      `;
    });

    // Dynamic applications list
    let appList = '';
    art.applications.forEach(app => {
      appList += `
        <div class="application-item">
          <span class="application-bullet">•</span>
          <div>${app}</div>
        </div>
      `;
    });

    // Dynamic references
    let refList = '';
    art.references.forEach(ref => {
      refList += `<li style="margin-bottom: 8px;">${ref}</li>`;
    });

    // Dynamic related chips
    let relatedChips = '';
    art.relatedTopics.forEach(rt => {
      const relatedName = ARTICLES[rt]?.title || FORMULAS.find(f => f.id === rt)?.name || rt.replace('-', ' ');
      relatedChips += `<span class="related-chip" onclick="location.hash='#/article/${rt}'">${relatedName}</span>`;
    });

    // Subject reference
    const subjectObj = SUBJECTS.find(s => s.id === art.subject);

    mainEl.innerHTML = `
      <div class="article-layout page">
        <div class="article-main">
          <div class="article-breadcrumb">
            <span class="breadcrumb-link" onclick="location.hash='#/'">MechWiki</span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-link" onclick="location.hash='#/subjects'">Subjects</span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-link" onclick="location.hash='#/subject/${art.subject}'">${subjectObj ? subjectObj.name : ''}</span>
          </div>

          <div class="article-header">
            <h1 class="article-title">${art.title}</h1>
            <div class="article-meta">
              <span>Subject: <strong>${subjectObj ? subjectObj.name : ''}</strong></span>
              <span>•</span>
              <span>Updated: June 2026</span>
            </div>
            <div class="article-actions">
              <button id="artBookmarkBtn" class="btn btn-secondary btn-sm">
                ${isBookmarked ? '🔖 Bookmarked' : '🔖 Bookmark'}
              </button>
              <button id="artPdfBtn" class="btn btn-secondary btn-sm">🖨️ PDF / Export</button>
            </div>
          </div>

          <div class="article-section" id="definition">
            <h2 class="article-section-title"><span class="article-section-icon">📖</span> Definition</h2>
            <div class="article-text">
              <p>${art.definition}</p>
            </div>
          </div>

          <div class="article-section" id="formula">
            <h2 class="article-section-title"><span class="article-section-icon">∑</span> Mathematical Formulation</h2>
            <div class="formula-box">
              <div class="formula-name">Equation</div>
              <div class="formula-katex" id="art-math">$$${art.formula}$$</div>
            </div>
            
            <h3 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 12px; margin-top: 24px;">Variables Table</h3>
            <table class="variables-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Variable Name</th>
                  <th>Standard Unit</th>
                </tr>
              </thead>
              <tbody>
                ${varRows}
              </tbody>
            </table>

            <div style="margin-top: 16px; font-size: 0.875rem;">
              <strong>SI Output Unit:</strong> <span class="badge badge-blue">${art.units}</span>
            </div>
          </div>

          <div class="article-section" id="explanation">
            <h2 class="article-section-title"><span class="article-section-icon">📝</span> Explanation</h2>
            <div class="article-text">
              <p>${art.explanation}</p>
            </div>
          </div>

          <div class="article-section" id="assumptions">
            <h2 class="article-section-title"><span class="article-section-icon">⚙️</span> Assumptions & Limitations</h2>
            <ul style="list-style: disc; margin-left: 20px; line-height: 1.7; font-size: 0.9rem; color: var(--text-secondary);">
              ${art.assumptions.map(a => `<li style="margin-bottom: 6px;">${a}</li>`).join('')}
            </ul>
          </div>

          <div class="article-section" id="applications">
            <h2 class="article-section-title"><span class="article-section-icon">⚡</span> Engineering Applications</h2>
            <div class="applications-list">
              ${appList}
            </div>
          </div>

          ${art.examples ? `
          <div class="article-section" id="examples">
            <h2 class="article-section-title"><span class="article-section-icon">💡</span> Numerical Example</h2>
            <div class="example-box">
              <div class="example-box-title">EXAMPLE CALCULATION</div>
              <div class="example-box-body" style="white-space: pre-line;">${art.examples}</div>
            </div>
          </div>
          ` : ''}

          <!-- INLINE CALCULATOR -->
          <div class="article-section" id="calculator">
            <h2 class="article-section-title"><span class="article-section-icon">🧮</span> Interactive Calculator</h2>
            <div id="artCalcContainer"></div>
          </div>

          <div class="article-section" id="related">
            <h2 class="article-section-title"><span class="article-section-icon">🔗</span> Related Topics</h2>
            <div class="related-grid">
              ${relatedChips}
            </div>
          </div>

          <div class="article-section" id="references">
            <h2 class="article-section-title"><span class="article-section-icon">📚</span> References</h2>
            <ul style="margin-left: 20px; color: var(--text-muted); font-size: 0.85rem; line-height: 1.6;">
              ${refList}
            </ul>
          </div>
        </div>

        <div class="article-sidebar-panel">
          <div class="sidebar-widget">
            <h3 class="widget-title">Outline</h3>
            <div class="toc-list">
              <div class="toc-item active" onclick="document.getElementById('definition').scrollIntoView();">Definition</div>
              <div class="toc-item" onclick="document.getElementById('formula').scrollIntoView();">Formulation</div>
              <div class="toc-item" onclick="document.getElementById('explanation').scrollIntoView();">Explanation</div>
              <div class="toc-item" onclick="document.getElementById('assumptions').scrollIntoView();">Assumptions</div>
              <div class="toc-item" onclick="document.getElementById('applications').scrollIntoView();">Applications</div>
              ${art.examples ? `<div class="toc-item" onclick="document.getElementById('examples').scrollIntoView();">Example</div>` : ''}
              <div class="toc-item" onclick="document.getElementById('calculator').scrollIntoView();">Calculator</div>
              <div class="toc-item" onclick="document.getElementById('related').scrollIntoView();">Related</div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Render Math Equations
    if (window.renderMathInElement) {
      window.renderMathInElement(mainEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }

    // Load inline calculator
    const calcContainer = document.getElementById('artCalcContainer');
    const calcExists = CALCULATORS.some(c => c.id === slug);
    if (calcExists) {
      CalculatorEngine.render(slug, calcContainer);
    } else {
      calcContainer.innerHTML = `<p style="font-size: 0.875rem; color: var(--text-muted);">No matching calculator configured for this specific equation. Custom parameters can be formulated inside the <a href="#/calculators" style="color: var(--accent);">Calculators Hub</a>.</p>`;
    }

    // Bookmark hook
    const bBtn = document.getElementById('artBookmarkBtn');
    bBtn.addEventListener('click', () => {
      const bookmarked = Utils.toggleBookmark('article', slug, art.title);
      bBtn.textContent = bookmarked ? '🔖 Bookmarked' : '🔖 Bookmark';
    });

    // PDF / Print hook
    document.getElementById('artPdfBtn').addEventListener('click', () => {
      window.print();
    });

    // Track recently viewed
    Utils.addToHistory('article', slug, art.title);
  },

  calculators() {
    const mainEl = document.getElementById('app');
    
    mainEl.innerHTML = `
      <div class="calc-page-layout page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Engineering Calculators</h1>
            <div class="section-subtitle">Instantly calculate stresses, flows, efficiencies, and design factors</div>
          </div>
        </div>
        <div class="calc-grid" id="calcGridContainer"></div>
      </div>
    `;

    const grid = document.getElementById('calcGridContainer');
    CALCULATORS.forEach(c => {
      const div = document.createElement('div');
      grid.appendChild(div);
      CalculatorEngine.render(c.id, div);
    });
  },

  materials() {
    const mainEl = document.getElementById('app');

    const renderGrid = (list) => {
      let cards = '';
      list.forEach(m => {
        cards += `
          <div class="material-card" onclick="location.hash='#/article/stress'">
            <div class="material-card-header">
              <span class="material-color-dot" style="background: ${m.color}"></span>
              <div>
                <div class="material-name">${m.name}</div>
                <div class="material-cat">${m.category}</div>
              </div>
            </div>
            <div class="material-props">
              <div class="prop-item">
                <div class="prop-label">Density</div>
                <div class="prop-value">${m.density} <span class="prop-unit">kg/m³</span></div>
              </div>
              <div class="prop-item">
                <div class="prop-label">Young's Mod.</div>
                <div class="prop-value">${m.youngsModulus} <span class="prop-unit">GPa</span></div>
              </div>
              <div class="prop-item">
                <div class="prop-label">Yield Strength</div>
                <div class="prop-value">${m.yieldStrength} <span class="prop-unit">MPa</span></div>
              </div>
              <div class="prop-item">
                <div class="prop-label">Thermal Cond.</div>
                <div class="prop-value">${m.thermalConductivity} <span class="prop-unit">W/m·K</span></div>
              </div>
            </div>
            <div style="padding: 0 16px 16px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; border-top: 1px solid var(--border); padding-top: 10px; margin-top: 6px;">
              ${m.description}
            </div>
          </div>
        `;
      });
      document.getElementById('materialsGrid').innerHTML = cards || '<div class="empty-state">No materials match selected filters.</div>';
    };

    mainEl.innerHTML = `
      <div class="materials-page page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Engineering Materials Database</h1>
            <div class="section-subtitle">Mechanical, structural, and thermal properties lookup for materials selection</div>
          </div>
        </div>

        <div style="display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; align-items: center;">
          <input type="text" id="matSearch" class="calc-input" placeholder="Search materials (e.g. steel, aluminum)..." style="max-width: 300px; padding: 7px 12px;" />
          <select id="matCatFilter" class="calc-unit-select" style="padding: 7px 12px;">
            <option value="all">All Categories</option>
            ${MATERIAL_CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>

        <div class="grid-3" id="materialsGrid"></div>
      </div>
    `;

    renderGrid(MATERIALS);

    // Filter Listeners
    const searchInput = document.getElementById('matSearch');
    const catSelect = document.getElementById('matCatFilter');
    
    const filterMats = () => {
      const q = searchInput.value.toLowerCase().trim();
      const cat = catSelect.value;
      const filtered = MATERIALS.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
        const matchesCat = cat === 'all' || m.category === cat;
        return matchesSearch && matchesCat;
      });
      renderGrid(filtered);
    };

    searchInput.addEventListener('input', filterMats);
    catSelect.addEventListener('change', filterMats);
  },

  designData() {
    const mainEl = document.getElementById('app');

    const renderTable = (tableKey) => {
      const data = DESIGN_DATA[tableKey];
      if (!data) return '';

      let headersHtml = data.headers.map(h => `<th>${h}</th>`).join('');
      let rowsHtml = data.rows.map(row => {
        return `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
      }).join('');

      return `
        <div class="table-container">
          <div class="table-header">
            <h3 class="table-title">${data.title}</h3>
            <span class="badge badge-purple" style="text-transform: uppercase;">${tableKey}</span>
          </div>
          <div class="table-overflow">
            <table class="data-table">
              <thead>
                <tr>${headersHtml}</tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
    };

    mainEl.innerHTML = `
      <div class="design-data-page page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Design Data Handbook</h1>
            <div class="section-subtitle">Reference tables for standards, limits, machine design dimensions, fits & tolerances</div>
          </div>
        </div>

        <div class="tabs">
          <button class="tab-btn active" data-tab="threads">Threads</button>
          <button class="tab-btn" data-tab="bearings">Bearings</button>
          <button class="tab-btn" data-tab="keys">Keys & Splines</button>
          <button class="tab-btn" data-tab="fits">Fits & Tolerances</button>
          <button class="tab-btn" data-tab="roughness">Roughness Values</button>
        </div>

        <div class="tab-panel active" id="tab-threads">${renderTable('threads')}</div>
        <div class="tab-panel" id="tab-bearings">${renderTable('bearings')}</div>
        <div class="tab-panel" id="tab-keys">${renderTable('keys')}</div>
        <div class="tab-panel" id="tab-fits">${renderTable('fits')}</div>
        <div class="tab-panel" id="tab-roughness">${renderTable('roughness')}</div>
      </div>
    `;

    // Tabs listener
    const tabs = mainEl.querySelectorAll('.tab-btn');
    const panels = mainEl.querySelectorAll('.tab-panel');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        document.getElementById(`tab-${target}`).classList.add('active');
      });
    });
  },

  units() {
    const mainEl = document.getElementById('app');

    const conversionFactors = {
      force: {
        N: 1,
        kN: 1000,
        lbf: 4.44822,
        kgf: 9.80665
      },
      stress: {
        Pa: 1,
        kPa: 1e3,
        MPa: 1e6,
        GPa: 1e9,
        psi: 6894.76,
        'N/mm²': 1e6
      },
      power: {
        W: 1,
        kW: 1000,
        hp: 745.7,
        'BTU/hr': 0.293071
      },
      temperature: {
        // Handled specifically in conversion function
      }
    };

    mainEl.innerHTML = `
      <div class="units-page page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Engineering Unit Converter</h1>
            <div class="section-subtitle">Quickly convert between standard metric, imperial, and SI dimensions</div>
          </div>
        </div>

        <div class="unit-converter-card">
          <div class="calc-input-row" style="margin-bottom: 20px;">
            <label class="calc-label">Select Conversion Class</label>
            <select id="unitClass" class="calc-unit-select" style="font-size: 1rem; padding: 12px;">
              <option value="stress">Pressure & Stress (Pa, MPa, GPa, psi, N/mm²)</option>
              <option value="force">Force (N, kN, lbf, kgf)</option>
              <option value="power">Power (W, kW, hp, BTU/hr)</option>
              <option value="temp">Temperature (°C, °F, K)</option>
            </select>
          </div>

          <div class="unit-input-row">
            <div class="unit-group">
              <label class="calc-label">From</label>
              <input type="number" id="unitValFrom" class="unit-input-field" value="1" />
              <select id="unitSelectFrom" class="unit-select-field"></select>
            </div>

            <button id="unitSwap" class="unit-swap-btn">⇄</button>

            <div class="unit-group">
              <label class="calc-label">To</label>
              <input type="number" id="unitValTo" class="unit-input-field" readonly />
              <select id="unitSelectTo" class="unit-select-field"></select>
            </div>
          </div>
        </div>
      </div>
    `;

    const classSelect = document.getElementById('unitClass');
    const selectFrom = document.getElementById('unitSelectFrom');
    const selectTo = document.getElementById('unitSelectTo');
    const inputValFrom = document.getElementById('unitValFrom');
    const inputValTo = document.getElementById('unitValTo');
    const swapBtn = document.getElementById('unitSwap');

    const updateUnits = () => {
      const type = classSelect.value;
      let options = '';
      if (type === 'temp') {
        options = ['°C', '°F', 'K'].map(o => `<option value="${o}">${o}</option>`).join('');
      } else {
        options = Object.keys(conversionFactors[type]).map(o => `<option value="${o}">${o}</option>`).join('');
      }
      selectFrom.innerHTML = options;
      selectTo.innerHTML = options;
      
      // Select different to-unit by default
      if (selectTo.options.length > 1) {
        selectTo.selectedIndex = 1;
      }
      convert();
    };

    const convert = () => {
      const type = classSelect.value;
      const val = parseFloat(inputValFrom.value) || 0;
      const from = selectFrom.value;
      const to = selectTo.value;

      if (from === to) {
        inputValTo.value = val;
        return;
      }

      if (type === 'temp') {
        let valCelsius = 0;
        if (from === '°C') valCelsius = val;
        else if (from === '°F') valCelsius = (val - 32) * 5/9;
        else if (from === 'K') valCelsius = val - 273.15;

        let finalVal = 0;
        if (to === '°C') finalVal = valCelsius;
        else if (to === '°F') finalVal = (valCelsius * 9/5) + 32;
        else if (to === 'K') finalVal = valCelsius + 273.15;

        inputValTo.value = finalVal.toFixed(4);
      } else {
        const factorFrom = conversionFactors[type][from];
        const factorTo = conversionFactors[type][to];
        // Convert to base unit then to target unit
        const valBase = val * factorFrom;
        const valFinal = valBase / factorTo;
        inputValTo.value = valFinal.toExponential(5).includes('e-') || valFinal.toExponential(5).includes('e+') ? valFinal.toExponential(5) : valFinal.toFixed(5);
      }
    };

    classSelect.addEventListener('change', updateUnits);
    inputValFrom.addEventListener('input', convert);
    selectFrom.addEventListener('change', convert);
    selectTo.addEventListener('change', convert);

    swapBtn.addEventListener('click', () => {
      const temp = selectFrom.value;
      selectFrom.value = selectTo.value;
      selectTo.value = temp;
      convert();
    });

    updateUnits();
  },

  ai(qParam = '') {
    const mainEl = document.getElementById('app');

    mainEl.innerHTML = `
      <div class="ai-page">
        <div class="ai-header">
          <h1 class="section-title">⚙️ AI Engineering Assistant</h1>
          <div class="section-subtitle">Ask equations, procedures, theory, or comparative calculations</div>
        </div>

        <div class="ai-chat-area" id="aiChatArea">
          <div class="ai-message bot">
            <div class="ai-avatar bot">🤖</div>
            <div class="ai-bubble bot">
              Welcome to the Mechanical AI Assistant. Ask queries like:
              <ul>
                <li>"Explain Bernoulli Equation"</li>
                <li>"Design a shaft"</li>
                <li>"Compare FEM and FEA"</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ai-suggestions-row">
          <button class="ai-sug-btn">Design a shaft</button>
          <button class="ai-sug-btn">Calculate beam stress</button>
          <button class="ai-sug-btn">Explain Otto Cycle</button>
        </div>

        <div class="ai-input-area">
          <textarea id="aiInput" class="ai-textarea" placeholder="Ask anything in mechanical engineering..."></textarea>
          <button id="aiSend" class="ai-send-btn">➔</button>
        </div>
      </div>
    `;

    const chatArea = document.getElementById('aiChatArea');
    const input = document.getElementById('aiInput');
    const sendBtn = document.getElementById('aiSend');

    const appendMessage = (text, isBot = false, data = null) => {
      const msg = document.createElement('div');
      msg.className = `ai-message ${isBot ? 'bot' : 'user'}`;
      
      let bodyHtml = '';
      if (isBot && data) {
        let appsHtml = data.applications ? data.applications.map(a => `<li>${a}</li>`).join('') : '';
        let relHtml = data.related ? data.related.map(r => `<span class="related-chip" style="font-size: 0.72rem; padding: 3px 8px; margin-top: 4px; display: inline-block;">${r}</span>`).join(' ') : '';
        bodyHtml = `
          <h4>${data.title}</h4>
          <p><strong>Theory:</strong> ${data.theory}</p>
          <div style="background: var(--bg-elevated); padding: 12px; margin: 10px 0; border-radius: 6px; text-align: center;" class="ai-katex">${data.formula}</div>
          <p><strong>Example Solution:</strong></p>
          <div style="background: var(--bg-elevated); padding: 12px; margin: 10px 0; border-radius: 6px; white-space: pre-line;">${data.example}</div>
          ${appsHtml ? `<p><strong>Key Applications:</strong></p><ul style="margin-left: 20px;">${appsHtml}</ul>` : ''}
          ${relHtml ? `<div style="margin-top: 10px;"><strong>Related:</strong> ${relHtml}</div>` : ''}
        `;
      } else {
        bodyHtml = text.replace(/\n/g, '<br/>');
      }

      msg.innerHTML = `
        <div class="ai-avatar ${isBot ? 'bot' : 'user'}">${isBot ? '🤖' : '👤'}</div>
        <div class="ai-bubble ${isBot ? 'bot' : 'user'}">${bodyHtml}</div>
      `;
      chatArea.appendChild(msg);
      chatArea.scrollTop = chatArea.scrollHeight;

      // Render math equations if any
      if (isBot && window.renderMathInElement) {
        window.renderMathInElement(msg, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ]
        });
      }
    };

    const handleSend = () => {
      const query = input.value.trim();
      if (!query) return;

      appendMessage(query, false);
      input.value = '';

      // Simulated typing
      setTimeout(() => {
        const responseData = AiAssistant.generateResponse(query);
        appendMessage('', true, responseData);
      }, 700);
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    // Handle suggestion button clicks
    const sugBtns = document.querySelectorAll('.ai-sug-btn');
    sugBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        input.value = btn.textContent;
        handleSend();
      });
    });

    // Auto-trigger if query param present
    if (qParam) {
      input.value = qParam;
      handleSend();
    }
  },

  dashboard() {
    const mainEl = document.getElementById('app');

    const renderBookmarks = () => {
      const bList = Utils.getBookmarks();
      let html = '';
      bList.forEach(b => {
        html += `
          <div class="recent-item" onclick="location.hash='#/article/${b.id}'">
            <span class="recent-icon">🔖</span>
            <span class="recent-label">${b.name}</span>
            <span class="recent-time">Article</span>
          </div>
        `;
      });
      return html || '<div class="empty-state"><div class="empty-state-icon">🔖</div><div class="empty-state-text">No articles bookmarked yet.</div></div>';
    };

    const renderHistory = () => {
      const hList = Utils.getHistory();
      let html = '';
      hList.forEach(h => {
        html += `
          <div class="recent-item" onclick="location.hash='#/article/${h.id}'">
            <span class="recent-icon">🕒</span>
            <span class="recent-label">${h.name}</span>
            <span class="recent-time">${new Date(h.timestamp).toLocaleTimeString()}</span>
          </div>
        `;
      });
      return html || '<div class="empty-state"><div class="empty-state-icon">🕒</div><div class="empty-state-text">No view history recorded.</div></div>';
    };

    mainEl.innerHTML = `
      <div class="dashboard-page page">
        <div class="section-header">
          <div>
            <h1 class="section-title">Engineering Dashboard</h1>
            <div class="section-subtitle">Track your bookmarked topics, formulas sheet, and recent search profiles</div>
          </div>
          <button id="clearHistBtn" class="btn btn-secondary btn-sm">Clear History</button>
        </div>

        <div class="dashboard-grid">
          <div class="dashboard-card">
            <h2 class="widget-title">📌 Bookmarked Articles & Formulas</h2>
            <div id="dashboardBookmarks">${renderBookmarks()}</div>
          </div>

          <div class="dashboard-card">
            <h2 class="widget-title">🕒 Recently Viewed Articles</h2>
            <div id="dashboardHistory">${renderHistory()}</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('clearHistBtn').addEventListener('click', () => {
      Utils.clearHistory();
      document.getElementById('dashboardHistory').innerHTML = renderHistory();
    });
  }
};
