import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";

const TOOLS = [
  { name: "PriceLabs",      src: "/images/Tools/tool1.png" },
  { name: "Wheelhouse",     src: "/images/Tools/tool2.png" },
  { name: "Beyond Pricing", src: "/images/Tools/tool3.png" },
  { name: "Hostfully",      src: "/images/Tools/tool4.png" },
  { name: "Guesty",         src: "/images/Tools/tool5.png" },
  { name: "Lodgify",        src: "/images/Tools/tool6.png" },
  { name: "Tool 7",         src: "/images/Tools/tool4.png" },
  { name: "Tool 8",         src: "/images/Tools/tool5.png" },
  { name: "Tool 9",         src: "/images/Tools/tool6.png" },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="pt-21 bg-white">
      <div className="max-w-240 mx-auto pb-20.5 px-6">
        <SectionHeader
          title="Our"
          highlight="Tools"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      {/* Full width background */}
      <div className="bg-[#F6F6F6] w-full pt-9.5 pb-21.25">
        <div className="max-w-240 mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-[11px] flex items-center justify-center py-11.75 pl-11 pr-17.5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AppImage
                  src={tool.src}
                  alt={tool.name}
                  width={120}
                  height={40}
                  style={{ height: "auto" }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}