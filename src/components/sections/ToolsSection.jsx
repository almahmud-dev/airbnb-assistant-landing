import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";
import { TOOLS } from "@/lib/constants";

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
                  width={tool.iconWidth}
                  height={tool.iconHeight}
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