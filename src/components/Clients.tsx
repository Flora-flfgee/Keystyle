import Image from "next/image";

const logos = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSe5iCuGEKNpXHiScPNoUx8tP0EVtQVcBejFJw5_4nsIQ7QtnQpTCaqWWxaIJHGcvDrzGVCZccgCw9McWMz_UguInckECL_d_gKWB_xi-WP6jPzwlJWzQBpEh9bJZ4XRAw5pX0zdw5PLydEthdBq6jiESRH0O7wJ-zyedyxN3klVrUtfs0U8IazuSBqWb3gfSiNUU3I_AB35MkRe-0bsXBEAKZeF4SYaGU6nVEPgrORVBzq83euNx591AcJxpjUSUeJygD1KprK4w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1-DpgeQose8FwLWhHjr1hwtvoBHZGE0bdbJyxMTpSCDrjtvdtl4cpU52quOIlazJcRGC9VQe4QdW4Xcq0aXAtut2EzrRjjszZ8YgampyzlSJr69ARTdqpI9M1YNrGmvqoMazNMk0b9s_RAmc1VnqF-w4finGnbZwcBeADBy0NClr37Ef2SqEhG0RcmcxUAc-fSX7hJQLZNrhKFQlU4VJ0WWoajKqf0ViwRPZ_cK_4IHYdg0o7uhh8mmZG-T1nlYoadqIDjtEhq4M",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCGi8Uj5lEXNIZL45nBo9F0bF5P7HuoIeiMkFv8x6vzg66jjEgRKZOw_CJmb6llKvHIC5JZvfogO4HYS9b2bsH_m6E9uZYjHzNkOv6FdoOsfEJ8tyA3Y82rMd5bOiX5gQdO313QJKg3axb9fpbx1ehjkV1KosmhL823bG4Uiirm9tFmelulonFq_9DCszvu9BoRhT-F0J_0DvMbCKubanuNwCzXUSWdKWeS1uTRvrd9vAZ0a9m1M8cdIi2RG3in2ltvow8A-PmXIt4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDYXkT7rlIRiXth93pU4Hur5mzvhUu5Vwlj5Z-r15K_hBVQTbPnbJzs-Amg_vjGYOLb0sSo7vVy8ERUtB0f6EbbTDCXm9Y98LY-Sgc87g4mbVFFRFBKWAj1TeiBOuR-gV2fCo5dTebad6aBPQ4Xgch3jSM-ZNdfkWvnwFQ_qK-bgCWeK46c0cW9y21KhqAJMceLVXS4P1BrjYptioiL7KjYbOZtSM374uQUPvZJTDDgZ0GDOEK7oHCOIQ95yDtZmdC18Oi3FBYwmpc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcH8uoFBZOxtYpXtlcbp2oDy6H46jU-KEJtUcQar5vNu51akwmOf0ExkUdlqrblQODpBWynIHYQ7dM4lsImcf4ywkRg1I_MHRsvxoUycMgbrpchfY-xAWUKk7JOpMTCrqb8SRQ4bQQmifhJK8c2IlQmay3wyVivExWwSoXFlSkpz8EUpw9lKeugCtaz_i-VGbtzzbiII0yI84OlGWt2Fc4eNUpCrE-_aUAcit9g3qRBy_7KQ7yaf-Objf7uMJkbtTn91_wNeUxD7o",
];

export default function Clients() {
  return (
    <section className="bg-[#0a0c0b] py-24 px-8 border-y border-[#064e3b]/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#E5C374] font-[family-name:var(--font-manrope)] uppercase tracking-[0.4em] text-center text-xs mb-16 font-bold">
          TRUSTED BY LEADING BRANDS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-40 grayscale contrast-150">
          {logos.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Client Logo ${i + 1}`}
              width={200}
              height={40}
              className="h-8 w-auto object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
