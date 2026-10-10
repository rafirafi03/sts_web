import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-head on-dark">
      <div className="hero__bg">
        <Image src="/images/facility/shop-floor-wide.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="wrap">
        <h1>We could not find that page</h1>
        <p>The address may be wrong or the page may have moved.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn--light">
            Go to the home page
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
