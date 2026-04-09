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
              className={`absolute top-[3px] w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-300 ${
                isYearly ? "translate-x-[23px]" : "translate-x-[3px]"
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

        {/* ── Plans ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? "bg-[#ED3C6A]"
                  : "border border-gray-200 bg-white"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 leading-relaxed ${plan.featured ? "text-pink-100" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-5xl font-extrabold ${plan.featured ? "text-white" : "text-gray-900"}`}
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={`text-sm ml-1 ${plan.featured ? "text-pink-100" : "text-gray-500"}`}
                >
                  / Month
                </span>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm mb-8 transition-colors duration-200 ${
                  plan.featured
                    ? "bg-white text-[#F72585] hover:bg-pink-50"
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
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        feature.included
                          ? plan.featured
                            ? "bg-white"
                            : "bg-[#F72585]"
                          : plan.featured
                            ? "bg-pink-400"
                            : "bg-gray-200"
                      }`}
                    >
                      {feature.included ? (
                        <Check
                          size={11}
                          className={
                            plan.featured ? "text-[#F72585]" : "text-white"
                          }
                        />
                      ) : (
                        <X
                          size={11}
                          className={
                            plan.featured ? "text-white" : "text-gray-400"
                          }
                        />
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        feature.included
                          ? plan.featured
                            ? "text-white"
                            : "text-gray-800"
                          : plan.featured
                            ? "text-pink-200"
                            : "text-gray-400"
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
