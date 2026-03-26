"use client";

import { useState } from "react";

const navLinks = [
  { label: "COLLECTIONS", href: "#services", active: true },
  { label: "CONSULTANCY", href: "#about" },
  { label: "THE ATELIER", href: "#quote" },
  { label: "JOURNAL", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 max-w-full bg-[#0a0c0b]/90 backdrop-blur-md border-b border-[#064e3b]/30">
      <div className="text-2xl font-bold tracking-[0.15em] text-[#E5C374] font-[family-name:var(--font-manrope)]">
        KEYSTYLE
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-[family-name:var(--font-manrope)] uppercase tracking-[0.1em] text-sm transition-colors duration-300 ${
              link.active
                ? "text-[#E5C374] font-semibold border-b border-[#E5C374] pb-1"
                : "text-white/80 hover:text-[#E5C374]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#E5C374]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-2xl">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Book Now */}
      <button className="hidden md:block bg-gradient-to-br from-[#E5C374] to-[#C5A55A] text-[#3f2e00] px-6 py-2 font-[family-name:var(--font-manrope)] font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,195,116,0.3)]">
        BOOK NOW
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0c0b]/95 backdrop-blur-md border-b border-[#064e3b]/30 md:hidden flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-[#E5C374] font-[family-name:var(--font-manrope)] uppercase tracking-[0.1em] text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-gradient-to-br from-[#E5C374] to-[#C5A55A] text-[#3f2e00] px-6 py-2 font-bold uppercase tracking-wider text-xs">
            BOOK NOW
          </button>
        </div>
      )}
    </nav>
  );
}
