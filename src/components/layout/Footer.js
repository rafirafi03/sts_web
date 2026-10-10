import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <Logo />
          <p className="site-footer__about">
            OCTG threading, end finishing, surface treatment and inspection for the oil and gas industry.
          </p>
        </div>

        <div>
          <h2>Pages</h2>
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Visit or write to us</h2>
          <address>
            {site.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <ul className="site-footer__contact">
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            {site.contact.phone && (
              <li>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="wrap site-footer__base">
        <p>
          &copy; {year} {site.name}. All rights reserved. STS PHOENIX, STS GRIFFIN, STS-6 and PHANTOM-HC are
          registered marks of STS.
        </p>
        <p className="site-footer__credit">
          Designed and developed by{" "}
          <a href="https://www.insourcextech.com" target="_blank" rel="noopener noreferrer">
            Insource Bridge Technologies
          </a>
        </p>
      </div>
      <p className="watermark" aria-hidden="true">
        STS FZE
      </p>
    </footer>
  );
}
