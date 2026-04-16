import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Insurances from "@/components/Insurances";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Insurances />
      <Cta />
      <Footer />
    </main>
  );
}
