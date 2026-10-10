import PageHead from "@/components/ui/PageHead";
import RfqForm from "@/components/contact/RfqForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact and quotes",
  description:
    "Request a quote for OCTG threading, surface treatment or inspection from Superior Tubular Solutions FZE, Jebel Ali Free Zone, Dubai.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact and quotes"
        intro="Tell us what needs threading, treating or inspecting. The more detail on size, grade and connection, the faster we can quote."
        image="/images/hero/contact_hero.png"
      />

      <section className="section">
        <div className="wrap split split--wide-left">
          <div id="quote">
            <h2>Request a quote</h2>
            <p style={{ margin: "0.9rem 0 1.75rem", color: "var(--steel)" }}>
              For urgent or shutdown work, say so in your message.
            </p>
            <RfqForm />
          </div>

          <aside className="contact-card" aria-label="Company details">
            <h2>Find us</h2>
            <address>
              <strong>{site.name}</strong>
              <br />
              {site.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <p style={{ marginTop: "0.9rem" }}>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Maps (new tab)
              </a>
            </p>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </dd>
              {site.contact.phone && (
                <>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a>
                  </dd>
                </>
              )}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
