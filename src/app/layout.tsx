import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paninoteca — 2IT",
  description: "Sito ufficiale della paninoteca. Menu, orari e contatti.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Paninoteca — 2IT",
    description: "Scopri il nostro menu e ordina al banco.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
