const FORMULAS = [
  {
    id: 'normal-stress',
    name: 'Normal Stress',
    subject: 'strength-of-materials',
    equation: '\\sigma = \\frac{F}{A}',
    latex: '\\sigma = \\frac{F}{A}',
    variables: [
      { symbol: 'F', name: 'Applied Force', unit: 'N', default: 10000 },
      { symbol: 'A', name: 'Cross-sectional Area', unit: 'm²', default: 0.005 },
      { symbol: '\\sigma', name: 'Normal Stress', unit: 'Pa (or N/m²)' }
    ],
    units: 'Pa',
    keywords: ['stress', 'normal stress', 'force', 'area', 'tension', 'compression'],
    description: 'The internal resisting force per unit area acting normal to the plane.',
    applications: ['Structural design', 'Material testing', 'Pressure vessel calculation'],
    examples: 'A rod with a cross-sectional area of 0.005 m² is subjected to a tensile force of 10,000 N. The normal stress is σ = 10000 / 0.005 = 2,000,000 Pa = 2 MPa.',
    relatedFormulas: ['normal-strain', 'shear-stress', 'von-mises-stress']
  },
  {
    id: 'normal-strain',
    name: 'Normal Strain',
    subject: 'strength-of-materials',
    equation: '\\epsilon = \\frac{\\Delta L}{L_0}',
    latex: '\\epsilon = \\frac{\\Delta L}{L_0}',
    variables: [
      { symbol: '\\Delta L', name: 'Change in Length', unit: 'm', default: 0.002 },
      { symbol: 'L_0', name: 'Original Length', unit: 'm', default: 2.0 },
      { symbol: '\\epsilon', name: 'Normal Strain', unit: 'Dimensionless' }
    ],
    units: '',
    keywords: ['strain', 'deformation', 'elongation', 'length'],
    description: 'The ratio of deformation (change in length) to the original length.',
    applications: ['Deformation analysis', 'FEA post-processing', 'Elasticity calculations'],
    examples: 'A wire of original length 2 m stretches by 0.002 m under load. The strain is ε = 0.002 / 2 = 0.001 (or 1000 microstrain).',
    relatedFormulas: ['normal-stress', 'hookes-law']
  },
  {
    id: 'hookes-law',
    name: "Hooke's Law (1D)",
    subject: 'strength-of-materials',
    equation: '\\sigma = E \\cdot \\epsilon',
    latex: '\\sigma = E \\cdot \\epsilon',
    variables: [
      { symbol: 'E', name: "Young's Modulus", unit: 'Pa', default: 200e9 },
      { symbol: '\\epsilon', name: 'Strain', unit: 'Dimensionless', default: 0.001 },
      { symbol: '\\sigma', name: 'Stress', unit: 'Pa' }
    ],
    units: 'Pa',
    keywords: ['stress', 'strain', 'elasticity', 'young modulus', 'hooke'],
    description: 'Relates stress linearly to strain in the elastic region of a material.',
    applications: ['Spring design', 'Elastic deformation analysis', 'Structural analysis'],
    examples: 'For structural steel with Young\'s modulus of 200 GPa and strain of 0.001, stress is σ = 200e9 * 0.001 = 200,000,000 Pa = 200 MPa.',
    relatedFormulas: ['normal-stress', 'normal-strain']
  },
  {
    id: 'reynolds-number',
    name: 'Reynolds Number',
    subject: 'fluid-mechanics',
    equation: 'Re = \\frac{\\rho \\cdot v \\cdot D}{\\mu}',
    latex: 'Re = \\frac{\\rho \\cdot v \\cdot D}{\\mu}',
    variables: [
      { symbol: '\\rho', name: 'Fluid Density', unit: 'kg/m³', default: 1000 },
      { symbol: 'v', name: 'Flow Velocity', unit: 'm/s', default: 1.5 },
      { symbol: 'D', name: 'Characteristic Length (Diameter)', unit: 'm', default: 0.05 },
      { symbol: '\\mu', name: 'Dynamic Viscosity', unit: 'Pa·s', default: 0.001002 },
      { symbol: 'Re', name: 'Reynolds Number', unit: 'Dimensionless' }
    ],
    units: '',
    keywords: ['reynolds', 'flow', 'laminar', 'turbulent', 'viscosity', 'pipe flow'],
    description: 'A dimensionless quantity used to predict transition from laminar to turbulent flow.',
    applications: ['Pipe sizing', 'Aerodynamics', 'CFD validation', 'Heat transfer correlation'],
    examples: 'Water flowing at 1.5 m/s in a 50mm pipe has Re = (1000 * 1.5 * 0.05) / 0.001002 = 74,850 (Turbulent flow, as Re > 4000).',
    relatedFormulas: ['bernoulli-equation', 'nusselt-number']
  },
  {
    id: 'bernoulli-equation',
    name: "Bernoulli's Equation",
    subject: 'fluid-mechanics',
    equation: 'P + \\frac{1}{2}\\rho v^2 + \\rho g z = \\text{constant}',
    latex: 'P + \\frac{1}{2}\\rho v^2 + \\rho g z = C',
    variables: [
      { symbol: 'P', name: 'Static Pressure', unit: 'Pa', default: 101325 },
      { symbol: '\\rho', name: 'Fluid Density', unit: 'kg/m³', default: 1000 },
      { symbol: 'v', name: 'Velocity', unit: 'm/s', default: 2.0 },
      { symbol: 'g', name: 'Gravity Acceleration', unit: 'm/s²', default: 9.81 },
      { symbol: 'z', name: 'Elevation', unit: 'm', default: 5 },
      { symbol: 'Total Head', name: 'Total pressure head equivalent', unit: 'J/m³' }
    ],
    units: 'J/m³',
    keywords: ['bernoulli', 'pressure', 'velocity', 'fluid dynamics', 'venturi'],
    description: 'Represents energy conservation in an incompressible, inviscid, steady fluid flow.',
    applications: ['Venturi meter', 'Orifice plate', 'Aerodynamic lift', 'Siphon analysis'],
    examples: 'Total pressure head calculation: P + 0.5 * rho * v^2 + rho * g * z = 101325 + 0.5 * 1000 * 2^2 + 1000 * 9.81 * 5 = 101325 + 2000 + 49050 = 152,375 J/m³.',
    relatedFormulas: ['reynolds-number', 'torricelli-law']
  },
  {
    id: 'beam-deflection-cantilever',
    name: 'Cantilever Beam Deflection (Point Load at Tip)',
    subject: 'strength-of-materials',
    equation: '\\delta = \\frac{P \\cdot L^3}{3 \\cdot E \\cdot I}',
    latex: '\\delta = \\frac{P \\cdot L^3}{3 \\cdot E \\cdot I}',
    variables: [
      { symbol: 'P', name: 'Point Load at Tip', unit: 'N', default: 5000 },
      { symbol: 'L', name: 'Length of Cantilever', unit: 'm', default: 3.0 },
      { symbol: 'E', name: "Young's Modulus", unit: 'Pa', default: 200e9 },
      { symbol: 'I', name: 'Moment of Inertia', unit: 'm⁴', default: 8.33e-6 },
      { symbol: '\\delta', name: 'Maximum Deflection', unit: 'm' }
    ],
    units: 'm',
    keywords: ['deflection', 'beam', 'cantilever', 'moment of inertia', 'point load'],
    description: 'Calculates the maximum deflection at the free end of a cantilever beam with a point load.',
    applications: ['Crane design', 'Bridge girder design', 'Structural compliance testing'],
    examples: 'P = 5000 N, L = 3 m, E = 200 GPa, I = 8.33e-6 m⁴. Deflection = (5000 * 3³) / (3 * 200e9 * 8.33e-6) = 135000 / 4.998e6 = 0.027 m = 27 mm.',
    relatedFormulas: ['normal-stress', 'hookes-law']
  },
  {
    id: 'torque-power-relation',
    name: 'Torque and Power Relation',
    subject: 'machine-design',
    equation: 'P = \\frac{2 \\pi \\cdot N \\cdot T}{60}',
    latex: 'P = \\frac{2 \\pi \\cdot N \\cdot T}{60}',
    variables: [
      { symbol: 'N', name: 'Rotational Speed', unit: 'rpm', default: 1500 },
      { symbol: 'T', name: 'Torque', unit: 'N·m', default: 100 },
      { symbol: 'P', name: 'Power', unit: 'W' }
    ],
    units: 'W',
    keywords: ['torque', 'power', 'rpm', 'speed', 'shaft', 'motor', 'gearbox'],
    description: 'Relates mechanical power, torque, and rotational speed of a shaft.',
    applications: ['Motor sizing', 'Gearbox selection', 'Shaft design', 'Turbine output'],
    examples: 'A motor runs at 1500 rpm generating 100 N·m torque. Power is P = (2 * pi * 1500 * 100) / 60 = 15,708 W = 15.7 kW.',
    relatedFormulas: ['shaft-torsional-shear-stress', 'gear-ratio']
  },
  {
    id: 'shaft-torsional-shear-stress',
    name: 'Shaft Torsional Shear Stress',
    subject: 'machine-design',
    equation: '\\tau = \\frac{16 \\cdot T}{\\pi \\cdot d^3}',
    latex: '\\tau = \\frac{16 \\cdot T}{\\pi \\cdot d^3}',
    variables: [
      { symbol: 'T', name: 'Torque', unit: 'N·m', default: 500 },
      { symbol: 'd', name: 'Shaft Diameter', unit: 'm', default: 0.04 },
      { symbol: '\\tau', name: 'Torsional Shear Stress', unit: 'Pa' }
    ],
    units: 'Pa',
    keywords: ['torsion', 'shear stress', 'shaft', 'diameter', 'torque'],
    description: 'Calculates the maximum shear stress in a solid circular shaft subjected to torsion.',
    applications: ['Transmission shaft design', 'Axle calculations', 'Drive shaft stress sizing'],
    examples: 'T = 500 N·m, d = 40 mm (0.04 m). Shear stress τ = (16 * 500) / (pi * 0.04³) = 8000 / 0.000201 = 39.8 MPa.',
    relatedFormulas: ['torque-power-relation', 'shear-stress']
  },
  {
    id: 'fourier-heat-conduction',
    name: "Fourier's Law of Heat Conduction",
    subject: 'heat-transfer',
    equation: 'q = -k \\cdot A \\cdot \\frac{dT}{dx}',
    latex: 'q = -k \\cdot A \\cdot \\frac{\\Delta T}{L}',
    variables: [
      { symbol: 'k', name: 'Thermal Conductivity', unit: 'W/(m·K)', default: 50 },
      { symbol: 'A', name: 'Surface Area', unit: 'm²', default: 2.5 },
      { symbol: '\\Delta T', name: 'Temperature Difference', unit: 'K or °C', default: 40 },
      { symbol: 'L', name: 'Material Thickness (L)', unit: 'm', default: 0.02 },
      { symbol: 'q', name: 'Heat Transfer Rate', unit: 'W' }
    ],
    units: 'W',
    keywords: ['heat transfer', 'conduction', 'fourier', 'thermal conductivity', 'thickness'],
    description: 'States that the rate of heat transfer through a material is proportional to the negative gradient in the temperature.',
    applications: ['Insulation sizing', 'Heat sink design', 'Furnace wall losses'],
    examples: 'k = 50 W/(m·K), A = 2.5 m², DT = 40°C, thickness L = 0.02 m. Heat flow q = 50 * 2.5 * (40 / 0.02) = 250,000 W = 250 kW.',
    relatedFormulas: ['nusselt-number', 'stefan-boltzmann-law']
  },
  {
    id: 'nusselt-number',
    name: 'Nusselt Number',
    subject: 'heat-transfer',
    equation: 'Nu = \\frac{h \\cdot L}{k}',
    latex: 'Nu = \\frac{h \\cdot L}{k}',
    variables: [
      { symbol: 'h', name: 'Convective Heat Transfer Coeff', unit: 'W/(m²·K)', default: 150 },
      { symbol: 'L', name: 'Characteristic Length', unit: 'm', default: 0.1 },
      { symbol: 'k', name: 'Fluid Thermal Conductivity', unit: 'W/(m·K)', default: 0.026 },
      { symbol: 'Nu', name: 'Nusselt Number', unit: 'Dimensionless' }
    ],
    units: '',
    keywords: ['nusselt', 'convection', 'heat transfer', 'dimensionless', 'boundary layer'],
    description: 'Ratio of convective to conductive heat transfer across a boundary.',
    applications: ['Convective heat transfer coefficient calculation', 'Heat exchanger design', 'Aerothermal heating'],
    examples: 'h = 150, L = 0.1 m, fluid k = 0.026. Nu = 150 * 0.1 / 0.026 = 576.9.',
    relatedFormulas: ['fourier-heat-conduction', 'reynolds-number']
  },
  {
    id: 'shear-stress',
    name: 'Shear Stress',
    subject: 'strength-of-materials',
    equation: '\\tau = \\frac{V}{A}',
    latex: '\\tau = \\frac{V}{A}',
    variables: [
      { symbol: 'V', name: 'Shear Force', unit: 'N', default: 15000 },
      { symbol: 'A', name: 'Area Parallel to Force', unit: 'm²', default: 0.003 },
      { symbol: '\\tau', name: 'Shear Stress', unit: 'Pa' }
    ],
    units: 'Pa',
    keywords: ['shear', 'stress', 'force', 'parallel area', 'rivet', 'bolt'],
    description: 'Stress component parallel to the plane of the cross-section.',
    applications: ['Bolt shear checking', 'Rivet joint design', 'Key stress calculations'],
    examples: 'A rivet of shear area 0.003 m² experiences a force of 15,000 N parallel to its face. τ = 15000 / 0.003 = 5,000,000 Pa = 5 MPa.',
    relatedFormulas: ['normal-stress', 'shaft-torsional-shear-stress']
  },
  {
    id: 'thermal-stress',
    name: 'Thermal Stress',
    subject: 'strength-of-materials',
    equation: '\\sigma_{th} = E \\cdot \\alpha \\cdot \\Delta T',
    latex: '\\sigma_{th} = E \\cdot \\alpha \\cdot \\Delta T',
    variables: [
      { symbol: 'E', name: "Young's Modulus", unit: 'Pa', default: 200e9 },
      { symbol: '\\alpha', name: 'Coef of Thermal Expansion', unit: '1/K', default: 12e-6 },
      { symbol: '\\Delta T', name: 'Temperature Change', unit: 'K', default: 50 },
      { symbol: '\\sigma_{th}', name: 'Thermal Stress', unit: 'Pa' }
    ],
    units: 'Pa',
    keywords: ['thermal stress', 'expansion', 'temperature', 'modulus', 'constrained'],
    description: 'Stress induced in a body when thermal expansion or contraction is constrained.',
    applications: ['Railway track joints', 'Piping design', 'Engine component analysis'],
    examples: 'Steel bar constrained at both ends, E = 200 GPa, α = 12x10^-6 /K, DT = 50 K. σ_th = 200e9 * 12e-6 * 50 = 120,000,000 Pa = 120 MPa.',
    relatedFormulas: ['normal-stress', 'hookes-law']
  },
  {
    id: 'stefan-boltzmann-law',
    name: 'Stefan-Boltzmann Law (Radiation)',
    subject: 'heat-transfer',
    equation: 'q = \\epsilon \\cdot \\sigma \\cdot A \\cdot T^4',
    latex: 'q = \\epsilon \\cdot \\sigma \\cdot A \\cdot T^4',
    variables: [
      { symbol: '\\epsilon', name: 'Emissivity (0 to 1)', unit: 'Dimensionless', default: 0.85 },
      { symbol: '\\sigma', name: 'Stefan-Boltzmann Constant', unit: 'W/(m²·K⁴)', default: 5.67e-8 },
      { symbol: 'A', name: 'Surface Area', unit: 'm²', default: 2 },
      { symbol: 'T', name: 'Absolute Temperature', unit: 'K', default: 600 },
      { symbol: 'q', name: 'Radiation Heat Transfer Rate', unit: 'W' }
    ],
    units: 'W',
    keywords: ['radiation', 'stefan boltzmann', 'emissivity', 'blackbody', 'heat transfer'],
    description: 'Describes the thermal radiation energy emitted from a surface per unit time.',
    applications: ['Furnace design', 'Spacecraft thermal control', 'Pyrometer calibration'],
    examples: 'Area A = 2 m², Emissivity = 0.85, Temp = 600 K. q = 0.85 * 5.67e-8 * 2 * 600⁴ = 0.85 * 5.67e-8 * 2 * 1.296e11 = 12,492 W = 12.5 kW.',
    relatedFormulas: ['fourier-heat-conduction']
  },
  {
    id: 'carnot-efficiency',
    name: 'Carnot Engine Efficiency',
    subject: 'engineering-thermodynamics',
    equation: '\\eta = 1 - \\frac{T_C}{T_H}',
    latex: '\\eta = 1 - \\frac{T_C}{T_H}',
    variables: [
      { symbol: 'T_C', name: 'Cold Reservoir Temperature', unit: 'K', default: 300 },
      { symbol: 'T_H', name: 'Hot Reservoir Temperature', unit: 'K', default: 900 },
      { symbol: '\\eta', name: 'Carnot Efficiency', unit: 'Dimensionless' }
    ],
    units: '',
    keywords: ['carnot', 'efficiency', 'thermodynamics', 'cycle', 'limit'],
    description: 'The maximum theoretical efficiency of any thermodynamic cycle operating between two temperatures.',
    applications: ['Engine evaluation', 'Power plant cycles', 'Thermodynamic bounds'],
    examples: 'Hot reservoir is 900 K (627°C), cold reservoir is 300 K (27°C). η = 1 - 300 / 900 = 1 - 0.333 = 0.667 (66.7%).',
    relatedFormulas: ['otto-cycle-efficiency', 'diesel-cycle-efficiency']
  },
  {
    id: 'gear-ratio',
    name: 'Gear Ratio & Output Speed',
    subject: 'machine-design',
    equation: 'GR = \\frac{N_{in}}{N_{out}} = \\frac{Z_{out}}{Z_{in}}',
    latex: 'N_{out} = N_{in} \\cdot \\frac{Z_{in}}{Z_{out}}',
    variables: [
      { symbol: 'N_{in}', name: 'Input Speed', unit: 'rpm', default: 1800 },
      { symbol: 'Z_{in}', name: 'Input Teeth Count', unit: 'Dimensionless', default: 20 },
      { symbol: 'Z_{out}', name: 'Output Teeth Count', unit: 'Dimensionless', default: 60 },
      { symbol: 'N_{out}', name: 'Output Speed', unit: 'rpm' }
    ],
    units: 'rpm',
    keywords: ['gear ratio', 'speed reduction', 'spur gear', 'teeth', 'velocity ratio'],
    description: 'Relates rotational speeds and tooth numbers of driver and driven gears.',
    applications: ['Gearbox design', 'Transmission ratio calculations', 'Robotic joint drives'],
    examples: 'Input motor runs at 1800 rpm with a 20-tooth pinion driving a 60-tooth gear. Output speed is 1800 * 20 / 60 = 600 rpm. Gear Ratio = 3.0.',
    relatedFormulas: ['torque-power-relation']
  }
];
