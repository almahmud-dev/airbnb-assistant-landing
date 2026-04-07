"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import AppImage from "@/components/ui/AppImage";
import Button from "../ui/Button";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 [box-shadow:0_4px_62px_0px_#FAC4D2A1]">
      <nav className="max-w-310.25 mx-auto px-6 flex items-center justify-between h-[89px]">
        {/* Logo */}
        <Link href="/" aria-label="OneLittleWeb Home">
          <AppImage
            src="/images/Nav_logo/Google-Logo.webp"
            alt="listings"
            width={125}
            height={45}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative text-[18px] leading-[150%] font-normal hover:font-bold text-[#1E1E1E] hover:text-[#ED3C6A] transition-colors duration-200
          after:content-[attr(data-text)] after:block after:font-bold after:h-0 after:overflow-hidden after:invisible"
                data-text={link.label}
              >
                {link.label}
                <span className="absolute left-0 -bottom-[7px] w-full h-px bg-[#ED3C6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button href="#contact" showArrow>
            Schedule A Meeting
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-[5px] hover:bg-gray-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
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
