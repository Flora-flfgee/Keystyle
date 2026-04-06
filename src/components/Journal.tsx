"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_METADATA } from "@/data/blog-metadata";
import BlogModal from "./BlogModal";

export default function Journal() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts = BLOG_METADATA.slice(0, 3); // Showing 3 posts as requested

  const openPost = (slug: string) => {
    setSelectedSlug(slug);
    setIsModalOpen(true);
  };

  return (
    <section id="blog" className="bg-[#050706] py-32 px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#064e3b]/30 pb-12">
          <div className="space-y-4">
            <span className="text-[#E5C374] font-[family-name:var(--font-inter)] font-black uppercase tracking-[0.4em] text-xs">
              THE SARTORIAL
            </span>
            <h2 className="text-white font-[family-name:var(--font-manrope)] font-black tracking-widest text-4xl md:text-5xl uppercase">
              JOURNAL
            </h2>
          </div>
          <Link
            href="/journal" 
            className="text-[#E5C374]/60 font-[family-name:var(--font-inter)] uppercase tracking-widest text-[11px] hover:text-[#E5C374] transition-all border-b border-[#E5C374]/30 pb-2 flex items-center gap-2 group"
          >
            VIEW ALL ARTICLES <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div 
              key={i} 
              className="group cursor-pointer flex flex-col items-start h-full"
              onClick={() => openPost(post.slug)}
            >
              <div className="w-full aspect-[4/5] relative overflow-hidden mb-8 border border-[#064e3b]/10 bg-[#0a0c0b]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#050706]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#E5C374] font-[family-name:var(--font-inter)] font-bold uppercase tracking-[0.2em] text-[10px]">
                    {post.category} 
                  </span>
                  <span className="w-8 h-[1px] bg-[#064e3b]/50" />
                  <span className="text-white/40 font-[family-name:var(--font-inter)] uppercase tracking-[0.2em] text-[9px]">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-[family-name:var(--font-manrope)] font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#E5C374] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-white/50 text-xs leading-relaxed font-[family-name:var(--font-inter)] line-clamp-2 pr-8">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-3 text-[#E5C374]/70 uppercase tracking-widest text-[9px] font-bold group-hover:text-[#E5C374] transition-colors">
                 READ ARTICLE <span className="w-6 h-[1px] bg-[#E5C374]/30 group-hover:w-10 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BlogModal 
        slug={selectedSlug} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
