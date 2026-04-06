"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

const particles = [
  { top: "10%", left: "20%", size: 4, delay: 0 },
  { top: "40%", left: "60%", size: 2, delay: 2 },
  { top: "70%", left: "30%", size: 6, delay: 4 },
  { top: "20%", left: "80%", size: 3, delay: 1 },
  { top: "85%", left: "75%", size: 5, delay: 5 },
  { top: "55%", left: "15%", size: 2, delay: 3 },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Parallax effects for background text
  const xKey = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const xStyle = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const opacityKey = useTransform(scrollYProgress, [0, 0.3], [0.15, 0.08]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY1 = useSpring(y1, springConfig);
  const springY2 = useSpring(y2, springConfig);

  const headingWords = "EXPERT MENSWEAR STYLING FOR HIGH-PROFILE MEN AND EXECUTIVES.".split(" ");

  return (
    <>
      <section 
      ref={containerRef}
      style={{ position: "relative" }}
      className="relative min-h-screen bg-[#0a0c0b] pt-32 pb-24 px-8 md:px-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden"
    >
      {/* Background Video and Filter Layer */}
      <motion.div style={{ opacity }} className="absolute inset-0 z-0 overflow-hidden">
        {/* The deepest layer: Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero_video/herovideo.mp4" type="video/mp4" />
        </video>
        
        {/* The Filter Shade Overlay */}
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0c0b]" />
        <div className="emerald-gradient-overlay absolute inset-0 opacity-40" />

        {/* Subtle Particles on top of video */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 z-[1] select-none pointer-events-none overflow-hidden ">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-14 -left-10"
        >
          <motion.span 
            style={{ x: xKey, opacity: opacityKey }}
            className="text-[200px] md:text-[350px] font-black tracking-tighter text-[#E5C374] whitespace-nowrap leading-none select-none italic block"
          >
            KEY
          </motion.span>
        </motion.div>
        
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-14 -right-10"
        >
          <motion.span 
            style={{ x: xStyle, opacity: opacityKey }}
            className="text-[200px] md:text-[350px] font-black tracking-tighter text-[#E5C374] whitespace-nowrap leading-none select-none italic block"
          >
            STYLE.
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className="flex-1 z-10"
        style={{ y: springY2 }}
      >
        <motion.p 
          className="text-[#E5C374] font-[family-name:var(--font-manrope)] uppercase tracking-[0.3em] mb-4 text-sm font-semibold inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Your Style, Unlocked
        </motion.p>
        
        <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-manrope)] font-extrabold text-white leading-tight uppercase tracking-tight mb-8">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.2em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 2.2 + (i * 0.05),
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className={word === "MEN" ? "text-[#E5C374]" : ""}>{word}</span>
            </motion.span>
          ))}
        </h1>

        <motion.p 
          className="text-on-surface-variant max-w-xl mb-12 text-lg leading-relaxed font-[family-name:var(--font-inter)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Redefining the modern professional wardrobe through bespoke curation
          and sartorial intelligence. We create identities, not just outfits.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-br from-[#E5C374] to-[#C5A55A] text-[#141313] px-10 py-5 font-[family-name:var(--font-manrope)] font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Book your consultation</span>
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              initial={false}
            />
          </motion.button>
          
          <motion.a
            href="#"
            className="flex items-center gap-3 text-white font-[family-name:var(--font-manrope)] uppercase tracking-widest text-xs hover:text-[#E5C374] transition-colors group"
            whileHover={{ x: 5 }}
          >
            Download Press Pack
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              download
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Portrait */}
      <motion.div 
        className="flex-1 relative z-10"
        style={{ y: springY1, scale }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
      >
        <motion.div 
          className="absolute -inset-4 border border-[#064e3b]/40"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: 1,
            translateY: [16, 24, 16],
            translateX: [16, 10, 16]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <div className="relative overflow-hidden group">
          <Image
            src="/images/hero_bw.png"
            alt="Professional man in a bespoke tailored suit"
            width={800}
            height={1000}
            className="w-full grayscale contrast-125 brightness-90 shadow-2xl border border-white/5 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            priority
          />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-[#0a0c0b] via-transparent to-transparent opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1 }}
            />
            {/* Play Button Overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="group/play flex flex-col items-center gap-4 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover/play:border-[#E5C374]/50 group-hover/play:bg-[#E5C374]/10">
                   <Play className="w-8 h-8 text-[#E5C374] fill-[#E5C374]/20 absolute z-10 transition-transform duration-500 group-hover/play:scale-110" />
                   {/* Pulse Effect */}
                   <motion.div 
                     className="absolute inset-0 border-2 border-[#E5C374] rounded-full"
                     animate={{ scale: [1, 1.5, 1], opacity: [0, 0.3, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                </div>
                <span className="text-white/70 text-[10px] uppercase tracking-[0.4em] font-medium transition-colors duration-500 group-hover/play:text-[#E5C374]">Play Film</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0c0b]/95 backdrop-blur-xl p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(4,47,46,0.3)] bg-black"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white group"
              >
                <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
              </button>

              {/* Video Player */}
              <video 
                src="/video/Ping_Bw.mp4"
                className="w-full h-full object-contain"
                autoPlay
                controls
                playsInline
              />
            </motion.div>

            {/* Background Branding Elements */}
            <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
              <span className="text-4xl font-black text-[#E5C374] italic tracking-tighter">KEYSTYLE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
