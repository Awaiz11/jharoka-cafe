import { CAFE, PHOTOS, img } from "./data";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="hero__urdu" lang="ur" aria-hidden="true">
            {CAFE.urdu}
          </p>
          <h1 id="hero-title" className="hero__title">
            A window seat on M.M.&nbsp;Alam Road
          </h1>
          <p className="hero__lede">
            Specialty coffee, all-day breakfast and long evenings in Gulberg. Pull up a chair by the
            jaali and watch Lahore go by.
          </p>
          <div className="hero__actions">
            <a href="#reserve" className="btn btn--ochre">
              Reserve a table
            </a>
            <a href="#menu" className="btn btn--ghost">
              See the menu
            </a>
          </div>
          <p className="hero__hours">Open every day from 8 am until late</p>
        </div>

        <div className="hero__window">
          <div className="arch hero__arch">
            <img
              src={img(PHOTOS.hero, 1100)}
              alt="A cortado on a sunlit table with soft shadows"
              className="hero__photo"
              fetchPriority="high"
            />
            <div className="shutter shutter--left" aria-hidden="true" />
            <div className="shutter shutter--right" aria-hidden="true" />
          </div>
          <div className="hero__sill" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
