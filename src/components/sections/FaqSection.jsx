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
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-5">
        <SectionHeader
          title="Frequently asked"
          highlight="questions"
          description="Everything you need to know about the product and billing."
        />

        {/* ── Accordion ── */}
        <div className="max-w-[768px] mx-auto rounded-2xl divide-y divide-gray-200 overflow-hidden mb-14">
          {FAQS.map((faq, i) => (
            <div key={faq.question}>
              <button
                className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-gray-50 transition-colors"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-black font-bold text-[18px] leading-[24px] pr-4">{faq.question}</span>
                {openIndex === i ? (
                  <MinusCircle size={24} className="text-[#F72585] flex-shrink-0" />
                ) : (
                  <PlusCircle size={24} className="text-[#F72585] flex-shrink-0" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#606060] text-[16px] font-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Still have questions ── */}
        <div className="text-center border border-gray-200 rounded-2xl py-10 px-6">
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
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"
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

          <h3 className="font-bold text-gray-900 text-lg mb-2">Still have Questions?</h3>
          <p className="text-gray-400 text-sm mb-6">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          <button className="bg-[#F72585] hover:bg-[#d4006e] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}