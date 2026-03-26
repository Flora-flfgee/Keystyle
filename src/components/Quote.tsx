export default function Quote() {
  return (
    <section
      id="quote"
      className="relative h-[614px] flex items-center justify-center text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzJKUWMtvdYkIfR3sykHURfifK_vyEfBn4l_vBLT2TJ8NRFBCC1STkwveOoCVmgTENRyNQlB8elhmtY_yjPpYlagZ-yh7err31tKyx3MbHvr0vMiDCE_i0BvQpkbeCGvN0-G5CY_bMRgCDQoELy6J5sZkGuGu6r4vjDwazrmtVwT5VzwCnbeOMaCYCuK2muiLLZLztTDmA7kj3pyrBOXLqcP39EcDYZZp6V4dzlO8Oz5BL0ZgeL3C3gqwBCHblU_OaVy44qodhcj0')`,
        }}
      />
      <div className="absolute inset-0 bg-[#042f2e]/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0b] via-transparent to-[#0a0c0b]" />
      <div className="relative z-10 px-8 max-w-4xl">
        <div className="w-20 h-[1px] bg-[#E5C374] mx-auto mb-10" />
        <p className="text-2xl md:text-4xl font-[family-name:var(--font-manrope)] italic text-white leading-relaxed">
          &ldquo;Style is a way to say who you are without having to
          speak.&rdquo;
        </p>
        <div className="w-20 h-[1px] bg-[#E5C374] mx-auto mt-10" />
      </div>
    </section>
  );
}
