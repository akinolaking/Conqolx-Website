import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Approach from "@/components/Approach";
import Products from "@/components/Products";
import InnovationLab from "@/components/InnovationLab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Approach />
        <Products />
        <InnovationLab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
