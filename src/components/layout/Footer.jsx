import Image from "next/image";
import { FOOTER_LINKS, SOCIAL_ICONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#D6D6D6]">
      {/* Main Footer */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 xl:px-5 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24">
          {/* Logo + Description + Social — fixed width */}
          <div className="flex flex-col gap-5 lg:max-w-[300px] xl:max-w-[396px] shrink-0">
            <Image
              src="/images/Nav_logo/footer.png"
              alt="Logo"
              width={106}
              height={38}
              className="object-contain"
            />
            <p className="text-[#606060] text-[13px] sm:text-[14px] leading-5.5 sm:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_ICONS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-[#27272A] hover:text-[#ED3C6A] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 3 link columns */}
          <div className="flex flex-1 flex-col sm:flex-row gap-8 sm:gap-6 lg:gap-10 xl:gap-16 justify-between">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold text-[#18181B] text-[14px] sm:text-[15px] md:text-[16px] mb-4 sm:mb-5 md:mb-5.5">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#606060] text-[13px] sm:text-[14px] hover:text-[#ED3C6A] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#230B41]">
        <div className="max-w-310 mx-auto px-4 sm:px-6 py-4 sm:py-5 text-center">
          <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] leading-5.5 font-normal font-poppins">
            © Copyright 2024, All Rights Reserved by XYz
          </p>
        </div>
      </div>
    </footer>
  );
}
