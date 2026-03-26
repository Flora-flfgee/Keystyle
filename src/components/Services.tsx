import Image from "next/image";

const services = [
  {
    label: "CONSULTANCY",
    title: "Personal Styling",
    description:
      "A deep dive into your personal brand. We curate looks that command respect and radiate confidence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArNJFlP6ytOgvxIzZNihGJuaMgHj_pyTXs44IL2d9h37OSsEnYUnkPqKzgtISWRyw0KbYtswxelN3lFffU9R8njapj6tyDrbwIBVGp_0wfdMsag0tLeeVHKle6XgSwXU2G4rDyb3liiQvZLfbtOA8lVFlj9NhU1ygD8tmt7-ML46w5WLpryYmvhS2nBkGGIzP8Ze8Ybxqppnw0wW2yahvMS7ajDehl3We1x44M4YRwbd9dmxJdH-4kfUqcq0AkXDWmNVmuofB5KDg",
    offset: false,
  },
  {
    label: "REFINEMENT",
    title: "Wardrobe Edit",
    description:
      "Systematic reorganization and pruning of your current collection. Retaining only what adds value.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf01T9ETP0pSwBDkCxbYBWMlDpj0EalVG0EuxVcxZmunvWClyOXFvdVeY1Hg8gA4N51FNtEoxhiujyDbYPvnjvNEuc5xpNU5Zo9wxLTSxhqHnNGbE7Itp0sz7bdJzuTfPgSU53efCAfOs2-JS0S9AVgMskayZNKSZOiXBIoXR9kpJfH_qVrzgEMFvU2p-jgiMVPc9McgmZbswWuAL72JEGC97y2pfzKYwiZY7hZfW_055oZRtX-5I0Ya4pVpzAHrQnXfUdlW64-tY",
    offset: true,
  },
  {
    label: "CURATED GIFTS",
    title: "Gift Vouchers",
    description:
      "The gift of transformation. Provide the men in your life with a bespoke styling experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6F5X0P48ma8L82cwKMgYzUDzxTOACliNXKghxekjS4iEt2PyFROVFrHZGE12C0_DJJsN6BMzhZrH8rOvQehGLiqYuG-zcemE-nodxWxaWSXkltnX5APATutMFkva-2UXg-orG_ipVEwRtywPkX95GtqfVX7pG68C9N8293THBuawiR-71p2vwSqCuZHKKfsvfu5Jn0Q1Q98bXVc49IiLJCCm3iUBzqqdc60Pa8T7GpWuA15DRi_ZsX9gWbWfHYe0uV1wuYyujYOI",
    offset: false,
  },
  {
    label: "ENTERPRISE",
    title: "Corporate Workshops",
    description:
      "Elevating executive presence across your leadership team through visual communication.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhz6H4SWXT7_V3EhzJzeD0d7HcXH16MnQOAUUkDl5DTX1_CBe7Mxqu1h0hqUvsVW8XQsrsyjrHjxSoBu2PPUJWPIuA5n-Dhf3lhkWafcdxCE4EJd19mTwyHOI9-jld86H7Kxwi9QnKSzYzOieGrv6Hdth-ak1y1jsoGR08s2pNbV_EwzEnVxN966ZTtWjikV3Y65LsAZ3QGyojSRx4nhRCXdH0uE_gFMFP9I3R23MJSbVmqStv8X4ZtZWT5fadzm2Hzj8aqOIDb2s",
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
