import Link from "next/link";
import Figure from "@/components/ui/Figure";
import Photo from "@/components/ui/Photo";
import PageHead from "@/components/ui/PageHead";
import CtaBand from "@/components/ui/CtaBand";
import { industries } from "@/data/site";
import { licences } from "@/data/certifications";

export const metadata = {
  title: "About us",
  description:
    "Superior Tubular Solutions FZE is a Jebel Ali Free Zone OCTG threading specialist that has served the MENA region for more than 14 years.",
};

const facts = [
  ["Site", "11,035 m\u00B2, fully secured"],
  ["People", "25 full-time personnel and 10 temporary staff"],
  ["Size range", "2-7/8\" to 20\" OD"],
  ["Certified", "API 5B, API Q1, ISO 9001:2015"],
  ["Inspection", "In-house and field inspection services"],
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="A threading shop built for oil country tubulars"
        intro="Superior Tubular Solutions FZE has supplied oil and gas tubular services across the Middle East and North Africa for more than 14 years."
        image="/images/hero/about_hero.png"
      />

      <section className="section">
        <div className="wrap split split--wide-left split--center">
          <div>
            <h2>Who we are</h2>
            <p style={{ marginTop: "1rem" }}>
              STS FZE is based in the Jebel Ali Free Zone in Dubai. Our plant was built for one job: end finishing
              and threading of oil country tubular goods (OCTG), supported by the technology and experienced
              people that work needs.
            </p>
            <p>
              Our CNC machinery handles both high-volume programmes and small batches with the same precision, and
              covers OCTG from 2-7/8" to 20" OD. Everything we release is meant to meet international quality
              standards and the customer&rsquo;s own specification.
            </p>
            <p>
              Beyond API connections, we manufacture a range of proprietary premium connections for tubing and
              casing. You can read about them on the{" "}
              <Link href="/capabilities/#connections">capabilities page</Link>.
            </p>
          </div>
          <Figure
            src="/images/facility/office-building.jpg"
            alt="STS FZE office and plant building in Jebel Ali Free Zone"
            caption="Office and plant, Jebel Ali Free Zone"
            sizes="(min-width: 900px) 460px, 100vw"
          />
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <div className="section__head">
            <h2>The facility</h2>
            <p>
              A secured site with a covered machine shop under overhead cranes and an open yard for pipe
              handling and storage.
            </p>
          </div>
          <div className="photo-pair">
            <Figure
              src="/images/facility/yard-and-warehouse.jpg"
              alt="Pipe stacked in the yard in front of the main shop building"
              caption="Pipe yard and main building"
              sizes="(min-width: 640px) 560px, 100vw"
            />
            <Figure
              src="/images/facility/shop-floor-racks.jpg"
              alt="Machine shop with pipe racks and a 2 by 2.5 tonne overhead crane"
              caption="Machine shop with pipe handling racks"
              sizes="(min-width: 640px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--even">
          <div>
            <h2>At a glance</h2>
            <dl className="cert__meta" style={{ marginTop: "1.25rem", fontSize: "1.02rem" }}>
              {facts.map(([k, v]) => (
                <div key={k} style={{ display: "contents" }}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2>Licences held</h2>
            <ul className="rule-list" style={{ marginTop: "1.25rem" }}>
              {licences.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}.</strong> {l.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap split split--even">
          <div>
            <h2>Who we serve</h2>
            <p style={{ marginTop: "1rem" }}>
              We work directly with the companies that drill, complete and supply wells.
            </p>
            <ul className="rule-list" style={{ marginTop: "1.5rem" }}>
              {industries.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Built for any order size</h2>
            <p style={{ marginTop: "1rem" }}>
              The same plant takes on long programmes and one-off jobs. A flexible manufacturing set-up lets us
              respond quickly without letting quality or delivery slip.
            </p>
            <ul className="check-list">
              <li>High-volume production programmes</li>
              <li>Small production batches</li>
              <li>Fast-track requirements</li>
              <li>Emergency and shutdown orders</li>
              <li>Customised machining and threading</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
