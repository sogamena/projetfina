// data/vehiclesData.js

const vehicles = [
  // {
  //   id: "1",
  //   name: "PS100-A(HC)",
  //   price: "160000",
  //   EngineType: "4-Stroke, Spark-ignition, Single Cylinder, Air Cooled",
  //   image: "/images/image/PS100-A.jpg",
  //   PistonDisplacement: "97cc",
  //   maximumOutput: "10.3 kW / 7500 rpm",
  //   BoreStroke: "50 x 49.5mm",
  //   MaxPower: "5.9Kw / 8000RPM",
  //   MaxTorque: "7.5Nm / 7500RPM",
  //   CompressionRatio: "9:1",
  //   StartingMethod: "Electric Start / Kick Start",
  //   ClutchType: "Manual / Wet Multidisc (03 Plates)",
  //   LubricationMethod: "Pressure and Splash",
  //   LubricantCapacity: "1000ml (Max.)",
  //   GearShiftMethod:
  //     "Constant Mesh, Two Stage Transmission, 5-Speed Gear Shift (4-Forward + 1-Reverse Gear)",
  //   Front: "Heavy Duty 2 Shock Absorbers",
  //   Rear: "2 Leaf Springs, 2 Shock Absorbers",
  //   FrontBrake: "Mechanical (Leather Brake)",
  //   RearBrake: "Hydraulic (Disc Brake)",
  //   Size: "(Front = 2.50 - 18R) (Rear = 135 - 10R)",
  //   Type: "Rubber Tyre With Tube (6 PLY)",
  //   FuelType: "Gasoline (Petrol)",
  //   GasolineFuelTankCapacity: "9.5 Liters",
  //   FuelConsumptionGasoline: "25Km / Liter",
  //   Battery: "3Ah, 12V",
  //   FrameType: "Fabricated / Rectangular Steel Pipee",
  //   RoofRack: "Not Included",
  //   UnladenWeight: "",
  //   LoadBearingCapacity: "400kg",
  //   WheelBase: "2145 mm (84.45 inches)",
  //   WheelTrack: "1115 mm (43.89 inches)",
  //   OverallLength: "3360 mm (132.8 inches)",
  //   OverallWidth: "1215 mm (47.83 inches)",
  //   OverallHeight: "1165 mm (45.86 inches)",
  //   CargoCabin: "1870 mm x 1215 mm x 555 mm",
  //   TurningCircle: "8000 mm (315 inches)",
  //   Gradeability: "",
  // },
  {
    id: "2",
    name: "150cc Motorcycle Cargo LOADER HERCULES",
    price: "Rs 275000",
    EngineType:
      "4-Stroke, Spark-Ignition, Single Cylinder, Air-Cooled with Cooling Fan",
    image: "/images/image/tr150h.png",
    PistonDisplacement: "150cc",
    maximumOutput: "",
    BoreStroke: "62x49.5mm",
    MaxPower: "8.2 kw / 8000 RPM",
    MaxTorque: "10Nm / 7500 RPM",
    CompressionRatio: "	9.2:1",
    StartingMethod: "	Electric Start & Kick Start",
    ClutchType: "	Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "	Pressure and Splash",
    LubricantCapacity: "	1400ml (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 6-Speed Gearshift (5-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "	2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "	5.00-12 : 12 Ply Rating",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol)",
    GasolineFuelTankCapacity: "	22 Liters",
    FuelConsumptionGasoline: "	20 Km / Liter",
    Battery: "	9Ah, 12V",
    FrameType: "Fabricated / Rectangular Steel Pipe",
    RoofRack: "	Not Included",
    UnladenWeight: "430 kg",
    LoadBearingCapacity: "	800kg",
    WheelBase: "	2360 mm (92.9 inches)",
    WheelTrack: "	1140 mm (44.88 inches)",
    OverallLength: "3510 mm (138.0 inches)",
    OverallWidth: "	1340 mm (52.75 inches)",
    OverallHeight: "	1535 mm (60.4 inches)",
    CargoCabin: "	2060 mm x 1321 mm x 500 mm",
    TurningCircle: "6700 mm (263.7 inches)",
    Gradeability: "	22-23%",
  },
  {
    id: "3",
    price: "Rs 287000",
    name: "150cc Motorcycle Cargo LOADER HIGH CABIN",
    EngineType:
      "	4-Stroke, Spark-Ignition, Single Cylinder, Air-Cooled with Cooling Fan",
    image: "/images/image/150cchighcabin_2.png",
    PistonDisplacement: "150cc",
    maximumOutput: "62x49.5mm",
    BoreStroke: "",
    MaxPower: "	8.2 kw / 8000 RPM",
    MaxTorque: "	10Nm / 7500 RPM",
    CompressionRatio: "9.2:1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1400ml (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 6-Speed Gearshift (5-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "	2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "5.00-12 : 12 Ply Rating",
    Type: "Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol)",
    GasolineFuelTankCapacity: "22 Liters",
    FuelConsumptionGasoline: "20 Km / Liter",
    Battery: "9Ah, 12V",
    FrameType: "Fabricated / Rectangular Steel Pipe",
    RoofRack: "Not Included",
    UnladenWeight: "	430 kg",
    LoadBearingCapacity: "	800kg",
    WheelBase: "2360 mm (92.9 inches)",
    WheelTrack: "	1140 mm (44.88 inches)",
    OverallLength: "3510 mm (138.0 inches)",
    OverallWidth: "1340 mm (52.75 inches)",
    OverallHeight: "1535 mm (60.4 inches)",
    CargoCabin: "2060 mm x 1321 mm x 500 mm",
    TurningCircle: "	6700 mm (263.7 inches)",
    Gradeability: "	22-23%",
  },
  {
    id: "4",
    price: "Rs 241000",
    name: "150cc SCHOOL VAN",
    EngineType:
      "4-Stroke, Spark-Ignition, Single Cylinder, Air-Cooled with Cooling Fan",
    image: "/images/image/tr150ccmsv.PNG",
    PistonDisplacement: "150cc",
    maximumOutput: "",
    BoreStroke: "62x49.5mm",
    MaxPower: "8.2 kw / 8000 RPM",
    MaxTorque: "10 Nm / 7500 RPM",
    CompressionRatio: "9.2:1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1400 ml (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 6-Speed Gearshift (5-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "	2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "5.00-12 : 12 Ply Rating",
    Type: "Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol)",
    GasolineFuelTankCapacity: "22 Liters",
    FuelConsumptionGasoline: "20 Km / Liter",
    Battery: "9Ah, 12V",
    FrameType: "	Fabricated / Rectangular Steel Pipe",
    RoofRack: "Not Included",
    UnladenWeight: "430 kg",
    LoadBearingCapacity: "800kg",
    WheelBase: "2400 mm (94.5 inches)",
    WheelTrack: "1155 mm (45.5 inches)",
    OverallLength: "3660 mm (144.0 inches)",
    OverallWidth: "1325 mm (52.0 inches)",
    OverallHeight: "1970 mm (77.5 inches)",
    CargoCabin: "2110 mm x 1325 mm x 1335 mm",
    TurningCircle: "8600 mm (338.5 inches)",
    Gradeability: "	22-23%",
  },
  {
    id: "5",
    price: "Rs 221000",
    name: "197cc LOADER",
    EngineType:
      "4-Stroke, Spark-Ignition, Single Cylinder, Water-Cooled with Radiator Cooling Fan",
    image: "/images/image/tr200ccf.PNG",
    PistonDisplacement: "197cc",
    maximumOutput: "",
    BoreStroke: "63x63 mm",
    MaxPower: "10.25 kw / 10000 RPM",
    MaxTorque: "12.5 Nm / 9000 RPM",
    CompressionRatio: "9.2:1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1100 ml (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift(4-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "	2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "	Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "5.00-12 : 12 Ply Rating",
    Type: "Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol)",
    GasolineFuelTankCapacity: "24 Liters",
    FuelConsumptionGasoline: "20 Km / Liter",
    Battery: "	32Ah, 12V",
    FrameType: "	Fabricated / Rectangular Steel Pipe",
    RoofRack: "Not Included",
    UnladenWeight: "	430 kg",
    LoadBearingCapacity: "800kg",
    WheelBase: "2740 mm (107.9 inches)",
    WheelTrack: "1155 mm (45.5 inches)",
    OverallLength: "3920 mm (154.3 inches)",
    OverallWidth: "1460 mm (57.5 inches)",
    OverallHeight: "1560 mm (61.4 inches)",
    CargoCabin: "	2060 mm x 1360 mm x 600 mm",
    TurningCircle: "8600 mm (338.5 inches)",
    Gradeability: "	22-23%",
  },
  {
    id: "6",
    price: "Rs 323000",
    name: "197cc AUTO DAMPER",
    EngineType:"4-Stroke, Spark-Ignition, Single Cylinder, Water-Cooled with Radiator Cooling Fan",
    image: "/images/image/tr200ccad.PNG",
    PistonDisplacement: "197cc",
    maximumOutput: "63x63 mm",
    BoreStroke: "",
    MaxPower: "10.25 kw / 10000 RPM",
    MaxTorque: "12.5 Nm / 9000 RPM",
    CompressionRatio: "9.2:1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1100 ml (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift(4-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "	Mechanical (Drum Type)",
    RearBrake: "	Hydraulic (Drum Type)",
    Size: "	5.00-12 : 12 Ply Rating",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol)",
    GasolineFuelTankCapacity: "	24 Liters",
    FuelConsumptionGasoline: "20 Km / Liter",
    Battery: "32Ah, 12V",
    FrameType: "	Fabricated / Rectangular Steel Pipe",
    RoofRack: "	Not Included",
    UnladenWeight: "	430 kg",
    LoadBearingCapacity: "	800kg",
    WheelBase: "	2840 mm (111.8 inches)",
    WheelTrack: "1155 mm (45.5 inches)",
    OverallLength: "	4010 mm (157.8 inches)",
    OverallWidth: "	1440 mm (56.7 inches)",
    OverallHeight: "	1620 mm (63.8 inches)",
    CargoCabin: "	2275 mm x 1350 mm x 1025 mm",
    TurningCircle: "	8600 mm (338.5 inches)",
    Gradeability: "	22-23%",
  },
  {
    id: "7",
    price: "Rs 217000",
    name: "SUPREME",
    EngineType: "4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/supereme_front.PNG",
    PistonDisplacement: "197cc",
    maximumOutput: "",
    BoreStroke: "	63 mm X 63.5 mm",
    MaxPower: "	10.3 kW / 7500 rpm",
    MaxTorque: "	14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "	Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1 Liter (Max.)",
    GearShiftMethod: "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift (4-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Dampers",
    Rear: "	Leaf Springs (4-leaf) + Shock Absorbers",
    FrontBrake: "	Mechanical(Drum Type)",
    RearBrake: "Hydraulic Disk / Caliper",
    Size: "	135-10 : 10 PR",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol) / CNG",
    GasolineFuelTankCapacity: "	6.5 Liters",
    FuelConsumptionGasoline: "22 L – 30 L (WC)",
    Battery: "	12V-S50(34Ah)",
    FrameType: "	Fabricated / C-Section Steel Channels",
    RoofRack: "	Fabricated in 1 inch & 0.75 inch 18/20swg Square & Round Steel Pip",
    UnladenWeight: "	405 kg",
    LoadBearingCapacity: "	400 kg",
    WheelBase: "	2000 mm (78.74 inches)",
    WheelTrack: "	1115 mm (43.89 inches)",
    OverallLength: "	2780 mm (109.44 inches)",
    OverallWidth: "	1220 mm (48 inches)",
    OverallHeight: "	1870 mm (73.62 inches)",
    CargoCabin: "",
    TurningCircle: "	5425 mm (213.58 inches)",
    Gradeability: "	16%",
  },
  {
    id: "8",
    price: "Rs 213000",
    name: "F2F",
    EngineType: "4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/supereme_front.PNG",
    PistonDisplacement: "197cc",
    maximumOutput: "",
    BoreStroke: "	63 mm X 63.5 mm",
    MaxPower: "	10.3 kW / 7500 rpm",
    MaxTorque: "	14.2 N-m / 6000 rpm",
    CompressionRatio: "	10.5 : 1",
    StartingMethod: "	Electric Start & Kick Start",
    ClutchType: "",
    LubricationMethod: "	Manual / Wet Multidisc (7-plates)",
    LubricantCapacity: "	1 Liter (Max.)",
    GearShiftMethod: "		Constant Mesh, Two-stage Transmission, 5-Speed Gearshift (4-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Dampers",
    Rear: "	2 Leaf Springs, 2 Dampers",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "	Hydraulic (Disk Type)",
    Size: "	135-10 : 10 PR",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol) / CNG",
    GasolineFuelTankCapacity: "	6.5 Liters",
    FuelConsumptionGasoline: "	22 L – 30 L (WC) CNG Cylinder",
    Battery: "	12V-S50(34Ah)",
    FrameType: "	Fabricated / C-Section Steel Channels",
    RoofRack: "",
    UnladenWeight: "435 kg",
    LoadBearingCapacity: "	600 kg",
    WheelBase: "2180 mm (85.82 inches)",
    WheelTrack: "	1115 mm (43.89 inches)",
    OverallLength: "	3000 mm (118.46 inches)",
    OverallWidth: "	1220 mm (48 inches)",
    OverallHeight: "	1900 mm (74.80 inches)",
    CargoCabin: "",
    TurningCircle: "6380 mm (251.18 inches)",
    Gradeability: "	16%",
  },
  // {

  {
    id: "9",
    price: "Rs 290000",
    name: "SIXER",
    EngineType: "4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/7_seater_front.PNG",
    PistonDisplacement: "	200cc",
    maximumOutput: "",
    BoreStroke: "63 mm X 63.5 mm",
    MaxPower: "10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "	Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "	Pressure and Splash",
    LubricantCapacity: "1 Liter (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift (4-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Dampers",
    Rear: "	2 Leaf Springs, 2 Dampers",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "	Hydraulic Disk / Caliper",
    Size: "135-10 : 10 PR",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol) / CNG",
    GasolineFuelTankCapacity: "6.5 Liters",
    FuelConsumptionGasoline: "28 - 30 Km / Liter",

    /**Ity varIABLE VAOVAO+++++++++++++++++ */
    CNGCylinderCapacity: "	22 L – 30 L (WC) CNG Cylinder",
    FuelConsumptionCNG: "36 - 40 Km / Kg",

    Battery: "12V-S50(34Ah)",
    FrameType: "Fabricated / C-Section Steel Channels",
    RoofRack: "",

    // sosony variaBLES
    HoodFrameConstruction:
      "	Fabricated in 1-in x16/20swg Square / Round Steel Pipe",
    HoodApparelMaterial: " Rexene / PVC or PU Coated Cloth / Canvas Cloth",

    UnladenWeight: "415 kg",
    LoadBearingCapacity: "600kg",
    WheelBase: "2065 mm (82.27 inches",
    WheelTrack: "1115 mm (43.9 inches)",
    OverallLength: "2950 mm (116.14 inches)",
    OverallWidth: "1220 mm (48 inches)",
    OverallHeight: "	1900 mm (74.80 inches)",
    CargoCabin: "5940 mm (233.85 inches)",
    TurningCircle: "",
    Gradeability: "	16%",
  },
  {
    id: "10",
    price: "Rs 296000",
    name: "DECA",
    EngineType: "	4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/deca_pm_front.PNG",
    PistonDisplacement: "197cc",
    maximumOutput: " ",
    BoreStroke: "63 mm X 63.5 mm",
    MaxPower: "10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1 Liter (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift (4-Forward + 1-Reverse Gear)",
    Front: "	Heavy Duty 2 Shock Absorbers, 2 Dampers",
    Rear: "2 Leaf Springs, 2 Dampers",
    FrontBrake: "Mechanical (Brake shoes)",
    RearBrake: "	Hydraulic (Disk Type)",
    Size: "	135-10 : 10 PR",
    Type: "Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol) / CNG",
    GasolineFuelTankCapacity: "6.5 Liters",
    FuelConsumptionGasoline: "28 - 30 Km / Liter",

    /**Ity varIABLE VAOVAO+++++++++++++++++ */
    CNGCylinderCapacity: "	22 L – 30 L (WC) CNG Cylinder",
    FuelConsumptionCNG: "36 - 40 Km / Kg",

    Battery: "12V-S50(35Ah)",
    FrameType: "Fabricated / C-Section Steel Channels",
    RoofRack: "Not Included",
    UnladenWeight: "",
    LoadBearingCapacity: "",

    // HJHJJ

    HoodFrameConstructiont:
      "Fabricated in 1-in x16/20swg Square / Round Steel Pipe",
    HoodApparelMaterial: "Rexene / PVC or PU Coated Cloth / Canvas Cloth",
    WheelBase: "",
    WheelTrack: "",
    OverallLength: "",
    OverallWidth: "",
    OverallHeight: "",
    CargoCabin: "",
    TurningCircle: "",
    Gradeability: "",
  },
  {
    id: "11",
    price: "Rs 280000",
    name: "197cc PICK UP",
    EngineType: "",
    image: "/images/image/pickupfront01.PNG",
    PistonDisplacement: "	197cc",
    maximumOutput: "",
    BoreStroke: "63 mm X 63.5 mm",
    MaxPower: "10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "	Pressure and Splash",
    LubricantCapacity: "1 Liter (Max.)",
    GearShiftMethod:
      "	Constant Mesh, Two-stage Transmission, 5-Speed Gearshift With Reverse Gear",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Dampers",
    Rear: "Two (7-Leaf) Leaf Springs, 2 Dampers",
    FrontBrake: "Mechanical (Brake shoes)",
    RearBrake: "	Hydraulic (Disk Type)",
    Size: "135-10 : 10 PR",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol) / CNG",
    GasolineFuelTankCapacity: "	6.5 Liters",
    FuelConsumptionGasoline: "	28 - 30 Km / Liter",
    /**Ity varIABLE VAOVAO+++++++++++++++++ */
    CNGCylinderCapacity: "22 L – 30 L (WC) CNG Cylinder",
    FuelConsumptionCNG: "36 - 40 Km / Kg",

    Battery: "12V-S50(35Ah)",
    FrameType: "Fabricated / C-Section Steel Channels",
    RoofRack: "Not Included ; available in Prime model only",
    UnladenWeight: "470 kg",

    // sosony variaBLES
    HoodFrameConstruction:
      "Fabricated in 1 inch / 0.75 inch x 18/20swg Square / Round Pipe",
    HoodApparelMaterial:
      "	Beige / Blue / Green; Pearl Fancy Rexene / PU Coated Fabric",

    LoadBearingCapacity: "	600kg",
    WheelBase: "2350 mm (92.52 inches)",
    WheelTrack: "	1110 mm (43.7 inches)",
    OverallLength: "3450 mm (135.82 inches)",
    OverallWidth: "1300 mm (51.18 inches)",
    OverallHeight: "2250 mm (88.58 inches)",
    CargoCabin: "	310 mm / 390 mm x 1300 mm x 1930 mm",
    TurningCircle: "6900 mm (271.65 inches)",
    Gradeability: "12-13 %",
  },
  {
    id: "12",
    price: "Rs 345000",
    name: "SOHRAB PLUS",
    EngineType: "",
    image: "/images/image/sohrabplus001.jpg",
    PistonDisplacement: "200cc",
    maximumOutput: "",
    BoreStroke: "63 mm X 63.5 mm",
    MaxPower: "10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "	Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "	1 Liter (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift With Reverse Gear",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Dampers",
    Rear: "	Two (7-Leaf) Leaf Springs, 2 Dampers",
    FrontBrake: "Mechanical (Brake shoes)",
    RearBrake: "	Hydraulic (Disk Type)",
    Size: "	135-10 : 10 PR",
    Type: "Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol) / CNG",
    GasolineFuelTankCapacity: "6.5 Liters",
    FuelConsumptionGasoline: "28 - 30 Km / Liter",

    /**Ity varIABLE VAOVAO+++++++++++++++++ */
    CNGCylinderCapacity: "22 L – 30 L (WC) CNG Cylinder",
    FuelConsumptionCNG: "36 - 40 Km / Kg",
    Battery: "12V-S50(35Ah)",
    FrameType: "",
    RoofRack: "",
    UnladenWeight: "",
    LoadBearingCapacity: "",
    WheelBase: "",
    WheelTrack: "",
    OverallLength: "",
    OverallWidth: "",
    OverallHeight: "",
    CargoCabin: "",
    TurningCircle: "",
    Gradeability: "",
  },
  {
    id: "13",
    price: "Rs 365000",
    name: "RUSTAM PLUS",
    EngineType: "4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/rustamplus01.jpg",
    PistonDisplacement: "200cc",
    maximumOutput: "",
    BoreStroke: "	63 mm X 63.5 mm",
    MaxPower: "	10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "	Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "	1 Liter (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift (4-Forward + 1-Reverse Gear)",
    Front: "	Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "	2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "135-10 : 10 PR",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol)",
    GasolineFuelTankCapacity: "6.5 Liters",
    FuelConsumptionGasoline: "	20 Km / Liter",
    Battery: "	12V,10Ah",
    FrameType: "Fabricated / C-Section Steel Channels",
    RoofRack: "	N/A",
    UnladenWeight: "",
    LoadBearingCapacity: "2000kg",
    WheelBase: "2390 mm (94.09 inches)",
    WheelTrack: "1115 mm (43.89 inches)",
    OverallLength: "2280 mm (89.76 inches)",
    OverallWidth: "1360 mm (51.54 inches)",
    OverallHeight: "	1200 mm (47.24 inches)",
    CargoCabin: "2140 mm x 1245 mm x 485 mm",
    TurningCircle: "	6800 mm (267.71 inches)",
    Gradeability: "",
  },
  {
    id: "14",
    price: "Rs 286000",
    name: "XXL-LOADER",
    EngineType: "	4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/xxlloader01.jpg",
    PistonDisplacement: "	200cc",
    maximumOutput: "",
    BoreStroke: "	63 mm X 63.5 mm",
    MaxPower: "	10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1.4 Liter (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 6-Speed Gearshift (5-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "	Mechanical (Drum Type)",
    RearBrake: "	Hydraulic (Drum Type)",
    Size: "	5.00-12 : 12 Ply Rating",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol)",
    GasolineFuelTankCapacity: "10 Liters",
    FuelConsumptionGasoline: "	20 Km / Liter",
    Battery: "	12V-S50(34Ah)",
    FrameType: "	Fabricated / C-Section Steel Channels",
    RoofRack: "",
    UnladenWeight: "600 kg",
    LoadBearingCapacity: "2000 kg",
    WheelBase: "2370 mm (93.30 inches)",
    WheelTrack: "	1145 mm (45.07 inches)",
    OverallLength: "3810 mm (150.0 inches)",
    OverallWidth: "1320 mm (51.96 inches)",
    OverallHeight: "1885 mm (74.21 inches)",
    CargoCabin: "2210 mm x 1320 mm x 800 mm",
    TurningCircle: "6800 mm (267.71 inches)",
    Gradeability: "",
  },
  {
    id: "15",
    price: "Rs 387000",
    name: "200cc XXL-HI CABIN",
    EngineType: "4-Stroke, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/xxlloaderhc01.jpg",
    PistonDisplacement: "200cc",
    maximumOutput: "",
    BoreStroke: "63 mm X 63.5 mm",
    MaxPower: "	10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "Electric Start & Kick Start",
    ClutchType: "Manual / Wet Multidisc (7-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "1 Liter (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift (4-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers, 2 Spring Cushion",
    Rear: "2 Leaf Springs, 2 Spring Cushion",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "	5.00-12 : 12 Ply Rating",
    Type: "	Tube Type Rubber Tyres",
    FuelType: "Gasoline (Petrol)",
    GasolineFuelTankCapacity: "6.5 Liters",
    FuelConsumptionGasoline: "20 Km / Liter",
    Battery: "12V,10Ah",
    FrameType: "Fabricated / C-Section Steel Channels",
    RoofRack: "N/A",
    UnladenWeight: "",
    LoadBearingCapacity: "2000kg",
    WheelBase: "2390 mm (94.09 inches)",
    WheelTrack: "	1115 mm (43.89 inches)",
    OverallLength: "2280 mm (89.76 inches)",
    OverallWidth: "1360 mm (51.54 inches)",
    OverallHeight: "2020 mm (79.52 inches)",
    CargoCabin: "2140 mm x 1245 mm x 1305 mm",
    TurningCircle: "6800 mm (267.71 inches)",
    Gradeability: "",
  },
  {
    id: "16",
    price: "Rs 400000",
    name: "CARGO BOX XL",
    EngineType: "4-Strock, Spark-Ignition, Single Cylinder, Liquid-Cooled",
    image: "/images/image/cargo01.PNG",
    PistonDisplacement: "200cc",
    maximumOutput: "",
    BoreStroke: "63 mm x 63.5 mm",
    MaxPower: "10.3 kW / 7500 rpm",
    MaxTorque: "14.2 N-m / 6000 rpm",
    CompressionRatio: "10.5 : 1",
    StartingMethod: "Electric Start",
    ClutchType: "Manual / Wet Multidisc (6-plates)",
    LubricationMethod: "Pressure and Splash",
    LubricantCapacity: "14 ml (Max.)",
    GearShiftMethod:
      "Constant Mesh, Two-stage Transmission, 5-Speed Gearshift ( 5-Forward + 1-Reverse Gear)",
    Front: "Heavy Duty 2 Shock Absorbers",
    Rear: "2 Leaf Springs Assy, 2 Shock Absorbers With Outer Coil Springs",
    FrontBrake: "Mechanical (Drum Type)",
    RearBrake: "Hydraulic (Drum Type)",
    Size: "5.00-12 : 12 Ply Rating",
    Type: "Tube Type Rubber Tyres",
    FuelType: "	Gasoline (Petrol)",
    GasolineFuelTankCapacity: "9 Liters",
    FuelConsumptionGasoline: "20 Km / Liter",
    Battery: "12V, 34Ah",
    FrameType: "Fabricated / Tubular Frame",
    RoofRack: "N/A",
    UnladenWeight: "",
    LoadBearingCapacity: "2000kg",
    WheelBase: "2390 mm (94.09 inches)",
    WheelTrack: "1147 mm (45.15 inches)",
    OverallLength: "3995 mm (157.28 inches)",
    OverallWidth: "1370 mm (53.94 inches)",
    OverallHeight: "2307 mm (90.83 inches)",
    CargoCabin: "2055 mm x 1320 mm x 1690 mm",
    TurningCircle: "8400 mm (330.70 inches)",
    Gradeability: "",
  },

  // {
  //   id: "17",
  //   name: "200cc LOADER",
  //   EngineType: "",
  //   image: "/images/image/tr200ccf.PNG",
  //   PistonDisplacement: "",
  //   maximumOutput: "",
  //   BoreStroke: "",
  //   MaxPower: "",
  //   MaxTorque: "",
  //   CompressionRatio: "",
  //   StartingMethod: "",
  //   ClutchType: "",
  //   LubricationMethod: "",
  //   LubricantCapacity: "",
  //   GearShiftMethod: "",
  //   Front: "",
  //   Rear: "",
  //   FrontBrake: "",
  //   RearBrake: "",
  //   Size: "",
  //   Type: "",
  //   FuelType: "",
  //   GasolineFuelTankCapacity: "",
  //   FuelConsumptionGasoline: "",
  //   Battery: "V",
  //   FrameType: "",
  //   RoofRack: "",
  //   UnladenWeight: "",
  //   LoadBearingCapacity: "",
  //   WheelBase: "",
  //   WheelTrack: "",
  //   OverallLength: "",
  //   OverallWidth: "",
  //   OverallHeight: "",
  //   CargoCabin: "",
  //   TurningCircle: "",
  //   Gradeability: "",
  // },
  // {
  //   id: "18",
  //   name: "200cc LOADER",
  //   EngineType: "",
  //   image: "/images/image/tr200ccf.PNG",
  //   PistonDisplacement: "",
  //   maximumOutput: "",
  //   BoreStroke: "",
  //   MaxPower: "",
  //   MaxTorque: "",
  //   CompressionRatio: "",
  //   StartingMethod: "",
  //   ClutchType: "",
  //   LubricationMethod: "",
  //   LubricantCapacity: "",
  //   GearShiftMethod: "",
  //   Front: "",
  //   Rear: "",
  //   FrontBrake: "",
  //   RearBrake: "",
  //   Size: "",
  //   Type: "",
  //   FuelType: "",
  //   GasolineFuelTankCapacity: "",
  //   FuelConsumptionGasoline: "",
  //   Battery: "V",
  //   FrameType: "",
  //   RoofRack: "",
  //   UnladenWeight: "",
  //   LoadBearingCapacity: "",
  //   WheelBase: "",
  //   WheelTrack: "",
  //   OverallLength: "",
  //   OverallWidth: "",
  //   OverallHeight: "",
  //   CargoCabin: "",
  //   TurningCircle: "",
  //   Gradeability: "",
  // },
];

export default vehicles;
