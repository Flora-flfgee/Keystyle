import Image from "next/image";

const instagramImages = [
  "/images/instagram/ig_1.png",
  "/images/instagram/ig_2.png",
  "/images/instagram/ig_3.png",
  "/images/instagram/ig_4.png",
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-[#0a0c0b] py-32 px-8 relative overflow-hidden">
      <div className="emerald-gradient-overlay absolute inset-0 opacity-40 pointer-events-none" />
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16 border-b border-[#064e3b]/20 pb-12">
          <div className="space-y-4">
            <span className="text-[#E5C374] font-[family-name:var(--font-inter)] font-black uppercase tracking-[0.4em] text-xs">
              SARTORIAL VISION
            </span>
            <h2 className="text-white font-[family-name:var(--font-manrope)] font-black tracking-widest text-4xl md:text-5xl uppercase">
              FOLLOW US
            </h2>
          </div>
          <a
            href="#"
            className="text-[#E5C374]/60 font-[family-name:var(--font-inter)] uppercase tracking-widest text-[11px] hover:text-[#E5C374] transition-all border-b border-[#E5C374]/30 pb-2 flex items-center gap-2 group"
          >
            @KEYSTYLE <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">north_east</span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {instagramImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square relative group overflow-hidden border border-[#064e3b]/10 bg-[#0a0c0b]"
            >
              <Image
                src={src}
                alt={`Instagram ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#050706]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl font-bold">
                  add
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
