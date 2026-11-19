"use client";

import { useState, type FormEvent } from "react";
import { CAFE, HOURS } from "./data";

type Errors = Partial<Record<"name" | "date" | "time", string>>;

export default function Visit() {
  const [errors, setErrors] = useState<Errors>({});
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const date = String(f.get("date") || "");
    const time = String(f.get("time") || "");
    const guests = String(f.get("guests") || "2");
    const seating = String(f.get("seating") || "Indoor");
    const note = String(f.get("note") || "").trim();

    const next: Errors = {};
    if (!name) next.name = "Add your name so we know who the table is for.";
    if (!date) next.date = "Pick a date.";
    if (!time) next.time = "Pick a time.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const when = new Date(`${date}T${time}`).toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
    });
    const msg =
      `Assalam o alaikum, I'd like to reserve a table at ${CAFE.name}.\n` +
      `Name: ${name}\nGuests: ${guests}\nWhen: ${when}\nSeating: ${seating}` +
      (note ? `\nNote: ${note}` : "");
    window.open(`https://wa.me/${CAFE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="visit" className="visit section" aria-labelledby="visit-title">
      <div className="wrap visit__grid">
        <div className="visit__info">
          <h2 id="visit-title" className="h2">
            Find us in Gulberg
          </h2>
          <p className="visit__address">{CAFE.area}</p>
          <a className="link" href={CAFE.mapsUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>

          <table className="hours">
            <caption>Opening hours</caption>
            <tbody>
              {HOURS.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="visit__small">
            Valet parking at the front. Call or WhatsApp {CAFE.phoneDisplay}.
          </p>
        </div>

        <form id="reserve" className="reserve" onSubmit={onSubmit} noValidate>
          <h3 className="reserve__title">Reserve a table</h3>
          <p className="reserve__hint">
            Fill this in and we&apos;ll confirm on WhatsApp, usually within 15 minutes.
          </p>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
            {errors.name && <p className="field__error" id="err-name">{errors.name}</p>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" min={today} aria-invalid={!!errors.date} aria-describedby={errors.date ? "err-date" : undefined} />
              {errors.date && <p className="field__error" id="err-date">{errors.date}</p>}
            </div>
            <div className="field">
              <label htmlFor="time">Time</label>
              <input id="time" name="time" type="time" aria-invalid={!!errors.time} aria-describedby={errors.time ? "err-time" : undefined} />
              {errors.time && <p className="field__error" id="err-time">{errors.time}</p>}
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" defaultValue="2">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="seating">Seating</label>
              <select id="seating" name="seating" defaultValue="Indoor">
                <option>Indoor</option>
                <option>Terrace</option>
                <option>Family hall</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="note">Anything we should know? (optional)</label>
            <textarea id="note" name="note" rows={2} placeholder="Birthday, high chair, window seat…" />
          </div>

          <button type="submit" className="btn btn--ochre btn--block">
            Send request on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
