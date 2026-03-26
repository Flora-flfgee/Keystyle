import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import DiariesSection from "@/components/DiariesSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Quote />
      <Services />
      <Testimonials />
      <About />
      <DiariesSection />
      <InstagramSection />
      <Footer />
    </>
  );
}
