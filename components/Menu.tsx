"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { MENU, img } from "./data";

export default function Menu() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const section = MENU[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % MENU.length;
    if (e.key === "ArrowLeft") next = (i - 1 + MENU.length) % MENU.length;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section id="menu" className="menu section" aria-labelledby="menu-title">
      <div className="wrap">
        <div className="menu__head">
          <h2 id="menu-title" className="h2">
            Menu
          </h2>
          <p className="menu__note">Prices in rupees and inclusive of tax.</p>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu sections">
          {MENU.map((m, i) => (
            <button
              key={m.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${m.id}`}
              tabIndex={i === active ? 0 : -1}
              className="menu__tab"
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="menu__body">
          <div
            key={section.id}
            id={`panel-${section.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${section.id}`}
            className="menu__panel"
          >
            <p className="menu__hours">{section.hours}</p>
            <ul className="menu__list">
              {section.items.map((item, i) => (
                <li key={item.name} className="dish" style={{ animationDelay: `${i * 45}ms` }}>
                  <div className="dish__line">
                    <span className="dish__name">{item.name}</span>
                    <span className="dish__dots" aria-hidden="true" />
                    <span className="dish__price">Rs {item.price}</span>
                  </div>
                  <p className="dish__note">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu__photo" aria-hidden="true">
            {MENU.map((m, i) => (
              <img
                key={m.id}
                src={img(m.photo, 900)}
                alt={m.photoAlt}
                loading="lazy"
                className={i === active ? "is-active" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
