"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "KeyStyle completely transformed how I present myself in the boardroom. The confidence shift is palpable. It's not just about clothes, it's about authority.",
    name: "DAVID CHANDLER",
    role: "CEO, VANGUARD TECH",
  },
  {
    quote:
      "Working with KeyStyle was a revelation. Every piece in my wardrobe now serves a purpose. The ROI on personal presence is immeasurable.",
    name: "MARCUS WONG",
    role: "MANAGING DIRECTOR, APEX CAPITAL",
  },
  {
    quote:
      "The wardrobe edit alone saved me hours each week. KeyStyle understands what executives need - efficiency with impact.",
    name: "JAMES PATEL",
    role: "VP OPERATIONS, MERIDIAN GROUP",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#0a0c0b] py-32 px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[#064e3b] opacity-5 pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[#E5C374]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        <p className="text-2xl md:text-3xl font-[family-name:var(--font-inter)] text-white mb-10 leading-relaxed italic">
          &ldquo;{testimonials[current].quote}&rdquo;
        </p>
        <p className="text-[#E5C374] font-[family-name:var(--font-manrope)] uppercase tracking-[0.3em] text-sm font-bold">
          {testimonials[current].name} &mdash; {testimonials[current].role}
        </p>
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-[#E5C374]" : "bg-white/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
