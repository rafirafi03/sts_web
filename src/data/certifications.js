// Update `expires` when a certificate is renewed and replace the image in
// /public/images/certificates with the new scan.

export const certifications = [
  {
    id: "api-5b",
    name: "API Monogram licence, API 5B",
    issuer: "American Petroleum Institute",
    number: "5B-0737",
    scope: "Casing and tubing threads",
    effective: "30 April 2026",
    expires: "11 November 2026",
    image: "/images/certificates/api-5b.jpg",
    alt: "API Monogram licence 5B-0737 issued to Superior Tubular Solutions (STS) FZE",
    width: 1142,
    height: 890,
  },
  {
    id: "api-q1",
    name: "API Spec Q1, 10th edition",
    issuer: "American Petroleum Institute",
    number: "Q1-8164",
    scope: "Provision of threading services for OCTG casing and tubing",
    effective: "30 April 2026",
    expires: "11 November 2026",
    note: "Design is excluded from the registered scope.",
    image: "/images/certificates/api-q1.jpg",
    alt: "API Spec Q1 certificate of registration Q1-8164",
    width: 549,
    height: 735,
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    issuer: "American Petroleum Institute Quality Registrar (APIQR)",
    number: "2616",
    scope: "Provision of threading services for OCTG casing and tubing",
    effective: "24 October 2023",
    expires: "11 November 2026",
    note: "Registered since 11 November 2014. Clause 8.3, design and development, is excluded.",
    image: "/images/certificates/iso-9001.jpg",
    alt: "APIQR ISO 9001:2015 certificate of registration number 2616",
    width: 620,
    height: 797,
  },
  {
    id: "icv",
    name: "UAE In-Country Value (ICV)",
    issuer: "ICV Program, verified by Forvis Mazars Chartered Accountants",
    number: "155608",
    scope: "ICV score of 32.48%. Company type: SME in UAE, goods manufacturer.",
    effective: "18 August 2026",
    expires: "31 August 2027",
    image: "/images/certificates/icv.jpg",
    alt: "UAE In-Country Value certificate 155608 showing a score of 32.48 percent",
    width: 618,
    height: 897,
  },
];

export const licences = [
  {
    name: "JAFZA industrial licence",
    detail: "Steel pipe and fitting manufacturing.",
  },
  {
    name: "JAFZA trade licence",
    detail: "Trading of oilfield and natural gas equipment and spare parts.",
  },
  {
    name: "UAE VAT registration",
    detail: "Registered for VAT in the United Arab Emirates.",
  },
];

export const qualityObjectives = [
  "Compliance with API standards and customer specifications",
  "Full material traceability",
  "Process validation and in-process inspection",
  "Calibration of measuring instruments",
  "Continuous monitoring of machining quality",
  "Final acceptance inspection before shipment",
];
