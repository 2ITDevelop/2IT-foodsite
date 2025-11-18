// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/gallery", label: "Gallery" },
  { href: "/dove-siamo", label: "Dove siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <span className="navbar__logo-main">Officina Sottoripa</span>
          <span className="navbar__logo-sub">Panini genovesi</span>
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                "navbar__link" +
                (pathname === link.href ? " navbar__link--active" : "")
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
