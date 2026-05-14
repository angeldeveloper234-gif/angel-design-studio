"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Bug, Zap } from "lucide-react";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import FumigationOnboardingModal from "./FumigationOnboardingModal";

export default function FumigationHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappLink = useWhatsAppLink("¡Hola! Vi el ejemplo real de la web para fumigadoras y me interesa saber más.");

  return (
    <section className="relative min-h-[90vh] w-full bg-background overflow-hidden font-sans pt-20 flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 py-24 flex flex-col items-center text-center relative z-10">
        {/* Left Content */}
        <div className="z-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center flex-wrap gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 font-bold text-xs md:text-sm tracking-widest uppercase text-center"
          >
            <ShieldCheck size={16} className="shrink-0" /> <span className="max-w-[280px] md:max-w-none">Especialistas en el sector de Fumigación</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em] text-foreground mb-8 md:mb-16 max-w-full lg:max-w-[25ch] mx-auto break-words"
          >
            Google Maps ya te manda clientes. Sin página web, esos clientes terminan <br className="hidden md:block" />
            <span className="text-accent relative inline-block">
              llamando a tu competencia
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-xl text-foreground/80 mb-8 md:mb-12 max-w-2xl px-2 leading-relaxed"
          >
            Muchos negocios de fumigación reciben consultas por Google Maps sin darse cuenta. Pero cuando ese cliente quiere saber más de tu servicio, busca tu nombre en Google. Si no encuentra una página profesional, le marca al que sí tiene. Nosotros construimos esa página en 3 a 7 días.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 md:mb-16 w-full px-4 md:px-0 max-w-[320px] md:max-w-none mx-auto"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center bg-accent text-background px-6 py-3 md:pl-8 md:pr-2 md:py-2 rounded-full font-black text-sm md:text-xl transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-accent/20 cursor-pointer border border-accent w-full md:w-auto"
            >
              <span className="mr-3 md:mr-6">Quiero Ver un Ejemplo Real</span>
              <div className="bg-background rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-accent border border-accent/20 shrink-0">
                <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 md:w-6 md:h-6" />
              </div>
            </a>
            <a
              href="#pricing"
              className="bg-transparent border-2 border-foreground text-foreground px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-foreground hover:text-background active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 group w-full md:w-auto"
            >
              Ver Planes y Precios <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-foreground/10 pt-8 w-full max-w-3xl"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl md:text-3xl font-black text-accent">90%</span>
              <span className="text-xs md:text-sm text-secondary font-bold uppercase tracking-widest mt-1">en móviles</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl md:text-3xl font-black text-accent">24/7</span>
              <span className="text-xs md:text-sm text-secondary font-bold uppercase tracking-widest mt-1">atención automática</span>
            </div>
            <div className="hidden md:flex flex-col items-center text-center">
              <span className="text-2xl md:text-3xl font-black text-accent">3 a 7</span>
              <span className="text-xs md:text-sm text-secondary font-bold uppercase tracking-widest mt-1">días hábiles</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-l from-accent/5 to-transparent -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -z-10" />

      <FumigationOnboardingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
