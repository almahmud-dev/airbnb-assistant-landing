import NextImage from "next/image";

const LOGOS = [
  { name: "Partner 1", src: "/images/Partnar/partnar1.png" },
  { name: "Partner 2", src: "/images/Partnar/partnar2.png" },
  { name: "Partner 3", src: "/images/Partnar/partnar3.png" },
  { name: "Partner 4", src: "/images/Partnar/partnar4.png" },
  { name: "Partner 5", src: "/images/Partnar/partnar5.png" },
  { name: "Partner 6", src: "/images/Partnar/partnar6.png" },
  { name: "Partner 7", src: "/images/Partnar/partnar7.png" },
];

const doubled = [...LOGOS, ...LOGOS];

export default function PartnersSection() {
  return (
    <section className="pt-12.5 pb-13.75 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-[#000000] font-semibold leading-[100%] text-[20px] mb-6">
        Trusted by leaders in 50+ industries
      </p>

      <div className="relative overflow-hidden bg-[#F6F6F6] py-4.5">
        <div className="flex animate-marquee gap-16 items-center w-max">
          {doubled.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center justify-center min-w-30">
              <NextImage
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                style={{ height: "auto" }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}