import FumigationHero from "@/components/sections/fumigacion/FumigationHero";
import FumigationProblem from "@/components/sections/fumigacion/FumigationProblem";
import FumigationSuccess from "@/components/sections/fumigacion/FumigationSuccess";
import FumigationAutomation from "@/components/sections/fumigacion/FumigationAutomation";
import FumigationPricing from "@/components/sections/fumigacion/FumigationPricing";
import FumigationServices from "@/components/sections/fumigacion/FumigationServices";
import FumigationComparison from "@/components/sections/fumigacion/FumigationComparison";
import FumigationTestimonials from "@/components/sections/fumigacion/FumigationTestimonials";
import FumigationProcess from "@/components/sections/fumigacion/FumigationProcess";
import FumigationFAQ from "@/components/sections/fumigacion/FumigationFAQ";
import FumigationFinalCTA from "@/components/sections/fumigacion/FumigationFinalCTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Diseño Web para Empresas de Fumigación | Angel Design Studio",
  description: "Tu competencia roba clientes mientras tú estás fumigando. Tu agencia captando clientes locales en 7 días sin que tengas que soltar la mochila.",
};

export default function FumigacionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FumigationHero />
      <FumigationProblem />
      <FumigationSuccess />
      <FumigationAutomation />
      <FumigationPricing />
      <FumigationServices />
      <FumigationComparison />
      <FumigationTestimonials />
      <FumigationProcess />
      <FumigationFAQ />
      <FumigationFinalCTA />
      <Footer />
    </main>
  );
}
