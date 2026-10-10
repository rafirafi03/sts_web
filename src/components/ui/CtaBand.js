import Link from "next/link";
import Arrow from "./Arrow";

export default function CtaBand({
  title = "Have a threading or inspection job to quote?",
  text = "Send us the pipe size, grade and connection type and we will come back with pricing and lead time.",
}) {
  return (
    <section className="cta on-dark">
      <div className="wrap cta__inner">
        <h2>{title}</h2>
        <div>
          <p>{text}</p>
          <div className="btn-row">
            <Link href="/contact/#quote" className="btn btn--light">
              Request a quote
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
