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
      <nav className="max-w-310.25 mx-auto px-6 flex items-center justify-between h-22.25">
        {/* Logo */}
        <Link href="/" aria-label="OneLittleWeb Home">
          <AppImage
            src="/images/Nav_logo/Google-Logo.webp"
            alt="listings"
            width={125}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative text-[18px] leading-[150%] font-normal text-[#1E1E1E] hover:text-[#ED3C6A] transition-all duration-300 ease-out inline-block hover:-translate-y-1"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 -bottom-1.75 w-full h-px bg-[#ED3C6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"/>
                </span>
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
              className="text-sm font-medium text-gray-700 hover:text-[#ED3C6A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="#contact"
            showArrow
            onClick={() => setMobileOpen(false)}
          >
            Schedule A Meeting
          </Button>
        </div>
      )}
    </header>
  );
}
