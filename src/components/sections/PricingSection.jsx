"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import AppImage from "../ui/AppImage";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="pt-18.25 bg-white">
      <div className="max-w-296 mx-auto px-6">
        <h2 className="text-[40px] font-bold mb-4 text-center">
          Airnbn Assistent <span className="text-[#ED3C6A]">Pricing</span>
        </h2>
        <p className="text-[#191D23] text-[20px] font-normal mb-9.5 text-center">
          Choose a plan that's right for you
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12 relative">
          <span
            className={`text-[16px] font-normal transition-colors ${!isYearly ? "text-[#191D23]" : "text-gray-400"}`}
          >
            Pay Monthly
          </span>

          <button
            role="switch"
            aria-checked={isYearly}
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
              isYearly ? "bg-[#F72585]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute left-0 top-0.75 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-300 ${
                isYearly ? "translate-x-5.75" : "translate-x-0.75"
              }`}
            />
          </button>

          <span
            className={`text-[16px] font-normal transition-colors ${isYearly ? "text-[#191D23]" : "text-gray-400"}`}
          >
            Pay Yearly
          </span>

          {/* Save 25% — fixed position so it never pushes cards down */}
          <div
            className={`absolute left-[calc(60%+30px)] -top-6.5 transition-opacity duration-300 ${
              isYearly ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <AppImage
              src="/images/save13.png"
              alt="Save 25%"
              width={185}
              height={88}
              style={{ height: "auto" }}
            />
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[10px] px-6 py-10 ${
                plan.featured
                  ? "bg-[#ED3C6A]"
                  : "border border-[#FAC4D2] bg-white"
              }`}
            >
              <h3
                className={`text-[22px] font-bold font-manrope mb-2.75 ${plan.featured ? "text-white" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 font-manrope min-h-11 ${plan.featured ? "text-pink-100" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-[56px] font-semibold ${plan.featured ? "text-white" : "text-gray-900"}`}
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={`text-[16px] font-light ml-1 ${plan.featured ? "text-pink-100" : "text-gray-500"}`}
                >
                  / Month
                </span>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-semibold text-[16px] mb-8 transition-colors duration-200 font-manrope ${
                  plan.featured
                    ? "bg-white text-[#ED3C6A] hover:bg-pink-50"
                    : "border border-[#F72585] text-[#F72585] hover:bg-[#F72585] hover:text-white"
                }`}
              >
                Get Started Now
              </button>

              {/* Features */}
              <ul className="space-y-3" role="list">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-manrope ${
                        feature.included
                          ? plan.featured
                            ? "bg-[#FAC4D2]"
                            : "bg-[#FAC4D2]"
                          : plan.featured
                            ? "bg-white"
                            : "bg-[#F7F8F9]"
                      }`}
                    >
                      {feature.included ? (
                        <Check
                          size={16}
                          className={
                            plan.featured ? "text-[#F72585]" : "text-[#F72585]"
                          }
                        />
                      ) : (
                        <X size={16} className={"text-black"} />
                      )}
                    </span>
                    <span
                      className={`text-[16px] font-medium font-manrope ${
                        feature.included
                          ? plan.featured
                            ? "text-white"
                            : "text-[#191D23]"
                          : plan.featured
                            ? "text-white"
                            : "text-[#C4C4C4]"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
