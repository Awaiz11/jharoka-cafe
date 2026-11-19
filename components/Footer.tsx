import { CAFE } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="wordmark wordmark--footer">
            <span className="wordmark__en">{CAFE.name}</span>
            <span className="wordmark__ur" lang="ur">{CAFE.urdu}</span>
          </p>
          <p className="footer__small">{CAFE.area}</p>
        </div>
        <p className="footer__credit">
          Jharoka is a concept café. Website designed and built by{" "}
          <a href="https://nexaflow-brown.vercel.app/" target="_blank" rel="noopener noreferrer">
            NexaFlow
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
