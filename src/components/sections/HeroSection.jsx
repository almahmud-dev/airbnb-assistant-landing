import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppImage from "@/components/ui/AppImage";

function FloatingIcon({ bg, rotate, className, children }) {
  return (
    <div className={`absolute ${className}`}>
      <div className={`${bg} ${rotate} rounded-2xl shadow-lg flex items-center justify-center`}>
        {children}
      </div>
    </div>
  );
}

function Dot({ color, className, size = "w-3 h-3" }) {
  return <div className={`absolute rounded-full ${color} ${size} ${className}`} />;
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[580px] flex items-center justify-center overflow-hidden pt-[72px]"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #fdf0f4 0%, transparent 18%),
          linear-gradient(#e5e7eb 1px, transparent 1px),
          linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 80px 80px, 80px 80px",
      }}
    >
      {/* ── Floating Brand Icons ── */}
      <FloatingIcon rotate="-rotate-12" className="left-[8%] top-[28%]">
  <div className="w-[80px] h-[80px] flex items-center justify-center">
    <AppImage src="/images/herro/image1.webp" alt="Icon 1" width={80} height={80} />
  </div>
</FloatingIcon>

<FloatingIcon rotate="-rotate-12" className="left-[12%] top-[63%]">
  <div className="w-[68px] h-[68px] flex items-center justify-center">
    <AppImage src="/images/herro/image2.webp" alt="Icon 2" width={68} height={68} />
  </div>
</FloatingIcon>

<FloatingIcon rotate="rotate-12" className="right-[10%] top-[20%]">
  <div className="w-[76px] h-[76px] flex items-center justify-center">
    <AppImage src="/images/herro/image3.webp" alt="Icon 3" width={76} height={76} />
  </div>
</FloatingIcon>

<FloatingIcon rotate="rotate-10" className="right-[9%] top-[55%]">
  <div className="w-[72px] h-[72px] flex items-center justify-center">
    <AppImage src="/images/herro/image4.webp" alt="Icon 4" width={72} height={72} />
  </div>
</FloatingIcon>

      {/* ── Decorative Dots ── */}
      <Dot color="bg-[#4361EE]" size="w-2 h-2" className="left-[4%] top-[40%]" />
      <Dot color="bg-[#EA4335]" size="w-3 h-3" className="left-[22%] top-[54%]" />
      <Dot color="bg-[#F9C74F]" size="w-2.5 h-2.5" className="right-[18%] top-[34%]" />
      <Dot color="bg-[#34E0A1]" size="w-2 h-2" className="left-[48%] top-[13%]" />
      <Dot color="bg-[#F9C74F]" size="w-3 h-3" className="left-[6%] top-[73%]" />
      <Dot color="bg-[#34E0A1]" size="w-2 h-2" className="left-[50%] top-[84%]" />
      <Dot color="bg-[#4361EE]" size="w-2 h-2" className="right-[3%] top-[58%]" />

      {/* ── Centre Content ── */}
      <div className="relative z-10 text-center max-w-[640px] mx-auto px-6 py-20">
        <h1 className="text-[44px] md:text-[52px] font-extrabold text-gray-900 leading-tight mb-5">
          Airbnb Assistants For
          <br />
          <span className="font-normal">Property Management</span>
        </h1>

        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-[500px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ED3C6A] hover:bg-[#d4006e] text-white text-[14px] font-bold leading-[100%] px-[24px] py-[18px] rounded-[5px] transition-colors"
          >
            Schedule A Meeting <ArrowRight size={15} />
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-gray-700 underline underline-offset-2 hover:text-[#ED3C6A] transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}