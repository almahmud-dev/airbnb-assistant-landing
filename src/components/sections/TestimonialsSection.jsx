"use client";
import { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

const CARD_W = 530;
const GAP = 24;

export default function ReviewSection() {
  const { heading, highlight, description, reviews } = REVIEWS;
  const [current, setCurrent] = useState(1);
  const [translate, setTranslate] = useState(0);
  const wrapRef = useRef(null);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    setCurrent(idx);
    const wrapW = wrapRef.current?.offsetWidth ?? 1200;
    const offset = idx * (CARD_W + GAP) - (wrapW / 2 - CARD_W / 2);
    setTranslate(-Math.max(0, offset));
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % reviews.length;
        const wrapW = wrapRef.current?.offsetWidth ?? 1200;
        const offset = next * (CARD_W + GAP) - (wrapW / 2 - CARD_W / 2);
        setTranslate(-Math.max(0, offset));
        return next;
      });
    }, 3000);
  };

  useEffect(() => {
    goTo(1);
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-350 mx-auto px-4">
        <SectionHeader
          title={heading}
          highlight={highlight}
          description={description}
        />

        {/* Desktop */}
        <div
          ref={wrapRef}
          className="hidden lg:block overflow-hidden"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={startTimer}
        >
          {/* outer div height fix — center card height */}
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
              {reviews.map((review, i) => {
                const isCenter = i === current;
                return (
                  <div
                    key={review.id}
                    onClick={() => goTo(i)}
                    style={{
                      width: `${CARD_W}px`,
                      height: "200px",
                      transform: isCenter ? "scale(1)" : "scale(0.88)",
                      transformOrigin: "center center",
                      transition:
                        "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s cubic-bezier(0.4,0,0.2,1)",
                      willChange: "transform, opacity",
                      flexShrink: 0,
                    }}
                    className={`
                      rounded-2xl overflow-hidden flex
                      ${
                        isCenter
                          ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] cursor-default z-10"
                          : "bg-[#F6F6F6] cursor-pointer opacity-60 hover:opacity-80"
                      }
                    `}
                  >
                    {/* Left — Image */}
                    <div className="relative flex-shrink-0 w-[140px] h-full">
                      <AppImage
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right — Text & Stars */}
                    <div className="flex flex-col justify-between p-5 flex-1 min-w-0">
                      <span className="text-[16px] font-semibold text-[#1E1E1E] truncate">
                        {review.name}
                      </span>
                      <p className="text-sm text-[#555] leading-relaxed line-clamp-3">
                        {review.text}
                      </p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            size={14}
                            className={
                              s < review.rating
                                ? "fill-[#ED3C6A] text-[#ED3C6A]"
                                : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet */}
        <div
          className="lg:hidden"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={startTimer}
        >
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(calc(-${current} * 100%))`,
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                willChange: "transform",
              }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden flex h-[180px] sm:mx-8 md:mx-16">
                    <div className="relative flex-shrink-0 w-[120px]">
                      <AppImage
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-4 flex-1 min-w-0">
                      <span className="text-[15px] font-semibold text-[#1E1E1E] truncate">
                        {review.name}
                      </span>
                      <p className="text-sm text-[#555] leading-relaxed line-clamp-3">
                        {review.text}
                      </p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            size={13}
                            className={
                              s < review.rating
                                ? "fill-[#ED3C6A] text-[#ED3C6A]"
                                : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{ transition: "all 0.3s ease" }}
                className={`rounded-full border-none outline-none ${
                  i === current
                    ? "w-3 h-3 bg-[#ED3C6A] scale-110"
                    : "w-2.5 h-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
