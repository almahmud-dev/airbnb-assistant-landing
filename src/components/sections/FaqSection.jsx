"use client";

import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS } from "@/lib/constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section id="faq" className="pt-10 lg:pt-[185px] pb-10 lg:pb-[77px]">
      <div className="max-w-[1240px] bg-[#F9FAFB] rounded-lg mx-auto px-5 py-5 lg:py-15">
        <SectionHeader
          title="Frequently asked"
          highlight="questions"
          description="Everything you need to know about the product and billing."
        />

        {/* Accordion */}
        <div className="max-w-[768px] mx-auto rounded-2xl divide-y divide-[rgba(191,33,74,0.28)] overflow-hidden mb-14">
          {FAQS.map((faq, i) => (
            <div key={faq.question}>
              <button
                className="w-full flex items-center justify-between text-left py-5 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-black font-bold text-[18px] leading-6">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <MinusCircle size={24} className="text-[#F72585] shrink-0" />
                ) : (
                  <PlusCircle size={24} className="text-[#F72585] shrink-0" />
                )}
              </button>

              {/* Smooth animation */}
              <div
                className={`grid transition-all duration-400 ease-in-out ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#606060] text-[16px] font-normal pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center py-8 px-6">
          {/* Avatar stack */}
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-3">
              {[
                "/images/FAQ/faq1.png",
                "/images/FAQ/faq2.png",
                "/images/FAQ/faq3.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full border-2 border-white overflow-hidden bg-gray-100"
                >
                  <Image
                    src={src}
                    alt="Support team member"
                    width={40}
                    height={40}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <h3 className="font-bold text-[#101828] text-[20px] leading-7.5 mb-2">
            Still have Questions?
          </h3>
          <p className="text-[#9C9C9C] text-lg leading-7 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <button className="bg-[#ED3C6A] hover:bg-[#d4006e] text-white font-semibold text-sm px-4.5 py-2.5 rounded-lg transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
