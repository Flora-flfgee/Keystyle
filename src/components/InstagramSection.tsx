import Image from "next/image";

const instagramImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCoVodCj56KtseenXokQjkoaPtmyoz-ZOiIwG2iHN8HoNTwTCZV2AS1Qt4xOFCgsRGr4CONXXXgWBd04wYQyiS1Ro4_i96fdtlra9qLHq4g52zVwOExjZwK69aILQ8hfTyDd_gfgf3h0O6CU4iTOBhryOIRjBFkDGScBjWJNR6DN1cJAwxDcWnblvWXeo0-DGf6S3ZfprWZPdW-w0Aopj4Xe6b7QvNrmHqtLmiU0fdCsHnxh_ze2-lGYbOau4D6R3b1bn8fenGlzqI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpuXSqXU68bv7VrAhNABcS-BUDC4eqUxxVFgn_o8IpFpaR1A7gXORtF_FzRFFw6i06tehONL50eI1KM9E-vUtWOcHvfAfc6fpZ7JL6PY7nAsOuqk4k6sBUSBe-H1Ysw3U0H6cFlAz95Wx1pJ09TwDAKAga8ByGtgoo3Tvy35p1790e6a2ULjdMlQa8f_i2y4eM4XwcWzU97pBP6HSCr_6-YD5pzn3cAa1TGOPkJ0fUiLzAgw3i3yPWXe5mp8eis6JTUv_jXlHsAqg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkI35J8Ref0WDLMp2J_STw_vNrF84fpRPrxCx0cQmKTqstlQGiqtPcpIBLshIeaavZNZA11Fmi8TvXq3gm51xGszN5ZnIjaLnQZEGvTuaF1MaElpmGq-22HYQyEhTlkn8FGbrAy_j21XSnXF6cp7xjt0vFohNP2u1qjjtfpyTabq4MjBx8131rgyyCYLC0hwVEjmlQ1bhHM-CBP6HKc6OGpZprRopxLVkEhrjqV9Cx52qS2OKBMfrpQpcu4VqZkmsBTXlvJqdqnUc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5d2Qowzc2GfeshRurM_RQucGo1m1lrZBcu9XUPZ_N1f7jVESgoJw-m68YBJA1I7uNHMtHxIbKPXA3bivnHJloeVeI5Jun1S1k_mzRAy2e_gVJlZfl-UfAn6yErG80KoHGH4oA7s2uKAIjm2Y4f19JWG1IPt4Sb6hN3-SgdZXFLR9Mr3TzUTFSenA-m2vrZcKfSHBmoNVsxn3W7bjnNBme-GfqWRKdYnWsSiaJG9opKqxN4_HMm13HZbP2TJcNqpdvhGTh3c6F5Wc",
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-[#050706] py-32 px-8">
      <div className="max-w-screen-2xl mx-auto">
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
            @KEYSTYLE_SARTORIAL <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">north_east</span>
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
                className="object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
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
