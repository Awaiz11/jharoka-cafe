import { PHOTOS, img } from "./data";

const SHOTS = [
  { id: PHOTOS.terrace, alt: "Leafy café terrace with hanging lights", cls: "g--tall" },
  { id: PHOTOS.pourOver, alt: "Barista making pour-over coffee", cls: "g--mid" },
  { id: PHOTOS.spread, alt: "Breakfast spread with waffles, eggs and juice", cls: "g--short" },
  { id: PHOTOS.bar, alt: "Coffee bar with pendant lights and shelves", cls: "g--mid" },
];

export default function Gallery() {
  return (
    <section className="gallery section" aria-labelledby="gallery-title">
      <div className="wrap">
        <h2 id="gallery-title" className="h2 gallery__title">
          Mornings at the bar, evenings on the terrace
        </h2>
        <div className="gallery__row">
          {SHOTS.map((s) => (
            <div key={s.id} className={`arch gallery__item ${s.cls}`}>
              <img src={img(s.id, 700)} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
