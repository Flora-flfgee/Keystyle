import { getBlogComponent } from "@/data/blog-registry";
import { useMemo } from "react";

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  const Content = useMemo(() => {
    return getBlogComponent(slug);
  }, [slug]);

  if (!Content) {
    return (
      <div className="text-center py-24 text-white/50 font-[family-name:var(--font-inter)]">
        Article Not Found.
      </div>
    );
  }

  return (
    <div className="prose prose-invert prose-gold max-w-none font-[family-name:var(--font-inter)] py-12">
      <Content />
      
      <style jsx global>{`
        .prose h1 {
          font-family: var(--font-manrope);
          font-weight: 800;
          letter-spacing: -0.025em;
          text-transform: uppercase;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #E5C374;
          text-align: center;
        }
        .prose h2 {
          font-family: var(--font-manrope);
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          line-height: 1.75;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }
        .prose ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .prose li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
        }
        .prose li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #E5C374;
        }
      `}</style>
    </div>
  );
}
