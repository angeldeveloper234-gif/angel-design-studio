"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function FumigationComparison() {
  const comparisonItems = [
    {
      feature: "Cuando alguien te busca en Google",
      us: "Encuentra tu sitio con servicios, zonas y contacto directo.",
      others: "No apareces. El cliente llama al que sí tiene página.",
    },
    {
      feature: "Consultas de Google Maps",
      us: "El cliente ve tu perfil, entra a tu web y te contacta informado.",
      others: "El cliente ve tu perfil, busca más info, no te encuentra y se va.",
    },
    {
      feature: "Fuera de horario",
      us: "Tu página sigue recibiendo consultas con formulario o WhatsApp.",
      others: "Pierdes cada llamada que entra mientras estás en campo.",
    },
    {
      feature: "Credibilidad ante empresas",
      us: "Sitio profesional con certificaciones y correo corporativo.",
      others: '"Mándame WhatsApp" desde un número personal.',
    },
    {
      feature: "Cotizaciones",
      us: "El cliente ya llega filtrado por zona y tipo de servicio.",
      others: "Cada lead es manual: preguntar plaga, zona, disponibilidad.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            La diferencia entre tener página web y <span className="text-accent">no tenerla</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-[1fr_1.5fr_1.5fr] items-center mb-4">
            <div className="px-6 text-secondary uppercase tracking-[0.2em] text-[10px] font-black">Criterio</div>
            <div className="px-6 py-4 bg-accent/5 border-x border-t border-accent/20 rounded-t-[2rem] text-center">
              <span className="text-accent text-xl font-black">Con página web profesional</span>
            </div>
            <div className="px-6 text-center text-secondary/30 font-bold uppercase tracking-widest text-[10px]">Sin página web</div>
          </div>

          {/* Comparison Rows */}
          <div className="flex flex-col gap-8 md:gap-0">
            {comparisonItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.5fr] items-stretch group"
              >
                {/* Feature Title - Full width on mobile, left on desktop */}
                <div className="py-4 md:py-8 md:px-6 flex items-center justify-center md:justify-start border-b border-foreground/5 md:border-b-0 font-black md:font-bold text-foreground group-hover:text-accent transition-colors text-center md:text-left bg-surface/10 md:bg-transparent rounded-t-2xl md:rounded-none">
                  {item.feature}
                </div>

                {/* Angel Design Column */}
                <div className="py-6 px-6 md:px-8 bg-accent/5 md:border-x border-x md:border-b border-accent/20 border-b-0 flex flex-col md:flex-row items-center justify-center gap-4 text-center relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/40 relative z-10">
                    <Check className="text-background w-5 h-5 stroke-[3px]" />
                  </div>
                  <span className="text-foreground font-bold text-base md:text-lg relative z-10 leading-snug">
                    {item.us}
                  </span>
                  {/* Subtle mobile indicator */}
                  <div className="md:hidden absolute top-2 right-4 text-[8px] font-black text-accent/30 uppercase tracking-widest">Con web profesional</div>
                </div>

                {/* Traditional Agency Column */}
                <div className="py-6 px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center opacity-40 grayscale group-hover:grayscale-0 transition-all border-x border-b border-foreground/5 md:border-x-0 md:border-b-0 md:border-b border-foreground/5 rounded-b-2xl md:rounded-none">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                    <X className="text-foreground/40 w-5 h-5 stroke-[3px]" />
                  </div>
                  <span className="text-foreground/60 text-sm md:text-base leading-snug">
                    {item.others}
                  </span>
                  {/* Subtle mobile indicator */}
                  <div className="md:hidden absolute top-2 right-4 text-[8px] font-black text-foreground/20 uppercase tracking-widest">Sin web</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
