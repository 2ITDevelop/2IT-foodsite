export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="container mx-auto px-4 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} Paninoteca — Sito a cura di 2ITDevelop
      </div>
    </footer>
  );
}
