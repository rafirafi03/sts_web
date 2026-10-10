"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const link = list.querySelector("[aria-current]");
    if (link) list.scrollTo({ left: link.parentElement.offsetLeft - list.offsetLeft, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;

    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = els[els.length - 1].id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <nav className="cap-nav" aria-label="On this page">
      <p className="cap-nav__label">On this page</p>
      <ul ref={listRef}>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
              <span className="cap-nav__num">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
