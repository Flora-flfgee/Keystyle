import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData = {
  "personal-styling": {
    label: "CONSULTANCY",
    title: "Personal Styling",
    description: "A deep dive into your personal brand. We curate looks that command respect and radiate confidence.",
    longDescription: [
      "Our Personal Styling service is more than just picking out clothes; it's about defining your professional and personal identity. We work closely with you to understand your goals, lifestyle, and unique body type.",
      "Whether you're preparing for a high-stakes meeting, a public appearance, or simply want to elevate your everyday presence, our bespoke approach ensures you project the right message at all times.",
      "We handle everything from wardrobe curation to accessories, ensuring a cohesive and sophisticated look that remains authentically you."
    ],
    image: "/images/services/personal_styling_v2.png",
    benefits: ["Bespoke Curation", "Confidence Building", "Efficient Shopping", "Long-term Style Strategy"]
  },
  "wardrobe-edit": {
    label: "REFINEMENT",
    title: "Wardrobe Edit",
    description: "Systematic reorganization and pruning of your current collection. Retaining only what adds value.",
    longDescription: [
      "The Wardrobe Edit is a foundational step in your style transformation. We meticulously assess every item in your current collection, keeping only those that fit perfectly, complement your style, and serve a clear purpose.",
      "By removing the clutter and identifying the gaps, we create a streamlined wardrobe that makes dressing for any occasion effortless and enjoyable.",
      "This service also includes expert advice on garment care and organization, ensuring your investments last for years to come."
    ],
    image: "/images/services/wardrobe_edit_v2.png",
    benefits: ["Clutter Removal", "Wardrobe Organization", "Style Gap Analysis", "Simplified Morning Routine"]
  },
  "gift-vouchers": {
    label: "CURATED GIFTS",
    title: "Gift Vouchers",
    description: "The gift of transformation. Provide the men in your life with a bespoke styling experience.",
    longDescription: [
      "Give the gift of confidence and style with a Keystyle Gift Voucher. Perfect for birthdays, milestones, or as a thoughtful gesture for the distinguished men in your life.",
      "Our vouchers can be applied to any of our bespoke services, offering the recipient a professional makeover experience tailored to their specific needs.",
      "It's more than a gift; it's an investment in their personal and professional success."
    ],
    image: "/images/services/gift_vouchers_v2.png",
    benefits: ["Thoughtful Gifting", "Customizable Experience", "Professional Guidance", "Lasting Impact"]
  },
  "corporate-workshops": {
    label: "ENTERPRISE",
    title: "Corporate Workshops",
    description: "Elevating executive presence across your leadership team through visual communication.",
    longDescription: [
      "Visual communication is a key component of leadership. Our Corporate Workshops are designed to help your team project authority, credibility, and approachable professionalism through their attire.",
      "We provide tailored sessions for executive teams and emerging leaders, focusing on the principles of 'Intelligent Styling' in a corporate context.",
      "Enhance your organization's brand identity by aligning your team's visual presence with your corporate values."
    ],
    image: "/images/services/corporate_workshops_v2.png",
    benefits: ["Executive Presence", "Brand Alignment", "Team Cohesion", "Practical Styling Skills"]
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#0a0c0b] min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0c0b]" />
        </div>
        
        <div className="relative z-10 text-center px-8">
          <span className="text-[#E5C374] font-[family-name:var(--font-inter)] uppercase tracking-[0.5em] text-xs font-bold block mb-4 animate-fadeIn">
            {service.label}
          </span>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-manrope)] font-extrabold uppercase tracking-tight mb-6 animate-slideUp">
            {service.title}
          </h1>
          <div className="w-24 h-1 bg-[#E5C374] mx-auto opacity-80" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-[family-name:var(--font-manrope)] font-bold text-[#E5C374] uppercase tracking-wide">
              The Essence of {service.title}
            </h2>
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-white/80 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                {para}
              </p>
            ))}
            
            <div className="pt-8">
               <button className="group relative bg-[#E5C374] text-[#0a0c0b] px-12 py-5 font-[family-name:var(--font-manrope)] font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,195,116,0.2)]">
                <span className="relative z-10">Inquire About This Service</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>

          <div className="bg-[#141d1a] p-10 border border-[#064e3b]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C374]/5 -rotate-45 translate-x-16 -translate-y-16" />
            <h3 className="text-xl font-[family-name:var(--font-manrope)] font-bold text-white mb-8 uppercase tracking-widest border-b border-[#E5C374]/20 pb-4">
              Executive Benefits
            </h3>
            <ul className="space-y-6">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-white/90 font-[family-name:var(--font-inter)]">
                  <span className="w-2 h-2 bg-[#E5C374] rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div className="mt-12 p-6 border border-[#E5C374]/10 bg-black/20 italic text-white/60 text-sm">
              "Style is a way to say who you are without having to speak."
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="py-12 border-t border-white/5 flex justify-center">
        <Link 
          href="/#services" 
          className="flex items-center gap-4 text-white/40 hover:text-[#E5C374] transition-colors uppercase tracking-[0.3em] text-xs group"
        >
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-x-2">arrow_back</span>
          Return to services
        </Link>
      </div>

      <Footer />
    </main>
  );
}
