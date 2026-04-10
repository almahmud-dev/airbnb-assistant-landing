import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUsSection() {
  const { heading, description, features } = WHY_CHOOSE_US;

  return (
    <section id="about" className="pt-10 lg:pt-21 pb-10 lg:pb-30.25 bg-white">
      <div className="max-w-310 mx-auto px-4">
        <div
          className="
        bg-[#FFF0F5] border border-[#F8BECD] rounded-3xl items-center gap-3.5
        pt-10 pb-10 pl-6 pr-6
        xl:pt-16.5 xl:pb-20.75 xl:pl-22.25 xl:pr-9.5
        flex flex-col md:flex-row
        "
        >
          {/* Left — Text */}
          <div className="flex-1 w-full md:max-w-100 lg:max-w-114.25">
            <h2
              className="
            text-2xl font-bold text-black mb-6.5 whitespace-pre-line
            sm:text-3xl
            lg:text-4xl
            "
            >
              {heading}
            </h2>

            <p className="text-black text-sm font-semibold mb-7.5">
              {description}
            </p>

            <ul className="space-y-3 lg:space-y-3.5 mb-11.25">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FAC4D2] flex items-center justify-center shrink-0">
                    <Check size={16} className="text-[#ED3C6A]" />
                  </span>
                  <span className="text-[#1E1E1E] text-[16px] font-bold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="#contact" variant="primary" showArrow>
              Schedule A Meeting
            </Button>
          </div>

          {/* Right - Mockup */}
          <div
            className="flex-1 relative flex items-center justify-center w-full
          lg:max-w-160.5
          mt-10
          lg:mt-0
          h-95
          sm:h-105
          lg:h-auto"
          >
            {/* Pink - blob */}
            <div
              className="
            absolute top-[60%]
            left-1/2 -translate-x-1/2 -translate-y-1/2
            w-75 h-50
            sm:w-105 sm:h-65
            md:w-95 md:h-60
            lg:max-w-138 lg:h-60
            xl:max-w-142.5 xl:h-84.25
            bg-[#FAC4D2] rounded-[168.5px]"
            />

            {/* choose1 - Listing card */}
            <div
              className="absolute top-0 -left-4
            sm:top-6 sm:-left-6
            md:top-25 md:-left-12
            lg:top-10 lg:-left-10
            z-20 animate-float"
            >
              <AppImage
                src="/images/Why_Chosse/choose1.png"
                alt="Listing card"
                width={254}
                height={105}
                style={{ width: "clamp(120px, 22vmin, 254px)", height: "auto" }}
                className="object-cover"
              />
            </div>

            {/* choose2 — Brand icons */}
            <div
              className="absolute top-0 right-0 z-20 animate-float-delay
            sm:top-2 sm:right-10
            md:top-8 md:-right-4
            lg:top-3 lg:right-7
            "
            >
              <AppImage
                src="/images/Why_Chosse/choose2.png"
                alt="Platforms"
                width={159}
                height={164}
                style={{ width: "clamp(80px, 16vmin, 159px)", height: "auto" }}
                className="object-cover"
              />
            </div>

            {/* main — Person */}
            <AppImage
              src="/images/Why_Chosse/main.png"
              alt="Property Manager"
              width={327}
              height={437}
              style={{
                width: "clamp(140px, 32vmin, 327px)",
                height: "auto",
              }}
              className="relative -top-2 -left-5 z-40 object-contain"
            />

            {/* choose3 — Calendar */}
            <div
              className="absolute -bottom-10 -left-4 z-20 animate-float-delay-2
            sm:-bottom-12 sm:-left-10
            md:-bottom-16 md:-left-17
            "
            >
              <AppImage
                src="/images/Why_Chosse/choose3.png"
                alt="Calendar"
                width={211}
                height={170}
                style={{ width: "clamp(100px, 20vmin, 211px)", height: "auto" }}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
