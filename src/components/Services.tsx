import Image from "next/image";

const services = [
  {
    label: "CONSULTANCY",
    title: "Personal Styling",
    description:
      "A deep dive into your personal brand. We curate looks that command respect and radiate confidence.",
    image: "/images/services/personal_styling.png",
    offset: false,
  },
  {
    label: "REFINEMENT",
    title: "Wardrobe Edit",
    description:
      "Systematic reorganization and pruning of your current collection. Retaining only what adds value.",
    image: "/images/services/wardrobe_edit.png",
    offset: true,
  },
  {
    label: "CURATED GIFTS",
    title: "Gift Vouchers",
    description:
      "The gift of transformation. Provide the men in your life with a bespoke styling experience.",
    image: "/images/services/gift_vouchers.png",
    offset: false,
  },
  {
    label: "ENTERPRISE",
    title: "Corporate Workshops",
    description:
      "Elevating executive presence across your leadership team through visual communication.",
    image: "/images/services/corporate_workshops.png",
    offset: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0c0b] py-32 px-8 md:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`bg-[#141d1a] group overflow-hidden border border-[#064e3b]/20 transition-all duration-500 hover:border-[#E5C374]/30 ${
                svc.offset ? "lg:mt-12" : ""
              }`}
            >
              <div className="h-72 overflow-hidden relative">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                <span className="text-[#E5C374] font-[family-name:var(--font-inter)] uppercase tracking-widest text-[10px] block mb-2 font-bold">
                  {svc.label}
                </span>
                <h3 className="text-xl font-[family-name:var(--font-manrope)] font-bold text-white mb-4 uppercase tracking-wider">
                  {svc.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-[family-name:var(--font-inter)]">
                  {svc.description}
                </p>
                <button className="text-[#E5C374] border border-[#E5C374]/40 px-6 py-2 text-[10px] font-[family-name:var(--font-manrope)] font-bold uppercase tracking-widest hover:bg-[#E5C374] hover:text-[#141313] transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
