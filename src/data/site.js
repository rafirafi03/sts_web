// Single source of truth for company details used across the site.
// TODO: replace the placeholder values marked below before going live.

export const site = {
  name: "Superior Tubular Solutions (STS) FZE",
  shortName: "STS FZE",
  description:
    "API 5B, API Q1 and ISO 9001:2015 certified OCTG threading, end finishing, surface treatment and inspection in Jebel Ali Free Zone, Dubai.",

  // TODO: set the real production domain (used for canonical URLs and the sitemap).
  url: "https://www.example.com",

  address: [
    "S31108 JAFZA South 3",
    "Street S402",
    "Jebel Ali Free Zone, Dubai",
    "United Arab Emirates",
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=JAFZA+South+3+Street+S402+Jebel+Ali+Free+Zone+Dubai",

  contact: {
    // TODO: replace with the real sales mailbox. The enquiry form sends to this address.
    email: "sales@your-domain.com",
    // TODO: add a phone number. Leave empty to hide it everywhere.
    phone: "",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Capabilities", href: "/capabilities/" },
    { label: "Quality", href: "/quality/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const keyFacts = [
  { label: "Size range", value: "2-7/8\" to 20\" OD" },
  { label: "Certified to", value: "API 5B, API Q1, ISO 9001:2015" },
  { label: "Serving MENA", value: "14+ years" },
  { label: "Facility", value: "11,035 m\u00B2, fully secured" },
];

export const premiumConnections = ["STS PHOENIX", "STS GRIFFIN", "STS-6", "PHANTOM-HC"];

export const industries = [
  "National oil companies",
  "International oil companies",
  "Drilling contractors",
  "OCTG distributors",
  "Oilfield service companies",
  "Well completion service providers",
];
