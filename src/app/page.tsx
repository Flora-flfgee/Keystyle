import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Journal from "@/components/Journal";
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
      <Methodology />
      <Journal />
      <InstagramSection />
      <Footer />
    </>
  );
}
