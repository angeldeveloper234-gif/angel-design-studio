"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const cases = [
  {
    name: "Fumcon del Sureste — Yucatán y el Caribe",
    headline: "Presencia en 8 ciudades y mantenimiento asegurado.",
    description: "Presencia digital en 8 ciudades, sistema de respuesta rápida por zona geográfica. La página les generó tal volumen de consultas que decidieron pagar el año completo de mantenimiento por adelantado.",
    accent: "bg-blue-500",
    url: "https://fumcon.com",
  },
  {
    name: "Big Cat Control de Plagas — Nivel Nacional",
    headline: "Cotizador en tiempo real y expansión operativa.",
    description: "Sitio con validador de cobertura por código postal, 8 correos corporativos configurados y presupuestos organizados. Contrataron mantenimiento y SEO, y ya avanzan en un segundo proyecto para su empresa matriz PCP Internacional.",
    accent: "bg-orange-500",
    url: "https://bigcat.mx",
  }
];

export default function FumigationSuccess() {
  return (
    <section id="portafolio" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-accent/5"
          >
            Resultados reales con fumigadoras en México
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            No vendemos plantillas. Construimos páginas <span className="text-accent">que traen clientes</span>
          </motion.h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Estos son los resultados económicos que hemos construido para empresas de control de plagas activas en México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface/30 rounded-[3rem] p-8 md:p-12 border border-border-custom/10 hover:border-accent/20 transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.accent} opacity-5 blur-[60px] rounded-full`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl text-white ${item.accent}`}>
                    {item.name[0]}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black font-heading text-foreground">{item.name}</h3>
                    <p className="text-accent font-bold text-sm uppercase tracking-wider">{item.headline}</p>
                  </div>
                </div>

                <p className="text-secondary text-lg leading-relaxed mb-6">
                  {item.description}
                </p>

                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold group/btn">
                    Ver el sitio en vivo <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
