const DESIGN_DATA = {
  threads: {
    title: 'ISO Metric Coarse Thread Dimensions',
    headers: ['Size', 'Pitch (mm)', 'Major Diameter (mm)', 'Pitch Diameter (mm)', 'Minor Diameter (mm)', 'Tensile Stress Area (mm²)'],
    rows: [
      ['M3', '0.50', '3.00', '2.68', '2.39', '5.03'],
      ['M4', '0.70', '4.00', '3.55', '3.14', '8.78'],
      ['M5', '0.80', '5.00', '4.48', '4.02', '14.2'],
      ['M6', '1.00', '6.00', '5.35', '4.77', '20.1'],
      ['M8', '1.25', '8.00', '7.19', '6.47', '36.6'],
      ['M10', '1.50', '10.00', '9.03', '8.16', '58.0'],
      ['M12', '1.75', '12.00', '10.86', '9.85', '84.3'],
      ['M16', '2.00', '16.00', '14.70', '13.55', '157'],
      ['M20', '2.50', '20.00', '18.38', '16.93', '245'],
      ['M24', '3.00', '24.00', '22.05', '20.32', '353']
    ]
  },
  bearings: {
    title: 'Deep Groove Ball Bearings (6200 Series)',
    headers: ['Bearing Designation', 'Bore Diameter (d, mm)', 'Outer Diameter (D, mm)', 'Width (B, mm)', 'Basic Dynamic Load (C, kN)', 'Basic Static Load (C0, kN)'],
    rows: [
      ['6200', '10', '30', '9', '5.4', '2.36'],
      ['6201', '12', '32', '10', '6.89', '3.1'],
      ['6202', '15', '35', '11', '7.8', '3.75'],
      ['6203', '17', '40', '12', '9.56', '4.75'],
      ['6204', '20', '47', '14', '12.7', '6.55'],
      ['6205', '25', '52', '15', '14.0', '7.8'],
      ['6206', '30', '62', '16', '19.5', '11.2'],
      ['6207', '35', '72', '17', '25.7', '15.3'],
      ['6208', '40', '80', '18', '29.1', '17.8'],
      ['6209', '45', '85', '19', '32.7', '20.4']
    ]
  },
  keys: {
    title: 'Standard Parallel Keys (IS: 2048)',
    headers: ['Shaft Diameter (mm)', 'Key Width (b, mm)', 'Key Height (h, mm)', 'Shaft Keyway Depth (t1, mm)', 'Hub Keyway Depth (t2, mm)'],
    rows: [
      ['6 to 8', '2', '2', '1.2', '1.0'],
      ['8 to 10', '3', '3', '1.8', '1.4'],
      ['10 to 12', '4', '4', '2.5', '1.8'],
      ['12 to 17', '5', '5', '3.0', '2.3'],
      ['17 to 22', '6', '6', '3.5', '2.8'],
      ['22 to 30', '8', '7', '4.0', '3.3'],
      ['30 to 38', '10', '8', '5.0', '3.3'],
      ['38 to 44', '12', '8', '5.0', '3.3'],
      ['44 to 50', '14', '9', '5.5', '3.8'],
      ['50 to 58', '16', '10', '6.0', '4.3']
    ]
  },
  fits: {
    title: 'Preferred Metric Hole Basis Fits (ISO 286)',
    headers: ['Fit Type', 'Hole Tolerance (e.g. H7)', 'Shaft Tolerance (e.g. g6)', 'Type of Clearance/Interference', 'Typical Applications'],
    rows: [
      ['H7/g6', 'Clearance (H7)', 'Clearance (g6)', 'Free running / sliding', 'Gears sliding on shafts, journal bearings'],
      ['H7/h6', 'Clearance (H7)', 'Clearance (h6)', 'Locational clearance', 'Pulleys, sprockets, clutches fixed to shafts'],
      ['H7/k6', 'Clearance (H7)', 'Transition (k6)', 'True transition (snug)', 'Precision locator gears, coupling hub alignment'],
      ['H7/p6', 'Clearance (H7)', 'Interference (p6)', 'Light press fit', 'Standard ball bearing installation in housings'],
      ['H7/s6', 'Clearance (H7)', 'Interference (s6)', 'Medium press fit', 'Permanent assembly of gears, sleeve bushings']
    ]
  },
  roughness: {
    title: 'Surface Roughness (Ra) Values by Manufacturing Process',
    headers: ['Process', 'Roughness Grade', 'Ra Range (μm) - Rough', 'Ra Range (μm) - Average', 'Ra Range (μm) - Fine'],
    rows: [
      ['Sand Casting', 'N10 to N12', '50.0', '25.0', '12.5'],
      ['Forging', 'N8 to N10', '12.5', '6.3', '3.2'],
      ['Turning', 'N6 to N9', '6.3', '3.2', '0.8'],
      ['Milling', 'N6 to N9', '6.3', '3.2', '0.8'],
      ['Grinding', 'N3 to N6', '1.6', '0.4', '0.1'],
      ['Honing', 'N1 to N4', '0.4', '0.1', '0.025'],
      ['Polishing', 'N1 to N3', '0.2', '0.05', '0.012']
    ]
  }
};
