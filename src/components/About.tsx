import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0c0b] py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 w-full relative">
          <div className="absolute -inset-10 border border-[#064e3b]/20 -z-0" />
          <Image
            src="/images/flora.jpeg"
            alt="Flora Leong - Intelligent Styling"
            width={800}
            height={1000}
            className="w-full contrast-[1.1] brightness-90 relative z-10 border border-[#064e3b]/30 shadow-2xl"
            priority
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-manrope)] font-black text-white mb-8 uppercase tracking-tighter">
            WHAT IS <span className="text-[#E5C374]">INTELLIGENT</span>{" "}
            STYLING?
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-[family-name:var(--font-inter)]">
            <p>
              Founded by <span className="text-white font-semibold">Flora Leong</span>, Keystyle Sartorial brings a unique, multi-disciplinary precision to image strategy. Intelligent styling is the intersection of psychology, color
              theory, and bespoke craftsmanship. We don&apos;t follow trends; we
              observe the architecture of the individual.
            </p>
            <p>
              Our methodology ensures that every garment selected serves a
              tactical purpose in your professional and social ecosystem. It is a
              calculated investment in your personal brand equity.
            </p>
          </div>
          <button className="mt-12 bg-gradient-to-br from-[#E5C374] to-[#C5A55A] text-[#141313] px-12 py-5 font-[family-name:var(--font-manrope)] font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-xl shadow-[#064e3b]/10">
            Discover The Method
          </button>
        </div>
      </div>
    </section>
  );
}
