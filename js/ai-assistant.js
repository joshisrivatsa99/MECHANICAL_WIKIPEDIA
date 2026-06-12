const AiAssistant = {
  // Pre-coded detailed responses for matching prompts
  knowledgeBase: {
    'explain bernoulli equation': {
      title: 'Bernoulli Equation Explanation',
      theory: 'Bernoulli\'s equation is a statement of the conservation of energy principle for flowing fluids. It states that the sum of static pressure, dynamic pressure (kinetic energy per unit volume), and hydrostatic pressure (potential energy per unit volume) remains constant along any streamline of a steady, incompressible, inviscid fluid flow.',
      formula: '$$P + \\frac{1}{2}\\rho v^2 + \\rho g z = C$$',
      example: 'Consider water (ρ = 1000 kg/m³) flowing through a horizontal Venturi tube. If the velocity increases from 1 m/s at the inlet to 4 m/s at the throat, the pressure drop can be calculated. \n\nSince the tube is horizontal, z₁ = z₂. Thus:\n$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$\n$$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$$\n$$P_1 - P_2 = 0.5 \\times 1000 \\times (4^2 - 1^2) = 500 \\times 15 = 7500 \\text{ Pa} = 7.5 \\text{ kPa}$$\n\nHence, throat pressure drops by 7.5 kPa.',
      applications: [
        'Venturi Tube flow meters used to measure pipeline flow rates.',
        'Pitot Tubes to determine airspeed on aircraft.',
        'Siphons and hydraulic networks.',
        'Carburetors in internal combustion engines.'
      ],
      related: ['Fluid Mechanics', 'Reynolds Number', 'Viscosity', 'Euler Equation']
    },
    'design a shaft': {
      title: 'Shaft Design Procedure',
      theory: 'Shafts are rotating elements used to transmit power. Sizing is governed by two criteria: strength (resisting shear stresses from torsion and bending stresses from transverse loads) and rigidity (limiting torsional and lateral deflection to prevent gear/bearing misalignment). Design is typically calculated using the ASME Shaft Design Code.',
      formula: '$$d^3 = \\frac{16}{\\pi \\tau_{max}} \\sqrt{(K_b M_b)^2 + (K_t T)^2}$$',
      example: 'A shaft transmits 15 kW at 1500 rpm. Ultimate tensile strength is 400 MPa (allowable shear stress τ = 80 MPa). Find the shaft diameter neglecting bending.\n\n1. Calculate Torque T:\n$$P = \\frac{2\\pi N T}{60} \\implies 15000 = \\frac{2\\pi \\times 1500 \\times T}{60} \\implies T = 95.49 \\text{ N·m}$$\n\n2. Solve for Diameter:\n$$d^3 = \\frac{16 T}{\\pi \\tau} = \\frac{16 \\times 95.49}{\\pi \\times 80 \\times 10^6} \\approx 6.079 \\times 10^{-6} \\text{ m}^3$$\n$$d = (6.079 \\times 10^{-6})^{1/3} \\approx 0.01825 \\text{ m} = 18.25 \\text{ mm}$$\n\nRecommended standard size is 20 mm.',
      applications: [
        'Automotive drive shafts (propeller shafts).',
        'Industrial motor rotors.',
        'Gearbox input and output shafts.',
        'Turbine shafts.'
      ],
      related: ['Torque and Power', 'Shear Stress', 'Key and Keyways', 'Mohr Circle']
    },
    'calculate beam stress': {
      title: 'Beam Bending Stress',
      theory: 'When a beam is subjected to a bending moment, longitudinal bending stresses are induced. The upper fibers experience compression while lower fibers experience tension (or vice versa), with zero stress at the neutral axis. This is governed by the Euler-Bernoulli Bending Formula.',
      formula: '$$\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$$',
      example: 'A rectangular beam (width 50 mm, depth 100 mm) is subjected to a bending moment of 5 kN·m. Find the maximum bending stress.\n\n1. Calculate Moment of Inertia I:\n$$I = \\frac{b d^3}{12} = \\frac{0.05 \\times 0.1^3}{12} = 4.167 \\times 10^{-6} \\text{ m}^4$$\n\n2. Distance to outermost fiber y_max:\n$$y_{max} = \\frac{d}{2} = 0.05 \\text{ m}$$\n\n3. Calculate Maximum Stress:\n$$\\sigma_{max} = \\frac{M \\cdot y_{max}}{I} = \\frac{5000 \\times 0.05}{4.167 \\times 10^{-6}} = 60,000,000 \\text{ Pa} = 60 \\text{ MPa}$$',
      applications: [
        'Bridge structural girders.',
        'Floor joists and roof trusses.',
        'Chassis design for trucks and machinery.',
        'Cantilever supports.'
      ],
      related: ['Strength of Materials', 'Moment of Inertia', 'Deflection of Beams']
    },
    'explain otto cycle': {
      title: 'Otto Cycle (Gas Power Cycle)',
      theory: 'The Otto Cycle is the idealized thermodynamic cycle for spark-ignition (gasoline) reciprocating engines. It consists of four internally reversible processes: 1-2 Isentropic compression, 2-3 Constant-volume (isochoric) heat addition, 3-4 Isentropic expansion, and 4-1 Constant-volume heat rejection.',
      formula: '$$\\eta = 1 - \\frac{1}{r^{\\gamma - 1}}$$ (where $r = V_1/V_2$ is the compression ratio)',
      example: 'An engine operating on the Otto cycle has a compression ratio of 8. Working fluid is air (γ = 1.4). Find the thermal efficiency.\n\n$$\\eta = 1 - \\frac{1}{8^{1.4 - 1}} = 1 - \\frac{1}{8^{0.4}} = 1 - \\frac{1}{2.297} \\approx 1 - 0.435 = 0.565 \\text{ or } 56.5\\%$$',
      applications: [
        'Four-stroke gasoline automobile engines.',
        'Two-stroke portable engines (lawnmowers, chainsaws).',
        'Light aircraft propulsion engines.'
      ],
      related: ['Thermodynamics', 'Carnot Cycle', 'Diesel Cycle', 'Internal Combustion Engines']
    },
    'compare fem and fea': {
      title: 'FEM vs FEA Comparison',
      theory: 'FEM (Finite Element Method) is the mathematical and numerical formulation/methodology used to solve complex partial differential equations by dividing a domain into small elements. FEA (Finite Element Analysis) is the practical application of this method to solve real-world engineering problems (stresses, fluid flow, electromagnetism) using software tools.',
      formula: '$$\\mathbf{K} \\cdot \\mathbf{u} = \\mathbf{F}$$ (System Stiffness Equation)',
      example: 'In designing a bridge bracket:\n- **FEM**: Formulation of element stiffness matrices, shape functions (e.g., linear triangular elements), and boundary assembly equations.\n- **FEA**: Importing the CAD model of the bracket into Ansys or SolidWorks, applying a 50 kN load, meshing, and analyzing the resulting Von Mises stress contours to verify safety.',
      applications: [
        'Automotive crash simulation.',
        'Aerospace structural weight optimization.',
        'Electronic package thermal profiling.',
        'Biomechanical implant stress analysis.'
      ],
      related: ['FEA', 'CAD', 'Stress Concentration', 'Numerical Methods']
    }
  },

  // Fallback pattern matching generator
  generateResponse(query) {
    const q = query.toLowerCase().trim();
    
    // Look for direct key match
    for (let key in this.knowledgeBase) {
      if (q.includes(key)) {
        return this.knowledgeBase[key];
      }
    }

    // Pattern matching fallbacks
    if (q.includes('stress') || q.includes('strain') || q.includes('elastic') || q.includes('modulus')) {
      return {
        title: 'Strength of Materials Topic',
        theory: 'Mechanical components subjected to external forces develop internal stresses (resistance per unit area) and strains (relative deformation). In the elastic range, stress is directly proportional to strain (Hooke\'s Law). When stresses exceed the material\'s yield point, plastic deformation occurs, eventually leading to fracture.',
        formula: '$$\\sigma = E \\cdot \\epsilon \\quad \\text{and} \\quad \\tau = G \\cdot \\gamma$$',
        example: 'A structural steel bar (E = 200 GPa) of length 1 m is stretched by 0.5 mm. Strain ε = 0.0005. Stress σ = E * ε = 200e9 * 0.0005 = 100 MPa.',
        applications: ['Structural design', 'Component sizing', 'Failure mode prevention', 'Fatigue checking'],
        related: ['Normal Stress', 'Normal Strain', 'Hooke\'s Law', 'Young\'s Modulus']
      };
    }

    if (q.includes('fluid') || q.includes('flow') || q.includes('reynolds') || q.includes('viscosity') || q.includes('pipe')) {
      return {
        title: 'Fluid Mechanics Dynamics',
        theory: 'Fluid flows are categorized based on viscosity and speed. Flows are laminar (viscous-dominated, smooth) or turbulent (inertial-dominated, chaotic). Bernoulli\'s equation describes conservation of energy, while Reynolds number determines flow regimes. Head loss due to friction is modeled by Darcy-Weisbach.',
        formula: '$$Re = \\frac{\\rho v D}{\\mu} \\quad \\text{and} \\quad h_f = f \\frac{L}{D} \\frac{v^2}{2g}$$',
        example: 'Water flowing through a pipe. Sizing calculation relies on maintaining a speed below 2.5 m/s to prevent pipe erosion and excessive friction loss.',
        applications: ['Pipeline engineering', 'Pump sizing', 'HVAC ducts', 'Aerodynamics'],
        related: ['Reynolds Number', 'Bernoulli\'s Equation', 'Fluid Machinery']
      };
    }

    if (q.includes('heat') || q.includes('thermal') || q.includes('conduction') || q.includes('radiation') || q.includes('temperature')) {
      return {
        title: 'Thermal Engineering & Heat Transfer',
        theory: 'Heat transfer is thermal energy in transit due to a spatial temperature gradient. It occurs via three modes: Conduction (diffusion of energy in solids/fluids), Convection (bulk fluid motion), and Radiation (electromagnetic waves emitted by all matter).',
        formula: '$$q_{cond} = -k A \\frac{dT}{dx} \\quad \\text{and} \\quad q_{conv} = h A (T_s - T_\\infty)$$',
        example: 'Heat loss through a brick wall: conductive transfer dictates insulation thickness to maintain indoor temperature efficiently.',
        applications: ['Engine block cooling', 'HVAC heat exchangers', 'Thermal insulation', 'Microelectronics heat sinks'],
        related: ['Fourier\'s Law', 'Nusselt Number', 'Stefan-Boltzmann Law']
      };
    }

    if (q.includes('cycle') || q.includes('thermodynamic') || q.includes('entropy') || q.includes('refrigeration') || q.includes('engine')) {
      return {
        title: 'Thermodynamics & Power Cycles',
        theory: 'Thermodynamics deals with heat, work, and energy conversion. Power cycles (Otto, Diesel, Rankine, Brayton) convert heat into mechanical work. Refrigeration cycles transfer heat from cold to hot reservoirs. Carnot cycle sets the maximum theoretical limits of efficiency.',
        formula: '$$\\eta_{th} = \\frac{W_{net}}{Q_{in}} \\quad \\text{and} \\quad COP = \\frac{Q_{cool}}{W_{in}}$$',
        example: 'A steam turbine operating on the Rankine cycle uses superheated steam to turn a generator, releasing heat in a condenser.',
        applications: ['Steam power plants', 'Automotive engines', 'Air conditioning units', 'Gas turbines'],
        related: ['Carnot Efficiency', 'Otto Cycle', 'Applied Thermodynamics']
      };
    }

    // Default Fallback
    return {
      title: 'General Mechanical Engineering Query',
      theory: `You asked about "${query}". Mechanical Engineering involves applying physics, mathematics, and materials science to design, analyze, manufacture, and maintain mechanical systems. Fundamental equations connect forces, energy, and mass.`,
      formula: '$$F = m \\cdot a \\quad \\text{and} \\quad W = F \\cdot d$$',
      example: 'Design calculations involve identifying boundary conditions, calculating internal stresses, and ensuring safe factors against yield.',
      applications: ['Machine Design', 'Manufacturing', 'Fluid Power Systems', 'Automation'],
      related: ['Subjects List', 'Formulas List', 'Materials Database']
    };
  },

  // Async ChatGPT request
  async askChatGPT(query) {
    const apiKey = Utils.getApiKey();
    if (!apiKey) {
      // Return offline simulation response
      return {
        ...this.generateResponse(query),
        isOfflineFallback: true
      };
    }

    const systemPrompt = `You are a helpful Mechanical Engineering AI Assistant embedded in the "Mechanical Wikipedia" platform.
Your task is to answer user queries with precise, structured engineering explanations.
You MUST output your response in JSON format. Do not include any markdown fences like \`\`\`json or \`\`\` in the raw response text.
The JSON must have the following exact schema:
{
  "title": "A concise title of the topic",
  "theory": "A detailed explanation of the theory and concepts (1-2 paragraphs)",
  "formula": "Standard formula using LaTeX formatting wrapped in double dollar signs, e.g. $$F = m \\\\cdot a$$",
  "example": "A clear, numerical, step-by-step example calculation illustrating the topic",
  "applications": ["Application 1", "Application 2", "Application 3"],
  "related": ["Related Topic 1", "Related Topic 2", "Related Topic 3"]
}`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: query }
          ],
          temperature: 0.2
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to fetch from OpenAI');
      }

      const data = await response.json();
      const rawText = data.choices[0].message.content.trim();
      
      // Clean potential markdown code blocks
      const cleanJsonStr = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
      const parsedData = JSON.parse(cleanJsonStr);
      return parsedData;
    } catch (err) {
      console.error('ChatGPT API Error:', err);
      // Fallback to local database but flag the error
      return {
        ...this.generateResponse(query),
        apiError: err.message
      };
    }
  }
};
