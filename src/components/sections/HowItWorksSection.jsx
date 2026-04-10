import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";
import { STEPS } from "@/lib/constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="pt-16.75 bg-white">
      <div className="max-w-232.75 mx-auto px-6">
        <SectionHeader
          title="Getting Started is"
          highlight="Easy"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9.5 mt-16">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              {/* Card */}
              <div className="relative border-2 border-[#FDEBF0] rounded-[9px] flex items-center justify-center w-full h-48">
                {/* Step Number */}
                <div className="absolute -top-5 -left-3">
                  <AppImage
                    src={step.topIcon}
                    alt={`Step ${step.num}`}
                    width={step.iconWidth}
                    height={step.iconHeight}
                    className="object-contain"
                  />
                </div>

                {/* Icon */}
                <div className="relative">
                  <AppImage
                    src={step.icon}
                    alt={step.label}
                    width={step.mainIconWidth}
                    height={step.mainIconHeight}
                    className="object-contain"
                  />
                  {step.plusIcon && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 8.01V11.49H12.18V21H8.82V11.49H0V8.01H8.82V0H12.18V8.01H21Z"
                          fill="#ED3C6A"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Label — card */}
              <p className="text-[#000000] font-semibold text-[20px] whitespace-pre-line text-center mt-8.25">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
