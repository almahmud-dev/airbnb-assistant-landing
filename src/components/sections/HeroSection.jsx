import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-100"
      style={{ aspectRatio: "1440 / 584" }}
    >
      {/* hero.png */}
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

      {/* image1.png — top left */}
      <div
        className="absolute z-20 hidden lg:block aspect-square -rotate-[4.84deg]"
        style={{ width: "7%", left: "18%", top: "32%" }}
      >
        <AppImage src="/images/Herro/image1.png" alt="Airbnb" fill priority />
      </div>

      {/* image3.png — top right */}
      <div
        className="absolute z-20 hidden lg:block aspect-square rotate-[27.61deg]"
        style={{ width: "4.5%", left: "74.5%", top: "35%" }}
      >
        <AppImage src="/images/Herro/image3.png" alt="Booking" fill priority />
      </div>

      {/* image2.png — bottom left */}
      <div
        className="absolute z-20 hidden lg:block aspect-square"
        style={{ width: "5.2%", left: "21%", top: "82%" }}
      >
        <AppImage src="/images/Herro/image2.png" alt="App 2" fill />
      </div>

      {/* image4.png — bottom right */}
      <div
        className="absolute z-20 hidden lg:block aspect-square -rotate-[7.38deg]"
        style={{ width: "6.2%", left: "73.7%", top: "83%" }}
      >
        <AppImage src="/images/Herro/image4.png" alt="App 4" fill />
      </div>

      {/* Center zone */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-22.25">
        {/* hero_mid.png */}
        <div
          className="absolute pointer-events-none w-[90%] max-w-230.75"
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
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-230.75">
          <h1 className="text-[32px] md:text-[36px] lg:text-[48px] font-bold text-black">
            Airbnb Assistants For
            <br />
            <span className="font-medium text-[24px] md:text-[32px] lg:text-[38px]">
              Property Management
            </span>
          </h1>

          <p className="max-w-166.25 text-[14px] text-black font-medium mb-8">
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
