const SearchEngine = {
  // Simple fuzzy matching algorithm that scores strings
  scoreMatch(query, text) {
    if (!text) return 0;
    const q = query.toLowerCase().trim();
    const t = text.toLowerCase();
    
    if (t === q) return 100; // Perfect match
    if (t.startsWith(q)) return 80; // Starts with query
    if (t.includes(q)) return 50; // Substring
    
    // Check word matches
    const qWords = q.split(/\s+/);
    let score = 0;
    let matches = 0;
    qWords.forEach(word => {
      if (t.includes(word)) {
        score += 15;
        matches++;
      }
    });
    if (matches === qWords.length) score += 20; // All query words found
    
    return score;
  },

  query(q, filterType = 'all') {
    if (!q || q.length < 2) return [];
    
    const results = [];

    // 1. Search Subjects
    if (filterType === 'all' || filterType === 'subject') {
      SUBJECTS.forEach(sub => {
        let score = 0;
        score += this.scoreMatch(q, sub.name) * 1.5;
        score += this.scoreMatch(q, sub.category) * 0.8;
        score += this.scoreMatch(q, sub.description) * 0.4;
        
        if (score > 10) {
          results.push({
            type: 'subject',
            id: sub.id,
            title: sub.name,
            badge: sub.category,
            badgeClass: 'badge-blue',
            desc: sub.description,
            keywords: [sub.category, 'subject', 'course', 'curriculum'],
            link: `#/subject/${sub.id}`,
            score: score
          });
        }
      });
    }

    // 2. Search Formulas
    if (filterType === 'all' || filterType === 'formula') {
      FORMULAS.forEach(f => {
        let score = 0;
        score += this.scoreMatch(q, f.name) * 1.8;
        score += this.scoreMatch(q, f.description) * 0.5;
        f.keywords.forEach(kw => {
          if (kw.toLowerCase().includes(q.toLowerCase())) score += 25;
        });
        
        if (score > 10) {
          const subObj = SUBJECTS.find(s => s.id === f.subject);
          results.push({
            type: 'formula',
            id: f.id,
            title: f.name,
            badge: subObj ? subObj.name : 'Formula',
            badgeClass: 'badge-purple',
            formula: f.equation,
            desc: f.description,
            keywords: f.keywords,
            link: `#/article/${f.id}`, // Formulas are rendered as rich articles
            score: score
          });
        }
      });
    }

    // 3. Search Articles
    if (filterType === 'all' || filterType === 'article') {
      Object.keys(ARTICLES).forEach(key => {
        const art = ARTICLES[key];
        
        // Skip duplicate formula entries unless specifically querying articles
        if (FORMULAS.some(f => f.id === key) && filterType === 'all') return;

        let score = 0;
        score += this.scoreMatch(q, art.title) * 2.0;
        score += this.scoreMatch(q, art.definition) * 0.6;
        score += this.scoreMatch(q, art.explanation) * 0.3;
        
        if (art.relatedTopics) {
          art.relatedTopics.forEach(rt => {
            if (rt.toLowerCase().includes(q.toLowerCase())) score += 15;
          });
        }

        if (score > 10) {
          const subObj = SUBJECTS.find(s => s.id === art.subject);
          results.push({
            type: 'article',
            id: key,
            title: art.title,
            badge: subObj ? subObj.name : 'Article',
            badgeClass: 'badge-teal',
            desc: art.definition.substring(0, 160) + '...',
            keywords: art.relatedTopics || [],
            link: `#/article/${key}`,
            score: score
          });
        }
      });
    }

    // 4. Search Materials
    if (filterType === 'all' || filterType === 'material') {
      MATERIALS.forEach(m => {
        let score = 0;
        score += this.scoreMatch(q, m.name) * 1.8;
        score += this.scoreMatch(q, m.category) * 1.0;
        score += this.scoreMatch(q, m.description) * 0.4;
        
        if (score > 10) {
          results.push({
            type: 'material',
            id: m.id,
            title: m.name,
            badge: `${m.category} Material`,
            badgeClass: 'badge-green',
            desc: m.description,
            keywords: [m.category, 'yield strength', 'density', 'youngs modulus'],
            link: `#/materials`,
            score: score
          });
        }
      });
    }

    // 5. Search Calculators
    if (filterType === 'all' || filterType === 'calculator') {
      CALCULATORS.forEach(c => {
        let score = 0;
        score += this.scoreMatch(q, c.name) * 1.8;
        c.inputs.forEach(inp => {
          if (inp.name.toLowerCase().includes(q.toLowerCase())) score += 10;
        });

        if (score > 10) {
          const subObj = SUBJECTS.find(s => s.id === c.subject);
          results.push({
            type: 'calculator',
            id: c.id,
            title: c.name,
            badge: subObj ? subObj.name : 'Calculator',
            badgeClass: 'badge-amber',
            desc: `Interactive calculator with inputs for: ${c.inputs.map(i => i.name).join(', ')}`,
            keywords: ['calculator', 'computation', 'solver'],
            link: `#/calculators`,
            score: score
          });
        }
      });
    }

    // 6. Search Design Data
    if (filterType === 'all' || filterType === 'design-data') {
      Object.keys(DESIGN_DATA).forEach(key => {
        const tbl = DESIGN_DATA[key];
        let score = 0;
        score += this.scoreMatch(q, tbl.title) * 1.5;
        tbl.headers.forEach(h => {
          if (h.toLowerCase().includes(q.toLowerCase())) score += 10;
        });

        if (score > 10) {
          results.push({
            type: 'design-data',
            id: key,
            title: tbl.title,
            badge: 'Design Handbook Table',
            badgeClass: 'badge-red',
            desc: `Standard specifications table with headers: ${tbl.headers.join(', ')}`,
            keywords: ['handbook', 'standards', 'limits', 'design table'],
            link: `#/design-data`,
            score: score
          });
        }
      });
    }

    // Sort by score descending
    return results.sort((a, b) => b.score - a.score);
  }
};
