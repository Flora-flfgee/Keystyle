"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_METADATA } from "@/data/blog-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogModal from "@/components/BlogModal";

export default function DiariesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = useMemo(() => {
    return ["ALL", ...new Set(BLOG_METADATA.map((p) => p.category))];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "ALL") return BLOG_METADATA;
    return BLOG_METADATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const openPost = (slug: string) => {
    setSelectedSlug(slug);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#050706]">
      <Navbar />
      
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24 space-y-6">
            <span className="text-[#E5C374] font-[family-name:var(--font-inter)] font-black uppercase tracking-[0.6em] text-xs">
              THE COMPLETE JOURNAL
            </span>
            <h1 className="text-white font-[family-name:var(--font-manrope)] font-black tracking-widest text-6xl md:text-8xl uppercase">
              DIARIES
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-sm leading-relaxed tracking-wider">
              An archive of sartorial insights, lifestyle guides, and the philosophy behind Keystyle's approach to modern masculinity.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 border-y border-[#064e3b]/20 py-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-[family-name:var(--font-inter)] uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-300 relative pb-2 ${
                  selectedCategory === cat ? "text-[#E5C374]" : "text-white/30 hover:text-white"
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5C374]" />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredPosts.map((post, i) => (
              <div 
                key={i} 
                className="group cursor-pointer flex flex-col items-start h-full"
                onClick={() => openPost(post.slug)}
              >
                <div className="w-full aspect-[16/9] relative overflow-hidden mb-8 border border-[#064e3b]/10 bg-[#0a0c0b]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/80 to-transparent group-hover:from-transparent transition-all duration-500" />
                </div>
                
                <div className="space-y-4 pr-12">
                  <div className="flex items-center gap-3">
                    <span className="text-[#E5C374] font-[family-name:var(--font-inter)] font-bold uppercase tracking-[0.2em] text-[10px]">
                      {post.category}
                    </span>
                    <span className="text-white/20 font-[family-name:var(--font-inter)] uppercase tracking-[0.2em] text-[9px]">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-[family-name:var(--font-manrope)] font-bold text-white uppercase tracking-tight group-hover:text-[#E5C374] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed font-[family-name:var(--font-inter)] line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <BlogModal 
        slug={selectedSlug} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
