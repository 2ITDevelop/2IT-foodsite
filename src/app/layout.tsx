// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Officina Sottoripa · Panini genovesi",
  description:
    "Paninoteca sotto i portici di Sottoripa: piatti tipici genovesi in versione street food.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      {/* niente dark mode automatica: controlli tu i colori in CSS */}
      <body className="site-root">
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
