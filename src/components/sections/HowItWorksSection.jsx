import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    num: "01",
    label: "Add requirements\n& sign up today",
    topIcon: "/images/Work/work_top1.png",
    icon: "/images/Work/work1.png",
  },
  {
    num: "02",
    label: "Connect with your CSM &\nonboarding team",
    topIcon: "/images/Work/work_top2.png",
    icon: "/images/Work/work2.png",
  },
  {
    num: "03",
    label: "Meet your STR\nAssistant next week",
    topIcon: "/images/Work/work_top3.png",
    icon: "/images/Work/work3.png",
  },
];

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
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Icon */}
                <AppImage
                  src={step.icon}
                  alt={step.label}
                  width={100}
                  height={100}
                  className="object-contain"
                />
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
