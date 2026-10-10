export const machining = [
  {
    equipment: "CNC lathes with rotating head",
    use: "CNC-controlled X-axis movement allows turning on a stationary pipe. Two units.",
    limit: "20\" OD",
  },
  {
    equipment: "CNC lathes for couplings and crossovers",
    use: "Two lathes used only for machining and threading couplings and crossovers.",
    limit: "",
  },
  {
    equipment: "Band saw",
    use: "Cutting pipe to length.",
    limit: "20\" OD",
  },
  {
    equipment: "Swaging unit",
    use: "Swaging of tubular ends.",
    limit: "13-3/8\" OD",
  },
  {
    equipment: "Manual lathe",
    use: "Rough OD turning and special machining operations.",
    limit: "",
  },
  {
    equipment: "Computerised bucking unit",
    use: "Controlled make-up and break-out testing of tubing and casing connections. Records make-up graphs and torque-turn data to the premium connection specification.",
    limit: "2-7/8\" to 20\" OD",
  },
];

export const surfaceTreatments = [
  {
    title: "Bead blasting",
    text: "Two aluminium oxide bead blasting units prepare the surface and improve the finish before coating or inspection.",
    image: "/images/surface/bead-blasting-pair.jpg",
    alt: "Two aluminium oxide bead blasting cabinets on the shop floor",
  },
  {
    title: "Zinc phosphating",
    text: "An immersion line for carbon steel components. The coating improves corrosion resistance and gives paint and lubricant something to hold on to.",
    image: "/images/surface/phosphating-line.jpg",
    alt: "Zinc phosphate immersion tank with overhead hoist",
  },
  {
    title: "Copper plating",
    text: "A dedicated plating unit for corrosion resistant alloy (CRA) materials, used to reduce galling during make-up.",
    image: "/images/surface/copper-plating-line.jpg",
    alt: "Copper plating line with overhead conveyor",
  },
];

export const inspection = [
  {
    title: "NDE",
    text: "Dedicated NDE facilities verify product integrity against customer specifications. A magnetic particle unit is reserved for carbon steel couplings, and a fluorescent penetrant unit handles CRA material.",
    images: [
      { src: "/images/inspection/mpi-unit.jpg", alt: "Magnetic particle inspection bench inside a curtained booth" },
      { src: "/images/inspection/fpi-unit.jpg", alt: "Fluorescent penetrant inspection line with black curtains" },
    ],
  },
  {
    title: "Drift testing",
    text: "Drift mandrels, in metal and nylon, confirm the internal diameter and an unobstructed bore. Drifting follows API specifications and customer requirements before final release.",
    images: [
      { src: "/images/inspection/drift-mandrels.jpg", alt: "Rack of metal drift mandrels" },
      { src: "/images/inspection/nylon-drifts.jpg", alt: "Two nylon drift mandrels" },
    ],
  },
  {
    title: "Dimensional inspection and metrology",
    text: "A profile projector checks thread form. Thread gauges, micrometers, calipers and digital measuring equipment cover the rest. Every instrument is calibrated under the company's quality management system so readings can be traced.",
    images: [
      { src: "/images/inspection/profile-projector.jpg", alt: "Optical profile projector used for thread profile checks" },
      { src: "/images/inspection/gauging-bench.jpg", alt: "Gauging bench with dial indicators and measuring tools" },
    ],
  },
];

export const capacity = [
  "High-volume production programmes",
  "Small production batches",
  "Fast-track customer requirements",
  "Emergency and shutdown orders",
  "Customised machining and threading",
];
