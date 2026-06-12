const CalculatorEngine = {
  // Render a calculator card into a target DOM container
  render(calcId, containerEl) {
    const calc = CALCULATORS.find(c => c.id === calcId);
    if (!calc) {
      containerEl.innerHTML = `<div class="calc-error">Calculator "${calcId}" not found.</div>`;
      return;
    }

    const subObj = SUBJECTS.find(s => s.id === calc.subject);
    const formulaObj = FORMULAS.find(f => f.id === calc.formulaId);
    const equationHtml = formulaObj ? `$$\\text{Formula: } ${formulaObj.equation}$$` : '';

    let inputsHtml = '';
    calc.inputs.forEach(inp => {
      inputsHtml += `
        <div class="calc-input-row">
          <label class="calc-label" for="calc-in-${calcId}-${inp.id}">
            <span>${inp.name}</span>
            <span class="calc-label-unit">[${inp.unit}]</span>
          </label>
          <div class="calc-input-wrap">
            <input type="number" id="calc-in-${calcId}-${inp.id}" class="calc-input" 
                   value="${inp.default}" step="${inp.step || 'any'}" />
          </div>
        </div>
      `;
    });

    let outputsHtml = '';
    calc.outputs.forEach(out => {
      outputsHtml += `
        <div class="calc-result-item" style="margin-top: 10px;">
          <div class="calc-result-label">${out.name}</div>
          <span id="calc-out-${calcId}-${out.id}" class="calc-result-value">--</span>
          <span class="calc-result-unit">${out.unit}</span>
        </div>
      `;
    });

    containerEl.innerHTML = `
      <div class="calc-card" id="calc-card-${calcId}">
        <div class="calc-card-header">
          <span class="calc-card-icon">🧮</span>
          <div>
            <div class="calc-card-title">${calc.name}</div>
            <div class="calc-card-subject">${subObj ? subObj.name : ''}</div>
          </div>
        </div>
        <div class="calc-card-body">
          ${equationHtml ? `<div class="calc-formula-display" id="calc-math-${calcId}">${equationHtml}</div>` : ''}
          <div class="calc-inputs">
            ${inputsHtml}
          </div>
          <button id="calc-btn-${calcId}" class="calc-btn">Calculate</button>
          <div class="calc-result" id="calc-result-${calcId}">
            ${outputsHtml}
            <div class="calc-steps" id="calc-steps-${calcId}" style="white-space: pre-line; border-top: 1px dashed var(--border); margin-top: 12px; padding-top: 12px;"></div>
          </div>
        </div>
      </div>
    `;

    // Render Math Equations if KaTeX is loaded
    if (equationHtml && window.renderMathInElement) {
      window.renderMathInElement(document.getElementById(`calc-math-${calcId}`), {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }

    // Attach Event Handlers
    const calculateBtn = document.getElementById(`calc-btn-${calcId}`);
    const triggerCalculation = () => {
      const inputVals = {};
      calc.inputs.forEach(inp => {
        const inputEl = document.getElementById(`calc-in-${calcId}-${inp.id}`);
        inputVals[inp.id] = parseFloat(inputEl.value) || 0;
      });

      const res = calc.calculate(inputVals);
      const resultBox = document.getElementById(`calc-result-${calcId}`);
      
      if (res.error) {
        Utils.showToast(res.error, 'warning');
        return;
      }

      // Show result block
      resultBox.classList.add('show');

      // Populate values
      calc.outputs.forEach(out => {
        const outEl = document.getElementById(`calc-out-${calcId}-${out.id}`);
        if (outEl) outEl.textContent = res[out.id];
      });

      // Populate calculation steps
      const stepsEl = document.getElementById(`calc-steps-${calcId}`);
      if (stepsEl && res.steps) {
        stepsEl.textContent = `Calculation Steps:\n${res.steps}`;
      }
    };

    calculateBtn.addEventListener('click', triggerCalculation);
    
    // Auto-calculate first time
    triggerCalculation();
  }
};
