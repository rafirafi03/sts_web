import Image from "next/image";
import Link from "next/link";
import Photo from "@/components/ui/Photo";
import Arrow from "@/components/ui/Arrow";
import CtaBand from "@/components/ui/CtaBand";
import { keyFacts, premiumConnections, industries } from "@/data/site";

export const metadata = {
  title: { absolute: "OCTG threading and end finishing in Dubai | STS FZE" },
  description:
    "Superior Tubular Solutions FZE threads, inspects and surface-treats OCTG from 2-7/8\" to 20\" OD in Jebel Ali Free Zone. API 5B, API Q1 and ISO 9001:2015 certified.",
};

const services = [
  {
    title: "Machining and threading",
    text: "CNC lathes, a band saw, a swaging unit and a computerised bucking unit, set up for API and premium connections from 2-7/8\" to 20\" OD.",
    href: "/capabilities/#machining",
    image: "/images/machining/cnc-lathe-rotating-head.jpg",
    alt: "CNC lathe with rotating head used for threading pipe",
  },
  {
    title: "Surface treatment",
    text: "Bead blasting, zinc phosphating for carbon steel and copper plating for CRA materials.",
    href: "/capabilities/#surface",
    image: "/images/surface/phosphating-line.jpg",
    alt: "Zinc phosphate immersion line",
  },
  {
    title: "Inspection",
    text: "In-house and field inspection: NDE, drift testing and calibrated dimensional checks before anything ships.",
    href: "/capabilities/#inspection",
    image: "/images/inspection/profile-projector.jpg",
    alt: "Profile projector used to check thread form",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero on-dark">
        <div className="hero__bg">
          <Image
            src="/images/hero/hero_img1.png"
            alt="Spherical storage tank with a spiral staircase against a blue sky"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="wrap">
          <div className="hero__content">
            <h1>
              Threading and end finishing for <span className="accent">oil country tubular goods</span>
            </h1>
            <p className="hero__lead">
              From our plant in Jebel Ali Free Zone we thread, treat and inspect casing and tubing for operators,
              drilling contractors and distributors across the Middle East and North Africa.
            </p>
            <div className="btn-row">
              <Link href="/contact/#quote" className="btn btn--light">
                Request a quote
                <Arrow />
              </Link>
              <Link href="/capabilities/" className="btn btn--outline">
                See capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap intro">
          <div className="section__head">
            <h2>
              One site for cutting, threading, <span className="accent">coating and inspection</span>
            </h2>
            <p>
              Keeping the whole job under one roof means fewer hand-offs between vendors and a shorter path from
              incoming pipe to shipment.
            </p>
          </div>
          <dl className="facts" aria-label="Key facts">
            {keyFacts.map((fact) => (
              <div className="facts__item" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="clients" aria-labelledby="clients-heading">
        <div className="clients__label">
          <h3 id="clients-heading">Who we work for</h3>
        </div>
        <ul className="clients__list">
          {industries.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <Photo src={s.image} alt={s.alt} ratio="tall" sizes="(min-width: 1000px) 380px, (min-width: 700px) 50vw, 100vw" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="text-link">
                  Equipment and limits
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink on-dark">
        <div className="wrap split split--even split--center">
          <div>
            <h2>
              Our own <span className="accent">premium connections</span>
            </h2>
            <p className="lead">
              Alongside API threads, STS offers its proprietary premium connections for tubing and casing. They
              are built for sealing performance and structural integrity in high-pressure, high-temperature,
              corrosive and other demanding wells.
            </p>
            <div className="btn-row">
              <Link href="/capabilities/#connections" className="btn btn--outline">
                About the connections
              </Link>
            </div>
          </div>
          <ul className="connections" aria-label="STS premium connections">
            {premiumConnections.map((name) => (
              <li key={name}>
                {name}
                <sup>&reg;</sup>
              </li>
            ))}
          </ul>
        </div>
        <p className="watermark" aria-hidden="true">
          STS
        </p>
      </section>

      <section className="section">
        <div className="wrap split split--even split--center">
          <Photo
            src="/images/facility/office-building.jpg"
            alt="STS FZE office and plant building in Jebel Ali Free Zone"
            ratio="4x3"
            sizes="(min-width: 900px) 580px, 100vw"
          />
          <div>
            <h2>
              Certified, and able to <span className="accent">show it</span>
            </h2>
            <p style={{ marginTop: "1rem" }}>
              STS holds an API Monogram licence for casing and tubing threads, API Spec Q1 registration and ISO
              9001:2015 certification, with full material traceability and a final inspection before shipment.
            </p>
            <p>
              The certificates, with numbers and validity dates, are on the quality page so your approved vendor
              team can check them.
            </p>
            <div className="btn-row">
              <Link href="/quality/" className="btn btn--primary">
                View certificates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
