"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Arrow from "@/components/ui/Arrow";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const className = ["site-header", scrolled && "is-scrolled", open && "is-open"].filter(Boolean).join(" ");

  return (
    <header className={className}>
      <div className="wrap site-header__inner">
        <Logo />

        <nav className="nav" aria-label="Main">
          <div className="nav__pill">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contact/#quote" className="btn btn--light nav__cta">
            Request a quote
            <Arrow />
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Main">
          <div className="wrap mobile-nav__list">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav__link"
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="btn-row">
              <Link href="/contact/#quote" className="btn btn--light" onClick={() => setOpen(false)}>
                Request a quote
                <Arrow />
              </Link>
            </div>
            <div className="mobile-nav__contact">
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              {site.contact.phone && (
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
