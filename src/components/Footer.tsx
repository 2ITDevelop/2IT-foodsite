// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">Officina Sottoripa</p>
          <p className="footer__text">
            Via di Sottoripa, 23r – 16124 Genova (Porto Antico)
          </p>
        </div>
        <div className="footer__links">
          <Link
            href="https://www.instagram.com/officinasottoripa/"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://www.tripadvisor.it/Restaurant_Review-g187823-d25450319-Reviews-Officina_Sottoripa-Genoa_Italian_Riviera_Liguria.html"
            target="_blank"
          >
            TripAdvisor
          </Link>
        </div>
        <p className="footer__text footer__text--small">
          Sito realizzato da 2IT · Sviluppo web
        </p>
      </div>
    </footer>
  );
}
