import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BiggerPicture from "@/components/BiggerPicture";
import Approach from "@/components/Approach";
import Products from "@/components/Products";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BiggerPicture />
        <Approach />
        <Products />
        <Vision />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
