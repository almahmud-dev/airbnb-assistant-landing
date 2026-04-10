import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import {
  HERO_DESIGN_WIDTH,
  HERO_DESIGN_HEIGHT,
  HERO_FLOATING_IMAGES,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[400px]"
      style={{ aspectRatio: `${HERO_DESIGN_WIDTH} / ${HERO_DESIGN_HEIGHT}` }}
    >
      {/* hero.png — full background */}
      <div className="absolute inset-0 pointer-events-none">
        <AppImage
          src="/images/Herro/hero.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Floating platform icons */}
      {HERO_FLOATING_IMAGES.map((img) => (
        <div
          key={img.alt}
          className={`absolute z-20 hidden lg:block aspect-square ${img.animationClass}`}
          style={{
            width: img.width,
            left: img.left,
            top: img.top,
            "--rotate": img.rotate,
          }}
        >
          <AppImage src={img.src} alt={img.alt} fill priority />
        </div>
      ))}

      {/* Center zone */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-[160px]">
        {/* hero_mid.png — oval glow behind text */}
        <div
          className="absolute pointer-events-none w-[90%] max-w-[923px]"
          style={{ aspectRatio: "923 / 500" }}
        >
          <AppImage
            src="/images/Herro/hero_mid.png"
            alt=""
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Text & buttons */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[923px]">
          <h1 className="text-[32px] md:text-[36px] lg:text-[48px] font-bold text-black">
            Airbnb Assistants For
            <br />
            <span className="font-medium text-[24px] md:text-[32px] lg:text-[38px]">
              Property Management
            </span>
          </h1>

          <p className="max-w-[665px] text-[14px] text-black font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Button href="/schedule" variant="primary" showArrow>
              Schedule A Meeting
            </Button>
            <Link
              href="/pricing"
              className="text-[14px] text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
