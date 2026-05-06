import Hero from "@/components/sections/Hero";
import NicheBand from "@/components/sections/NicheBand";
import MarketProblem from "@/components/sections/MarketProblem";
import Comparison from "@/components/sections/Comparison";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <NicheBand />
      <MarketProblem />
      <Comparison />
      <Services />
      <Projects />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
