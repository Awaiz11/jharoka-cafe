"use client";

import { useEffect, useState } from "react";
import { CAFE } from "./data";

const LINKS = [
  { href: "#story", label: "Our story" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="wordmark" aria-label="Jharoka home">
          <span className="wordmark__en">{CAFE.name}</span>
          <span className="wordmark__ur" lang="ur">{CAFE.urdu}</span>
        </a>

        <nav aria-label="Main">
          <ul className={`nav__links ${open ? "is-open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#reserve" className="btn btn--ochre btn--small" onClick={() => setOpen(false)}>
                Reserve a table
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
