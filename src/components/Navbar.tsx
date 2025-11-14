import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Paninoteca</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
      </nav>
    </header>
  );
}
