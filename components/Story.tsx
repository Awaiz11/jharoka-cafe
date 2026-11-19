import { PHOTOS, img } from "./data";

export default function Story() {
  return (
    <section id="story" className="story section" aria-labelledby="story-title">
      <div className="wrap story__grid">
        <figure className="story__figure">
          <div className="arch story__arch">
            <img src={img(PHOTOS.window, 900)} alt="A small table by a tall window with plants" loading="lazy" />
          </div>
        </figure>

        <div className="story__text">
          <h2 id="story-title" className="h2">
            Named after the carved windows of old Lahore
          </h2>
          <p>
            A jharoka is the overhanging window of a haveli: a shaded seat where you could see the
            whole street without hurrying anywhere. We built a café around that seat.
          </p>
          <p>
            Our beans are roasted in Lahore every week. Breakfast runs until one, the chai is made
            the slow way, and the kitchen stays open late for everyone who comes after dinner.
          </p>

          <dl className="facts">
            <div>
              <dt>Roasted in Lahore</dt>
              <dd>Small batches every Tuesday, so nothing sits on the shelf.</dd>
            </div>
            <div>
              <dt>Family hall upstairs</dt>
              <dd>A quieter floor for families and private tables.</dd>
            </div>
            <div>
              <dt>Terrace seating</dt>
              <dd>Open from October to March, heaters on in December.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
