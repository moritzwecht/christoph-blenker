import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Samples from "@/components/Samples";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Discography from "@/components/Discography";
import Teaching from "@/components/Teaching";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroBackground />
      <Navigation />

      <Hero />

      <About />

      <Projects />

      <Samples />

      <Discography />

      <Gallery />

      <Teaching />

      <Footer />
    </main>
  );
}
