import Image from "next/image";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-310 mx-auto px-6">
        <SectionHeader
          title="Our"
          highlight="Service"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="border border-[#FAC4D2] rounded-[13px] pt-[53px] pl-[34px] pr-[58px] pb-[30px] hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-5">
                <AppImage
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  style={{ height: "auto" }}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[24px] font-bold leading-[150%] text-[#000000] mb-3.5">{service.title}</h3>
              <p className="text-[#000000] text-sm font-medium mb-8.75">{service.description}</p>
              <Link
                href="#"
                className="inline-block border border-[#ED3C6A] text-[#F72585] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#F72585] hover:text-white transition-colors duration-200"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}