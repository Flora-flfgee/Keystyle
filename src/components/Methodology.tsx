"use client";

import { motion } from "framer-motion";

const methodology = [
  {
    w: "WHO",
    title: "THE SARTORIAL VISIONARY",
    description: "Founded by Flora Leong, Keystyle Sartorial is the strategic partner for high-profile men and boardroom leaders.",
  },
  {
    w: "WHAT",
    title: "BESPOKE CURATION",
    description: "A comprehensive image strategy merging consumer psychology with personal brand equity.",
  },
  {
    w: "WHERE",
    title: "GLOBAL ECOSYSTEM",
    description: "Designed for the executive transitioning between Singapore, London, and Hong Kong.",
  },
  {
    w: "WHEN",
    title: "STRATEGIC MOMENTS",
    description: "From defining leadership presence to high-stakes global travel rotations.",
  },
  {
    w: "WHY",
    title: "AUTHORITY & IMPACT",
    description: "Because style is a non-verbal command of respect and a calculated investment in success.",
  },
  {
    w: "HOW",
    title: "INTELLIGENT STYLING",
    description: "Observing the individual's architecture to build tactical, high-performance wardrobes.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="bg-[#050706] py-32 px-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#064e3b]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#E5C374] font-[family-name:var(--font-inter)] font-black uppercase tracking-[0.4rem] text-[10px]">
             THE KEYSTYLE STANDARD
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-[family-name:var(--font-manrope)] font-black uppercase tracking-tighter mt-6">
            STRATEGIC <span className="text-[#E5C374]">POSITIONING</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {methodology.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-6">
                <span className="text-3xl md:text-4xl font-black text-[#064e3b]/20 transition-colors group-hover:text-[#E5C374]/20 italic">
                  {m.w}
                </span>
                <div className="h-[1px] flex-grow bg-[#064e3b]/20" />
              </div>
              <h3 className="text-white font-[family-name:var(--font-manrope)] font-bold text-sm tracking-[0.2em] mb-4 uppercase group-hover:text-[#E5C374] transition-colors">
                {m.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-[family-name:var(--font-inter)] pr-4">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
