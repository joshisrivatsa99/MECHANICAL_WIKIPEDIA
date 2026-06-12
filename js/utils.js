const Utils = {
  // Theme Manager
  initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeToggleUI(theme);
  },
  
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    this.updateThemeToggleUI(next);
    this.showToast(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} Mode`);
  },

  updateThemeToggleUI(theme) {
    const btns = [document.getElementById('themeToggle'), document.getElementById('themeToggle2')];
    btns.forEach(btn => {
      if (btn) {
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
        btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      }
    });
  },

  // Toast Notifications
  showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    toast.classList.remove('hidden');
    
    // Auto-dismiss
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hidden');
    }, 3000);
  },

  // Bookmarks / Favorites Manager
  getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks')) || [];
  },

  toggleBookmark(type, id, name) {
    let bookmarks = this.getBookmarks();
    const index = bookmarks.findIndex(b => b.type === type && b.id === id);
    let bookmarked = false;
    
    if (index > -1) {
      bookmarks.splice(index, 1);
      this.showToast(`Removed "${name}" from bookmarks`);
    } else {
      bookmarks.push({ type, id, name, timestamp: Date.now() });
      this.showToast(`Added "${name}" to bookmarks`);
      bookmarked = true;
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    return bookmarked;
  },

  isBookmarked(type, id) {
    const bookmarks = this.getBookmarks();
    return bookmarks.some(b => b.type === type && b.id === id);
  },

  // Search & Navigation History
  getHistory() {
    return JSON.parse(localStorage.getItem('nav_history')) || [];
  },

  addToHistory(type, id, name) {
    let history = this.getHistory();
    // Remove duplicates
    history = history.filter(h => !(h.type === type && h.id === id));
    // Add to top
    history.unshift({ type, id, name, timestamp: Date.now() });
    // Keep last 15
    if (history.length > 15) history.pop();
    localStorage.setItem('nav_history', JSON.stringify(history));
  },

  clearHistory() {
    localStorage.removeItem('nav_history');
    this.showToast('Cleared history');
  },

  // API Key Manager
  getApiKey() {
    return localStorage.getItem('openai_api_key') || '';
  },

  setApiKey(key) {
    if (key) {
      localStorage.setItem('openai_api_key', key.trim());
      this.showToast('OpenAI API Key saved successfully');
    } else {
      localStorage.removeItem('openai_api_key');
      this.showToast('OpenAI API Key removed');
    }
  },

  hasApiKey() {
    return !!this.getApiKey();
  },

  // Voice Search Handler
  initVoiceSearch(onResultCallback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.showToast('Voice search not supported in this browser.', 'warning');
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      this.showToast('Listening for voice input...', 'info');
      const voiceBtn = document.getElementById('voiceBtn');
      if (voiceBtn) voiceBtn.classList.add('recording');
    };

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      this.showToast(`Voice Search: "${speechToText}"`);
      if (onResultCallback) onResultCallback(speechToText);
    };

    recognition.onerror = (event) => {
      this.showToast(`Speech recognition error: ${event.error}`, 'warning');
      this.stopVoiceSearch();
    };

    recognition.onend = () => {
      this.stopVoiceSearch();
    };

    return recognition;
  },

  stopVoiceSearch() {
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) voiceBtn.classList.remove('recording');
  }
};
