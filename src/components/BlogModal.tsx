"use client";

import { useEffect, useState } from "react";
import BlogContent from "./BlogContent";
import { BlogMeta } from "@/data/blog-metadata";

interface BlogModalProps {
  slug: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ slug, isOpen, onClose }: BlogModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen || !slug) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050706]/95 backdrop-blur-sm transition-all duration-300 px-4 py-8 md:p-12 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-[#0a0c0b] border border-[#064e3b]/30 w-full max-w-4xl min-h-[80vh] relative shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#E5C374] hover:text-white transition-colors z-10 bg-[#050706]/50 p-2 rounded-full border border-[#064e3b]/20 hover:border-[#E5C374]"
        >
          <span className="material-symbols-outlined text-2xl font-bold">close</span>
        </button>

        <div className="p-8 md:p-16 h-full">
          <BlogContent slug={slug} />
        </div>
      </div>
    </div>
  );
}
