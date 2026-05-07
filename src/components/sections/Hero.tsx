"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden font-sans pt-20">
      <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-8 flex flex-col items-center text-center relative z-10 min-h-[800px]">
        {/* Left Content */}
        <div className="z-20 flex flex-col items-center min-h-[400px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-[-0.04em] text-foreground mb-16 max-w-[15ch] lg:max-w-[25ch] mx-auto"
          >
            Sitios web que hacen <span className="text-accent">crecer</span> negocios en México
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl"
          >
            Diseño moderno, entrega rápida y resultados reales. <br className="hidden md:block" />
            Sin plantillas genéricas. Sin esperas de semanas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8 md:mb-16"
          >
            <a
              href="https://wa.me/543873529421"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center bg-accent text-background pl-8 pr-2 py-2 rounded-full font-heading font-black text-xl transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-accent/20 cursor-pointer border border-accent"
            >
              <span className="mr-6">Quiero mi sitio web</span>
              <div className="bg-background rounded-full w-12 h-12 flex items-center justify-center text-accent border border-accent/20">
                <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </a>
            <a
              href="#projects"
              className="bg-transparent border-2 border-foreground text-foreground px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-foreground hover:text-background active:scale-95 transition-all cursor-pointer flex items-center gap-2 group"
            >
              Ver proyectos <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>


        </div>



        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl mx-auto mt-0 md:mt-4 -mb-12 md:-mb-48 group min-h-[300px] md:min-h-[600px]"
        >
          <div className="relative rounded-t-[4rem] overflow-hidden ">
            <Image
              src="/mockup-adaptado-afinity.png"
              alt="Mockup premium de sitios web diseñados por Angel Design Studio"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto object-cover opacity-95 group-hover:scale-[1.01] transition-transform duration-1000"
            />
            {/* Strong Gradient Overlay to hide bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Enhanced Glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-full bg-accent/20 rounded-full blur-[140px] -z-10" />
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-l from-accent/5 to-transparent -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -z-10" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-accent/10 rounded-full blur-[160px] -z-10" />
    </section>
  );
}
