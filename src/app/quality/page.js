import Image from "next/image";
import PageHead from "@/components/ui/PageHead";
import CtaBand from "@/components/ui/CtaBand";
import { certifications, licences, qualityObjectives } from "@/data/certifications";

export const metadata = {
  title: "Quality and certifications",
  description:
    "API Monogram 5B-0737, API Spec Q1 (Q1-8164), ISO 9001:2015 and UAE ICV certificates held by Superior Tubular Solutions FZE.",
};

export default function QualityPage() {
  return (
    <>
      <PageHead
        title="Quality and certifications"
        intro="Our management system is audited by the American Petroleum Institute and its registrar. The certificates below are scans of the originals."
        image="/images/hero/quality_hero.png"
      />

      <section className="section">
        <div className="wrap split split--even">
          <div>
            <h2>How we control quality</h2>
            <p style={{ marginTop: "1rem" }}>
              STS runs a quality management system built around product reliability, process control and
              continual improvement. Machining, inspection and certified systems work together to meet the
              technical, quality and HSE requirements of the global oil and gas industry.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "0.5rem" }}>Our quality objectives</h3>
            <ul className="check-list">
              {qualityObjectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="certs-heading">
        <div className="wrap">
          <div className="section__head">
            <h2 id="certs-heading">Certificates</h2>
            <p>
              Verify API certificates at api.org/compositelist using the registration number shown. The ICV
              certificate can be checked by scanning the QR code on the original.
            </p>
          </div>

          <div>
            {certifications.map((c) => (
              <article className="cert" key={c.id}>
                <a
                  className="cert__img"
                  href={c.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the ${c.name} certificate at full size (opens in a new tab)`}
                >
                  <Image src={c.image} alt={c.alt} width={c.width} height={c.height} sizes="240px" />
                </a>
                <div>
                  <h3>{c.name}</h3>
                  <dl className="cert__meta">
                    <dt>Issued by</dt>
                    <dd>{c.issuer}</dd>
                    <dt>Number</dt>
                    <dd>{c.number}</dd>
                    <dt>Scope</dt>
                    <dd>{c.scope}</dd>
                    <dt>Effective</dt>
                    <dd>{c.effective}</dd>
                    <dt>Valid until</dt>
                    <dd>{c.expires}</dd>
                  </dl>
                  {c.note && <p className="cert__note">{c.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--even">
          <div>
            <h2>Licences and registrations</h2>
            <p style={{ marginTop: "1rem" }}>
              STS FZE is licensed to operate as a Free Zone Establishment in the Jebel Ali Free Zone, Dubai.
            </p>
          </div>
          <ul className="rule-list">
            {licences.map((l) => (
              <li key={l.name}>
                <strong>{l.name}.</strong> {l.detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Need a certificate or quality document for vendor approval?"
        text="Tell us what your approved vendor team requires and we will send it with the quote."
      />
    </>
  );
}
