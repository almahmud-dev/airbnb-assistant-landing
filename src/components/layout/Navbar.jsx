"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* ── Logo ── */}
        <Link href="/" aria-label="OneLittleWeb Home">
          <svg width="130" height="38" viewBox="0 0 272 92" fill="none">
            <path d="M46 10C46 10 10 28 10 55C10 72 26 82 46 82C66 82 82 72 82 55C82 28 46 10 46 10Z" fill="#4285F4" />
            <path d="M46 10C46 10 82 28 82 55C82 72 66 82 46 82" fill="#EA4335" />
            <text x="95" y="62" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700" fill="#202124">
              oogle
            </text>
          </svg>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.label === "Home"
                    ? "text-[#F72585] border-b-2 border-[#F72585] pb-0.5"
                    : "text-gray-700 hover:text-[#F72585]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-[#F72585] hover:bg-[#d4006e] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
          >
            Schedule A Meeting <ArrowRight size={15} />
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#F72585] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 bg-[#F72585] text-white text-sm font-semibold px-5 py-3 rounded-lg w-fit"
          >
            Schedule A Meeting <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </header>
  );
}
