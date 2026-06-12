const ARTICLES = {
  'stress': {
    title: 'Stress (Mechanics)',
    subject: 'strength-of-materials',
    definition: 'Stress is defined as the internal resistance offered by a body to deformation when subjected to an external load. It represents the intensity of internal forces distributed over a unit cross-sectional area.',
    formula: '\\sigma = \\frac{F}{A}',
    variables: [
      { symbol: '\\sigma', name: 'Normal Stress', unit: 'Pa (N/m²)' },
      { symbol: 'F', name: 'Internal resisting force (equal to external load under equilibrium)', unit: 'N' },
      { symbol: 'A', name: 'Cross-sectional area resisting the load', unit: 'm²' }
    ],
    units: 'Pascal (Pa) or Megapascal (MPa). 1 Pa = 1 N/m², 1 MPa = 10⁶ N/m² = 1 N/mm².',
    explanation: 'When an external force is applied to a body, its molecules resist deformation by exerting equal and opposite internal molecular forces. If the body remains in equilibrium, this internal resisting force is equal to the external load. Stress is measured normal to the plane (Normal Stress, either tensile or compressive) or parallel to the plane (Shear Stress). It is a tensor quantity because it requires both magnitude, direction, and the orientation of the plane on which it acts to be fully defined.',
    assumptions: [
      'The material is continuous and homogeneous.',
      'The material is isotropic (has same properties in all directions).',
      'The loading is axial and passes through the centroid of the cross-section (for uniform normal stress).',
      'The stress distribution is uniform across the cross-sectional area.'
    ],
    applications: [
      'Determining safety factors in structural beams, columns, and bridges.',
      'Sizing shafts and couplings in rotary transmission systems.',
      'Designing pressure vessels (thin-walled and thick-walled cylinders).',
      'Determining allowable stress limits in machinery design.'
    ],
    examples: 'A steel rod of diameter 20 mm is subjected to an axial pull of 31.4 kN. The cross-sectional area is A = πd²/4 = π(0.02)²/4 ≈ 0.000314 m². The normal tensile stress is σ = F / A = 31400 / 0.000314 = 100,000,000 Pa = 100 MPa.',
    relatedTopics: ['shear-stress', 'normal-strain', 'von-mises-stress', 'strength-of-materials'],
    references: [
      'Timoshenko, S. P., & Gere, J. M. (1997). Mechanics of Materials.',
      'Beer, F. P., Johnston, E. R., DeWolf, J. T., & Mazurek, D. F. (2015). Mechanics of Materials.'
    ]
  },
  'normal-stress': {
    title: 'Normal Stress',
    subject: 'strength-of-materials',
    definition: 'Normal stress is the component of stress that acts perpendicular (normal) to the cross-sectional surface of a member.',
    formula: '\\sigma = \\frac{F}{A}',
    variables: [
      { symbol: '\\sigma', name: 'Normal Stress', unit: 'Pa' },
      { symbol: 'F', name: 'Normal Applied Force', unit: 'N' },
      { symbol: 'A', name: 'Cross-sectional Area perpendicular to force', unit: 'm²' }
    ],
    units: 'Pascal (Pa), N/mm² or MPa.',
    explanation: 'Normal stress occurs when the applied force pulls (Tension) or pushes (Compression) a bar or rod along its longitudinal axis. Tensile stress is taken as positive and tends to elongate the member. Compressive stress is taken as negative and tends to shorten the member. It is essential in designing trusses, columns, and structural links.',
    assumptions: [
      'Axial loading passes through the centroid.',
      'Material is homogeneous and isotropic.',
      'Saint-Venant\'s Principle applies (uniform stress distribution sufficiently far from point of load application).'
    ],
    applications: [
      'Sizing of structural columns and tie rods.',
      'Calculations of elongation or contraction in columns.',
      'Safety checks under tensile loading.'
    ],
    examples: 'A column supporting a weight of 50,000 N has a cross-sectional area of 0.01 m². The compressive stress is σ = -50,000 / 0.01 = -5,000,000 Pa = -5 MPa (or 5 MPa in compression).',
    relatedTopics: ['stress', 'normal-strain', 'thermal-stress'],
    references: [
      'Hibbeler, R. C. (2018). Mechanics of Materials.'
    ]
  },
  'shear-stress': {
    title: 'Shear Stress',
    subject: 'strength-of-materials',
    definition: 'Shear stress is the stress component that acts parallel or tangential to the face of a material element.',
    formula: '\\tau = \\frac{V}{A}',
    variables: [
      { symbol: '\\tau', name: 'Shear Stress', unit: 'Pa' },
      { symbol: 'V', name: 'Shear Force acting parallel to the surface', unit: 'N' },
      { symbol: 'A', name: 'Area of the surface parallel to the shear force', unit: 'm²' }
    ],
    units: 'Pascal (Pa) or MPa.',
    explanation: 'Unlike normal stress which acts perpendicular, shear stress acts in the plane of the area, tending to cause one layer of material to slide relative to another adjacent layer. Examples of shear stress include structural joints connected by rivets or bolts under load, keys holding pulleys onto shafts, and fluids flowing near solid boundaries (viscous shear stress).',
    assumptions: [
      'The shear force is uniformly distributed over the area.',
      'The joint is tight and bending effects are neglected in simple shear calculations.'
    ],
    applications: [
      'Design and check of riveted, bolted, and pinned connections.',
      'Calculation of shear capacity in beam webs.',
      'Sizing of keys, splines, and couplings.'
    ],
    examples: 'A bolt of diameter 16 mm is used to couple two plates. A force of 20,000 N acts perpendicular to the bolt. The shear area is A = πd²/4 = π(0.016)²/4 = 0.000201 m². The average shear stress is τ = V/A = 20000 / 0.000201 = 99.5 MPa.',
    relatedTopics: ['stress', 'shaft-torsional-shear-stress', 'normal-stress'],
    references: [
      'Singer, F. L., & Pytel, A. (1980). Strength of Materials.'
    ]
  },
  'reynolds-number': {
    title: 'Reynolds Number',
    subject: 'fluid-mechanics',
    definition: 'Reynolds number (Re) is a dimensionless quantity that measures the ratio of inertial forces to viscous forces in a flowing fluid.',
    formula: 'Re = \\frac{\\rho \\cdot v \\cdot D}{\\mu} = \\frac{v \\cdot D}{\\nu}',
    variables: [
      { symbol: 'Re', name: 'Reynolds Number', unit: 'Dimensionless' },
      { symbol: '\\rho', name: 'Fluid Density', unit: 'kg/m³' },
      { symbol: 'v', name: 'Flow Velocity', unit: 'm/s' },
      { symbol: 'D', name: 'Hydraulic Diameter or Characteristic Length', unit: 'm' },
      { symbol: '\\mu', name: 'Dynamic Viscosity', unit: 'Pa·s' },
      { symbol: '\\nu', name: 'Kinematic Viscosity (μ/ρ)', unit: 'm²/s' }
    ],
    units: 'Dimensionless.',
    explanation: 'Reynolds number is a fundamental parameter in fluid mechanics used to characterize different flow regimes, such as laminar or turbulent flow. At low Reynolds numbers, viscous forces dominate, leading to a smooth, ordered fluid motion (Laminar Flow). At high Reynolds numbers, inertial forces dominate, creating eddies, vortices, and chaotic flow fluctuations (Turbulent Flow). The point at which the flow transitions from laminar to turbulent is called the Critical Reynolds Number (for pipe flow, typically Re ≈ 2000 - 4000).',
    assumptions: [
      'Steady-state flow conditions.',
      'Fluid is Newtonian (viscosity is independent of shear rate).'
    ],
    applications: [
      'Sizing piping systems and pumps to manage pressure drop.',
      'Scale model testing in wind tunnels (dynamic similarity).',
      'Selecting appropriate boundary layer and turbulence models in CFD.',
      'Correlating heat transfer rates in convection systems.'
    ],
    examples: 'Water (ρ = 1000 kg/m³, μ = 1e-3 Pa·s) flows through a tube of diameter 0.02 m at a velocity of 0.5 m/s. Re = (1000 * 0.5 * 0.02) / 1e-3 = 10,000. Since 10,000 > 4000, the flow is turbulent.',
    relatedTopics: ['fluid-mechanics', 'bernoulli-equation', 'nusselt-number'],
    references: [
      'Fox, R. W., McDonald, A. T., & Mitchell, J. W. (2016). Introduction to Fluid Mechanics.',
      'White, F. M. (2011). Fluid Mechanics.'
    ]
  },
  'bernoulli-equation': {
    title: "Bernoulli's Equation",
    subject: 'fluid-mechanics',
    definition: "Bernoulli's equation states that for an incompressible, inviscid, and steady flow, the sum of pressure energy, kinetic energy, and potential energy per unit volume is constant along any streamline.",
    formula: 'P + \\frac{1}{2}\\rho v^2 + \\rho g z = C',
    variables: [
      { symbol: 'P', name: 'Static Pressure', unit: 'Pa' },
      { symbol: '\\rho', name: 'Fluid Density', unit: 'kg/m³' },
      { symbol: 'v', name: 'Fluid Velocity', unit: 'm/s' },
      { symbol: 'g', name: 'Acceleration due to gravity', unit: 'm/s²' },
      { symbol: 'z', name: 'Elevation above a reference datum', unit: 'm' }
    ],
    units: 'J/m³ (Energy per unit volume) or Pascal (Pa). Can also be expressed in "heads" (m) by dividing by ρg.',
    explanation: "Derived from Euler's equation of motion, Bernoulli's equation shows the trade-off between pressure energy, velocity head, and potential energy. When fluid velocity increases, static pressure must decrease simultaneously to maintain energy conservation. This is the operating principle behind flow meters, lift on airfoils, and atomizers.",
    assumptions: [
      'Inviscid Flow (no friction or viscous losses).',
      'Steady Flow (fluid properties do not change with time at any point).',
      'Incompressible Flow (density ρ remains constant).',
      'Flow along a single streamline.'
    ],
    applications: [
      'Venturi meter and Orifice meter calibration for flow measurement.',
      'Pitot tube design for fluid velocity measurement.',
      'Siphon calculations and reservoir drainage analysis.',
      'Understanding aerodynamic lift on airfoils and sails.'
    ],
    examples: 'Water flows from a large tank open to the atmosphere (P1 = Patm, v1 ≈ 0) at elevation z1 = 10 m, through a nozzle at ground level (z2 = 0 m, P2 = Patm). Using Bernoulli: Patm + 0 + ρg(z1) = Patm + 0.5ρv2² + 0. The output velocity is v2 = √(2gz1) = √(2 * 9.81 * 10) = 14 m/s (Torricelli\'s Law).',
    relatedTopics: ['fluid-mechanics', 'reynolds-number', 'turbomachinery'],
    references: [
      'Cengel, Y. A., & Cimbala, J. M. (2014). Fluid Mechanics: Fundamentals and Applications.'
    ]
  },
  'gear-design': {
    title: 'Gear Design & Spur Gears',
    subject: 'machine-design',
    definition: 'Gears are rotating machine elements with teeth cut into their circumferences, used to transmit mechanical power and rotational motion between shafts without slipping.',
    formula: 'GR = \\frac{N_{in}}{N_{out}} = \\frac{Z_{out}}{Z_{in}} = \\frac{d_{out}}{d_{in}}',
    variables: [
      { symbol: 'GR', name: 'Gear Ratio', unit: 'Dimensionless' },
      { symbol: 'N', name: 'Rotational Speed', unit: 'rpm' },
      { symbol: 'Z', name: 'Number of teeth', unit: 'Dimensionless' },
      { symbol: 'd', name: 'Pitch circle diameter', unit: 'm or mm' }
    ],
    units: 'Speed in rpm, diameters in mm, ratios are dimensionless.',
    explanation: 'Spur gears are the simplest and most common type of gear, having straight teeth parallel to the axis of rotation. Gear design involves calculating structural tooth strength against bending (Lewis Equation) and wear (Buckingham Equation). Important parameters include module (m = d/Z), pressure angle (typically 14.5° or 20°), circular pitch, and gear ratio. Helix angles are introduced in helical gears to reduce noise and vibration through gradual tooth engagement.',
    assumptions: [
      'Rigid gear alignment.',
      'Perfect involute tooth profiles.',
      'Uniform tooth loading across the face width.'
    ],
    applications: [
      'Speed reduction in automotive gearboxes and industrial drives.',
      'Mechanical clocks and watches.',
      'Differential drives in machinery.',
      'High-torque winches and hoisting equipment.'
    ],
    examples: 'A 24-tooth pinion running at 1500 rpm drives a 72-tooth spur gear. The gear ratio is Z_out / Z_pinion = 72/24 = 3. The output speed is N_out = N_in / GR = 1500 / 3 = 500 rpm.',
    relatedTopics: ['machine-design', 'torque-power-relation', 'tribology'],
    references: [
      'Shigley, J. E., & Mischke, C. R. (2011). Mechanical Engineering Design.',
      'Bhandari, V. B. (2010). Design of Machine Elements.'
    ]
  }
};
