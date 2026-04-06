import Image from "next/image";

const socialLinks = [
  { label: "INSTAGRAM", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "YOUTUBE", href: "#" },
  { label: "LEAVE A REVIEW", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050706] py-24 px-8 md:px-12 w-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative border-t border-[#064e3b]/30">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-0 mb-4">
          <Image 
            src="/logo/logo.png" 
            alt="Keystyle Logo" 
            width={64} 
            height={64} 
            className="w-16 h-16 object-contain"
          />
          <div className="text-[#E5C374] font-black tracking-tighter text-3xl font-[family-name:var(--font-manrope)] uppercase mt-2 -ml-1">
            EYSTYLE
          </div>
        </div>
        <p className="text-gray-500 font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} KEYSTYLE SARTORIAL. ALL RIGHTS
          RESERVED.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-400 hover:text-[#E5C374] transition-all duration-500 font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase font-semibold"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="bg-gradient-to-br from-[#E5C374] to-[#C5A55A] text-[#141313] px-10 py-4 uppercase font-bold text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,78,59,0.3)]">
        STAY UPDATED
      </button>
    </footer>
  );
}
