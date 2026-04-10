import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppImage from "@/components/ui/AppImage";
import Button from "../ui/Button";

function FloatingIcon({ rotate, className, children }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`${rotate} rounded-2xl shadow-lg flex items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-[580px] flex items-center justify-center overflow-hidden mt-[89px]"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/images/Herro/hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Floating Brand Icons */}
      <FloatingIcon className="hidden md:block left-[360px] top-[100px] z-10">
        <div
          className="w-[80px] h-[80px] flex items-center justify-center bg-[#FF5A5F] rounded-[9px] rotate-[5.84deg]"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.20))" }}
        >
          <AppImage
            src="/images/Herro/image1.webp"
            alt="Icon 1"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </FloatingIcon>

      <FloatingIcon className="hidden md:block left-[365px] top-[75%] z-10">
        <div
          className="w-[68px] h-[68px] flex items-center justify-center bg-[#0E214B] rounded-[9px] -rotate-12"
          style={{ boxShadow: "0px -2px 6.3px 0px rgba(0,0,0,0.25)" }}
        >
          <AppImage
            src="/images/Herro/image2.webp"
            alt="Icon 2"
            width={68}
            height={68}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </FloatingIcon>

      <FloatingIcon className="hidden md:block right-[400px] top-[120px] z-10">
        <div
          className="w-[76px] h-[76px] flex items-center justify-center bg-[#0C3B7C] rounded-[9px] rotate-[-27.61deg]"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.20))" }}
        >
          <AppImage
            src="/images/Herro/image3.webp"
            alt="Icon 3"
            width={76}
            height={76}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </FloatingIcon>

      <FloatingIcon className="hidden md:block right-[400px] top-[75%] z-10">
        <div
          className="w-[72px] h-[72px] flex items-center justify-center bg-[#34E0A1] rounded-[9px] rotate-10"
          style={{ boxShadow: "0px -2px 6.3px 0px rgba(0,0,0,0.25)" }}
        >
          <AppImage
            src="/images/Herro/image4.webp"
            alt="Icon 4"
            width={72}
            height={72}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </FloatingIcon>

      {/* Centre Content */}
      <div className="relative z-10 text-center max-w-230.75 mx-auto mt-10">
        <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#000000] mb-7.75">
          Airbnb Assistants For
          <span className="font-medium text-[38px] block">
            Property Management
          </span>
        </h3>

        <p className="text-[#000000] text-sm font-medium mb-6 lg:mb-9 max-w-166.25 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center gap-5">
          <Button
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ED3C6A] hover:bg-[#d4006e] text-white text-[14px] font-bold leading-[100%] pl-5.5 pr-5 py-4.5 rounded-[5px] transition-colors"
          >
            Schedule A Meeting <ArrowRight size={10} />
          </Button>
          <Link
            href="#pricing"
            className="text-sm text-[#000000] underline font-medium underline-offset-2 hover:text-[#ED3C6A] transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
