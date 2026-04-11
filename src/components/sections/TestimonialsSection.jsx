"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Container from "@/components/ui/container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";

const CARD_W = 530;
const GAP = 24;

export default function Reviews() {
  const [active, setActive] = useState(1);
  const [translate, setTranslate] = useState(0);
  const wrapRef = useRef(null);
  const timerRef = useRef(null);
  const paused = useRef(false);

  const goTo = useCallback((idx) => {
    setActive(idx);
    const wrapW = wrapRef.current?.offsetWidth ?? 1200;
    const offset = idx * (CARD_W + GAP) - (wrapW / 2 - CARD_W / 2);
    setTranslate(-Math.max(0, offset));
  }, []);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      if (!paused.current) {
        setActive((prev) => {
          const next = (prev + 1) % TESTIMONIALS.length;
          const wrapW = wrapRef.current?.offsetWidth ?? 1200;
          const offset = next * (CARD_W + GAP) - (wrapW / 2 - CARD_W / 2);
          setTranslate(-Math.max(0, offset));
          return next;
        });
      }
    }, 3000);
  }, []);

  useEffect(() => {
    goTo(1);
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <SectionHeader
        title="Check Our Clients"
        highlight="Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      {/* ── Desktop ── */}
      <div
        ref={wrapRef}
        className="hidden lg:block overflow-hidden"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="relative" style={{ height: "200px" }}>
          <div
            className="flex items-center absolute left-0 top-0 h-full"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translate}px)`,
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
              willChange: "transform",
            }}
          >
            {TESTIMONIALS.map((item, i) => {
              const isCenter = i === active;
              return (
                <div
                  key={i}
                  onClick={() => !isCenter && goTo(i)}
                  style={{
                    width: `${CARD_W}px`,
                    height: "200px",
                    flexShrink: 0,
                    transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
                    willChange: "opacity",
                  }}
                  className={`rounded-2xl overflow-hidden ${
                    isCenter
                      ? "bg-white shadow-[0_4px_77px_0px_rgba(136,136,136,0.41)] cursor-default z-20"
                      : "bg-[#F6F6F6] cursor-pointer"
                  }`}
                >
                  <TestimonialCard {...item} highlight={isCenter} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile & Tablet ── */}
      <div
        className="lg:hidden"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(calc(-${active} * 100%))`,
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
              willChange: "transform",
            }}
          >
            {TESTIMONIALS.map((item, i) => (
              <div key={i} className="w-full shrink-0 px-4 sm:px-8 md:px-16">
                <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden h-[180px]">
                  <TestimonialCard {...item} highlight={true} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{ transition: "all 0.3s ease" }}
              className={`rounded-full border-none outline-none ${
                i === active
                  ? "w-3 h-3 bg-primary scale-110"
                  : "w-2.5 h-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
