"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, CheckSquare, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepsEs = [
  {
    num: "1",
    title: "Hablamos por WhatsApp",
    desc: "Nos contás tu idea de forma rápida y directa. Sin reuniones largas ni procesos burocráticos. 100% ágil.",
    icon: MessageCircle,
  },
  {
    num: "2",
    title: "Diseñamos la solución",
    desc: "Creamos un prototipo visual premium pensado en maximizar conversiones y destacar tu marca.",
    icon: PenTool,
  },
  {
    num: "3",
    title: "Revisás y aprobás",
    desc: "Te presentamos el diseño, ajustamos los detalles necesarios y nos das el visto bueno final.",
    icon: CheckSquare,
  },
  {
    num: "4",
    title: "Publicamos",
    desc: "Lanzamos tu sitio ultra-rápido al mercado, optimizado para posicionar y generar resultados.",
    icon: Rocket,
  },
];

const stepsEn = [
  {
    num: "1",
    title: "Chat via WhatsApp",
    desc: "Tell us your idea quickly and directly. No long meetings or bureaucratic processes. 100% agile.",
    icon: MessageCircle,
  },
  {
    num: "2",
    title: "Design the solution",
    desc: "We create a premium visual prototype designed to maximize conversions and highlight your brand.",
    icon: PenTool,
  },
  {
    num: "3",
    title: "Review and approve",
    desc: "We present the design, adjust any necessary details, and you give us the final go-ahead.",
    icon: CheckSquare,
  },
  {
    num: "4",
    title: "We launch",
    desc: "We launch your ultra-fast website to the market, optimized to rank and generate results.",
    icon: Rocket,
  },
];

export default function Process() {
  const { language, t } = useLanguage();
  const steps = language === "es" ? stepsEs : stepsEn;
  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 z-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-accent/5"
          >
            {t("process.badge")}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tight text-foreground"
          >
            {language === "es" ? (
              <>
                ¿Cuánto tarda? Nada.<br />
                En <span className="text-accent">4 pasos</span> online.
              </>
            ) : (
              <>
                How long does it take? Nothing.<br />
                In <span className="text-accent">4 steps</span> online.
              </>
            )}
          </motion.h2>
        </div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group relative w-full h-[350px] md:h-[400px] bg-surface/50 rounded-[2rem] p-8 border border-border-custom/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Large Background Number */}
                <span className="absolute -bottom-10 -right-4 text-[12rem] md:text-[14rem] font-black font-heading text-white/5 z-0 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-accent/10">
                  {step.num}
                </span>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Header / Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 md:mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white shadow-sm">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-2 py-1 rounded-md">
                        {language === "es" ? "Paso" : "Step"} {step.num}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
