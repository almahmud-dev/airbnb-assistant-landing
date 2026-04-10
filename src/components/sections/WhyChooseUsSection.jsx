import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUsSection() {
  const { heading, description, features } = WHY_CHOOSE_US;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="bg-[#FFF0F5] rounded-3xl pt-[66px] pb-[83px] pl-[89px] pr-[38px] flex flex-col md:flex-row items-center gap-3.5">
          {/* Left — Text */}
          <div className="flex-1 max-w-[457px]">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-[26px] whitespace-pre-line">
              {heading}
            </h2>

            <p className="text-black text-sm font-semibold mb-[30px]">
              {description}
            </p>

            <ul className="space-y-3.5 mb-11.25">
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

          {/* Right — Mockup */}
          <div className="flex-1 relative flex items-center justify-center max-w-[642px]">
            {/* Pink blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[570px] h-[337px] bg-[#FAC4D2] rounded-[168.5px]" />
            {/* choose1 — Listing card */}
            <div className="absolute top-4 left-0 z-20 animate-float">
              <AppImage
                src="/images/Why_Chosse/choose1.png"
                alt="Listing card"
                width={254}
                height={105}
                style={{ width: "254px", height: "105px" }}
                className="object-cover"
              />
            </div>

            {/* choose2 — Brand icons */}
            <div className="absolute top-0 right-10 z-20 animate-float-delay">
              <AppImage
                src="/images/Why_Chosse/choose2.png"
                alt="Platforms"
                width={200}
                height={184}
                style={{ width: "200px", height: "184px" }}
                className="object-cover"
              />
            </div>

            {/* main — Person */}
            <AppImage
              src="/images/Why_Chosse/main.png"
              alt="Property Manager"
              width={327}
              height={437}
              style={{ width: "327px", height: "437px" }}
              className="relative z-100 object-top"
            />

            {/* choose3 — Calendar */}
            <div className="absolute -bottom-10 left-0 z-20 animate-float-delay-2">
              <AppImage
                src="/images/Why_Chosse/choose3.png"
                alt="Calendar"
                width={211}
                height={170}
                style={{ width: "211px", height: "170px" }}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
