import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0c0b] py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 w-full relative">
          <div className="absolute -inset-10 border border-[#064e3b]/20 -z-0" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu3XnIu8kZnm313LNAhq3bcANsmtjmJMpqUmE0ixljRWqXdPYfxG4GZG8ULv5DTXSD9A_9XEnLTTiK5ALhiiO2cf-96E_-KFBYserFNlqnETM2J3DNSM7wTCF6O_tY3wBiN5zJBFFb52_VbMLKDRbqg9EozwXqxkhMDf9wpOeBn54t5yNkZt1B8jog2ouZ3o4KHfJnnx4MHKgu_r8WpCSZq8ggHqvsGIGlcoyHk42407rSHyZ60nJwN31BR39mRkAtEOadVUpyoRA"
            alt="Tailoring details"
            width={800}
            height={600}
            className="w-full grayscale brightness-75 relative z-10 border border-[#064e3b]/30"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-manrope)] font-black text-white mb-8 uppercase tracking-tighter">
            WHAT IS <span className="text-[#E5C374]">INTELLIGENT</span>{" "}
            STYLING?
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-[family-name:var(--font-inter)]">
            <p>
              Intelligent styling is the intersection of psychology, color
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
