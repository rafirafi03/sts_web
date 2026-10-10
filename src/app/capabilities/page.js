import Figure from "@/components/ui/Figure";
import Photo from "@/components/ui/Photo";
import PageHead from "@/components/ui/PageHead";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/ui/SectionNav";
import { machining, surfaceTreatments, inspection, capacity } from "@/data/capabilities";
import { premiumConnections } from "@/data/site";

export const metadata = {
  title: "Capabilities",
  description:
    "CNC threading lathes, a computerised bucking unit, bead blasting, phosphating, copper plating, NDE, drift and dimensional inspection for OCTG up to 20\" OD.",
};

const sections = [
  { id: "machining", label: "Machining and bucking" },
  { id: "connections", label: "Premium connections" },
  { id: "surface", label: "Surface treatment" },
  { id: "inspection", label: "Inspection" },
  { id: "capacity", label: "Production capacity" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHead
        title="Capabilities"
        intro="Machining, threading, surface treatment and inspection in one plant, for tubing and casing from 2-7/8 inch to 20 inch OD."
        image="/images/hero/capabilities_hero.png"
        imagePosition="center 25%"
      />

      <div className="section">
        <div className="wrap cap-layout">
          <SectionNav sections={sections} />

          <div>
            {/* Machining */}
            <section id="machining" className="cap-block">
              <h2>Machining and bucking</h2>
              <p className="cap-block__intro">
                Modern CNC and conventional machines cover cutting, turning, threading and make-up testing.
              </p>
              <div className="table-scroll">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th scope="col">Equipment</th>
                      <th scope="col">What it does</th>
                      <th scope="col">Maximum size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machining.map((m) => (
                      <tr key={m.equipment}>
                        <th scope="row">{m.equipment}</th>
                        <td data-label="What it does">{m.use}</td>
                        <td data-label="Maximum size">
                          {m.limit ? <span className="spec-size">{m.limit}</span> : <span className="spec-size spec-size--none">{"\u2014"}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="photo-pair">
                <Figure
                  src="/images/machining/cnc-lathe-rotating-head.jpg"
                  alt="CNC lathe with rotating head"
                  caption="CNC lathe, rotating head"
                  sizes="(min-width: 640px) 420px, 100vw"
                />
                <Figure
                  src="/images/machining/cnc-lathes-couplings.jpg"
                  alt="CNC lathes dedicated to couplings and crossovers"
                  caption="Lathes for couplings and crossovers"
                  sizes="(min-width: 640px) 420px, 100vw"
                />
                <Figure
                  src="/images/machining/bucking-unit.jpg"
                  alt="Computerised bucking unit with a pipe in the clamp"
                  caption="Computerised bucking unit"
                  sizes="(min-width: 640px) 420px, 100vw"
                />
                <Figure
                  src="/images/machining/band-saw.jpg"
                  alt="Band saw cutting machine"
                  caption="Band saw, up to 20 inch OD"
                  sizes="(min-width: 640px) 420px, 100vw"
                />
              </div>
            </section>

            {/* Premium connections */}
            <section id="connections" className="cap-block">
              <h2>Premium connections</h2>
              <p className="cap-block__intro">
                In addition to API 5B standard connections, STS manufactures its own premium connections for tubing
                and casing. They are engineered for sealing performance, structural integrity and reliability in
                high-pressure, high-temperature (HPHT), corrosive and other demanding well conditions.
              </p>
              <ul className="check-list" style={{ fontWeight: 600, fontSize: "1.15rem" }}>
                {premiumConnections.map((name) => (
                  <li key={name}>
                    {name}
                    <sup>&reg;</sup>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1.25rem", color: "var(--steel)" }}>
                The bucking unit records make-up graphs and torque-turn data to each connection&rsquo;s
                specification, which gives you documented verification of connection quality.
              </p>
            </section>

            {/* Surface treatment */}
            <section id="surface" className="cap-block">
              <h2>Surface treatment</h2>
              <p className="cap-block__intro">
                Three in-house processes prepare threaded ends for the field.
              </p>
              <div>
                {surfaceTreatments.map((t) => (
                  <article className="treatment" key={t.title}>
                    <Photo src={t.image} alt={t.alt} ratio="3x2" sizes="(min-width: 760px) 256px, 100vw" />
                    <div>
                      <h3>{t.title}</h3>
                      <p>{t.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Inspection */}
            <section id="inspection" className="cap-block">
              <h2>Inspection</h2>
              <p className="cap-block__intro">
                Inspection is done in-house, and field inspection services are available too. Product is checked
                against API requirements and customer specifications before release.
              </p>
              {inspection.map((group, i) => (
                <div key={group.title} style={{ marginTop: i === 0 ? 0 : "2.75rem" }}>
                  <h3>{group.title}</h3>
                  <p style={{ marginTop: "0.6rem", color: "var(--steel)" }}>{group.text}</p>
                  <div className="photo-pair" style={{ marginTop: "1.25rem" }}>
                    {group.images.map((img) => (
                      <Photo key={img.src} src={img.src} alt={img.alt} ratio="4x3" sizes="(min-width: 640px) 420px, 100vw" />
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Capacity */}
            <section id="capacity" className="cap-block">
              <h2>Production capacity</h2>
              <p className="cap-block__intro">
                The plant is set up to take on very different kinds of work without losing consistency.
              </p>
              <ul className="check-list">
                {capacity.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
