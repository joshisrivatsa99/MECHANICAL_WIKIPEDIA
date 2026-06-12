const CALCULATORS = [
  {
    id: 'normal-stress',
    name: 'Normal Stress Calculator',
    subject: 'strength-of-materials',
    formulaId: 'normal-stress',
    inputs: [
      { id: 'F', name: 'Applied Force (F)', unit: 'N', default: 10000, step: 10 },
      { id: 'A', name: 'Cross-sectional Area (A)', unit: 'm²', default: 0.005, step: 0.0001 }
    ],
    outputs: [
      { id: 'sigma', name: 'Normal Stress (σ)', unit: 'MPa' }
    ],
    calculate: (inputs) => {
      const { F, A } = inputs;
      if (A <= 0) return { error: 'Area must be greater than zero.' };
      const sigmaPa = F / A;
      const sigmaMPa = sigmaPa / 1e6;
      return {
        sigma: sigmaMPa.toFixed(4),
        steps: `σ = F / A = ${F} N / ${A} m² = ${sigmaPa.toFixed(0)} Pa = ${sigmaMPa.toFixed(4)} MPa`
      };
    }
  },
  {
    id: 'normal-strain',
    name: 'Normal Strain Calculator',
    subject: 'strength-of-materials',
    formulaId: 'normal-strain',
    inputs: [
      { id: 'dL', name: 'Change in Length (ΔL)', unit: 'mm', default: 2, step: 0.1 },
      { id: 'L', name: 'Original Length (L₀)', unit: 'mm', default: 2000, step: 1 }
    ],
    outputs: [
      { id: 'strain', name: 'Strain (ε)', unit: 'Dimensionless' },
      { id: 'microstrain', name: 'Microstrain (με)', unit: 'με' }
    ],
    calculate: (inputs) => {
      const { dL, L } = inputs;
      if (L <= 0) return { error: 'Original length must be greater than zero.' };
      const strain = dL / L;
      const microstrain = strain * 1e6;
      return {
        strain: strain.toFixed(6),
        microstrain: microstrain.toFixed(0),
        steps: `ε = ΔL / L₀ = ${dL} mm / ${L} mm = ${strain.toFixed(6)}\nμε = ε × 10⁶ = ${microstrain.toFixed(0)} με`
      };
    }
  },
  {
    id: 'reynolds-number',
    name: 'Reynolds Number Calculator',
    subject: 'fluid-mechanics',
    formulaId: 'reynolds-number',
    inputs: [
      { id: 'rho', name: 'Density (ρ)', unit: 'kg/m³', default: 1000, step: 1 },
      { id: 'v', name: 'Velocity (v)', unit: 'm/s', default: 1.5, step: 0.1 },
      { id: 'D', name: 'Diameter (D)', unit: 'm', default: 0.05, step: 0.001 },
      { id: 'mu', name: 'Dynamic Viscosity (μ)', unit: 'Pa·s', default: 0.001002, step: 0.000001 }
    ],
    outputs: [
      { id: 'Re', name: 'Reynolds Number (Re)', unit: 'Dimensionless' },
      { id: 'regime', name: 'Flow Regime', unit: '' }
    ],
    calculate: (inputs) => {
      const { rho, v, D, mu } = inputs;
      if (mu <= 0) return { error: 'Dynamic viscosity must be greater than zero.' };
      if (rho < 0 || v < 0 || D < 0) return { error: 'Parameters must be positive.' };
      const Re = (rho * v * D) / mu;
      let regime = 'Laminar (Re ≤ 2100)';
      if (Re > 4000) {
        regime = 'Turbulent (Re ≥ 4000)';
      } else if (Re > 2100) {
        regime = 'Transitional (2100 < Re < 4000)';
      }
      return {
        Re: Re.toFixed(1),
        regime: regime,
        steps: `Re = (ρ · v · D) / μ = (${rho} · ${v} · ${D}) / ${mu} = ${Re.toFixed(2)}`
      };
    }
  },
  {
    id: 'torque-power',
    name: 'Torque & Power Calculator',
    subject: 'machine-design',
    formulaId: 'torque-power-relation',
    inputs: [
      { id: 'N', name: 'Rotational Speed (N)', unit: 'rpm', default: 1500, step: 10 },
      { id: 'T', name: 'Torque (T)', unit: 'N·m', default: 100, step: 1 }
    ],
    outputs: [
      { id: 'P', name: 'Power (P)', unit: 'kW' },
      { id: 'HP', name: 'Power (HP)', unit: 'hp' }
    ],
    calculate: (inputs) => {
      const { N, T } = inputs;
      if (N < 0 || T < 0) return { error: 'Speed and Torque must be positive.' };
      const P_watts = (2 * Math.PI * N * T) / 60;
      const P_kw = P_watts / 1000;
      const P_hp = P_kw * 1.34102;
      return {
        P: P_kw.toFixed(3),
        HP: P_hp.toFixed(3),
        steps: `Power (W) = 2 · π · N · T / 60 = 2 · π · ${N} · ${T} / 60 = ${P_watts.toFixed(1)} W\nPower (kW) = ${P_kw.toFixed(3)} kW\nPower (hp) = ${P_kw.toFixed(3)} · 1.341 = ${P_hp.toFixed(3)} hp`
      };
    }
  },
  {
    id: 'fourier-conduction',
    name: 'Fourier Heat Conduction Calculator',
    subject: 'heat-transfer',
    formulaId: 'fourier-heat-conduction',
    inputs: [
      { id: 'k', name: 'Thermal Conductivity (k)', unit: 'W/m·K', default: 50, step: 0.1 },
      { id: 'A', name: 'Surface Area (A)', unit: 'm²', default: 2.5, step: 0.1 },
      { id: 'dT', name: 'Temp Difference (ΔT)', unit: 'K', default: 40, step: 1 },
      { id: 'L', name: 'Thickness (L)', unit: 'm', default: 0.02, step: 0.001 }
    ],
    outputs: [
      { id: 'q', name: 'Heat Transfer Rate (q)', unit: 'kW' }
    ],
    calculate: (inputs) => {
      const { k, A, dT, L } = inputs;
      if (L <= 0) return { error: 'Thickness (L) must be greater than zero.' };
      if (k < 0 || A < 0) return { error: 'Parameters must be positive.' };
      const q = (k * A * dT) / L;
      const q_kw = q / 1000;
      return {
        q: q_kw.toFixed(3),
        steps: `q = k · A · ΔT / L = ${k} · ${A} · ${dT} / ${L} = ${q.toFixed(0)} W = ${q_kw.toFixed(3)} kW`
      };
    }
  },
  {
    id: 'gear-ratio',
    name: 'Gear Ratio & Speed Calculator',
    subject: 'machine-design',
    formulaId: 'gear-ratio',
    inputs: [
      { id: 'N_in', name: 'Input Speed (N_in)', unit: 'rpm', default: 1800, step: 10 },
      { id: 'Z_in', name: 'Teeth Input (Z_in)', unit: 'teeth', default: 20, step: 1 },
      { id: 'Z_out', name: 'Teeth Output (Z_out)', unit: 'teeth', default: 60, step: 1 }
    ],
    outputs: [
      { id: 'GR', name: 'Gear Ratio (GR)', unit: ':1' },
      { id: 'N_out', name: 'Output Speed (N_out)', unit: 'rpm' }
    ],
    calculate: (inputs) => {
      const { N_in, Z_in, Z_out } = inputs;
      if (Z_in <= 0 || Z_out <= 0) return { error: 'Teeth count must be greater than zero.' };
      const GR = Z_out / Z_in;
      const N_out = N_in / GR;
      return {
        GR: GR.toFixed(2),
        N_out: N_out.toFixed(1),
        steps: `Gear Ratio (GR) = Z_out / Z_in = ${Z_out} / ${Z_in} = ${GR.toFixed(2)}\nN_out = N_in / GR = ${N_in} / ${GR.toFixed(2)} = ${N_out.toFixed(1)} rpm`
      };
    }
  },
  {
    id: 'beam-deflection-cantilever',
    name: 'Cantilever Beam Deflection Calculator',
    subject: 'strength-of-materials',
    formulaId: 'beam-deflection-cantilever',
    inputs: [
      { id: 'P', name: 'Force at Tip (P)', unit: 'N', default: 5000, step: 10 },
      { id: 'L', name: 'Length (L)', unit: 'm', default: 3, step: 0.1 },
      { id: 'E', name: "Young's Modulus (E)", unit: 'GPa', default: 200, step: 1 },
      { id: 'I', name: 'Moment of Inertia (I)', unit: 'cm⁴', default: 833, step: 1 }
    ],
    outputs: [
      { id: 'defl', name: 'Max Deflection (δ)', unit: 'mm' }
    ],
    calculate: (inputs) => {
      const { P, L, E, I } = inputs;
      if (E <= 0 || I <= 0) return { error: 'E and I must be greater than zero.' };
      const E_pa = E * 1e9;
      const I_m4 = I * 1e-8; // 1 cm⁴ = 10^-8 m⁴
      const defl_m = (P * Math.pow(L, 3)) / (3 * E_pa * I_m4);
      const defl_mm = defl_m * 1000;
      return {
        defl: defl_mm.toFixed(3),
        steps: `Convert units:\nE = ${E} GPa = ${E} × 10⁹ Pa\nI = ${I} cm⁴ = ${I} × 10⁻⁸ m⁴ = ${I_m4.toExponential(4)} m⁴\n\nδ = P · L³ / (3 · E · I)\nδ = ${P} · ${L}³ / (3 · ${E_pa.toExponential(2)} · ${I_m4.toExponential(4)})\nδ = ${defl_m.toExponential(6)} m = ${defl_mm.toFixed(3)} mm`
      };
    }
  }
];
