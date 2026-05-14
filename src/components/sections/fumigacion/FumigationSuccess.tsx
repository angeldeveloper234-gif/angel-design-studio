"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const cases = [
  {
    name: "Fumcon del Sureste — Yucatán y el Caribe",
    headline: "Presencia en 8 ciudades y mantenimiento asegurado.",
    description: "Presencia digital en 8 ciudades, sistema de respuesta rápida por zona geográfica. La página les generó tal volumen de consultas que decidieron pagar el año completo de mantenimiento por adelantado.",
    accent: "bg-blue-500",
    url: "https://fumcon.com",
    logo: "https://fumcon.com.mx/fumcon-logo.png",
    logoBg: "bg-white",
    image: "https://cdn.sanity.io/images/65gbp852/production/07e033989a4ff39c72a3f0d72f83bc502e9ee522-600x600.jpg",
  },
  {
    name: "Big Cat Control de Plagas — Nivel Nacional",
    headline: "Cotizador en tiempo real y expansión operativa.",
    description: "Sitio con validador de cobertura por código postal, 8 correos corporativos configurados y presupuestos organizados. Contrataron mantenimiento y SEO, y ya avanzan en un segundo proyecto para su empresa matriz PCP Internacional.",
    accent: "bg-orange-500",
    url: "https://bigcat.mx",
    logo: "https://bigcat.mx/logo/BIG%20CAT%20-%20Control%20de%20plagas.png",
    logoBg: "bg-white",
    image: "https://cdn.sanity.io/images/65gbp852/production/cc40d8a930f9dec32f67deb1bfbd77a6d3ea1f44-600x600.jpg",
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
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            No vendemos plantillas. Construimos páginas <span className="text-accent">que traen clientes</span>
          </motion.h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Estos son los resultados económicos que hemos construido para empresas de control de plagas activas en México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface/30 rounded-[2.5rem] p-3 md:p-4 border border-border-custom/10 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.accent} opacity-5 blur-[60px] rounded-full pointer-events-none`} />
              
              {/* Image Section */}
              <div className="aspect-[16/10] w-full rounded-[2rem] bg-gradient-to-br from-background to-surface relative overflow-hidden mb-6 shrink-0">
                <Image 
                  src={item.image} 
                  alt={`Diseño web para ${item.name}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 px-4 md:px-6 pb-4 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className={`shrink-0 w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-2xl flex items-center justify-center font-black text-xl text-white ${item.logoBg} border border-white/5 overflow-hidden shadow-xl`}>
                    <Image 
                      src={item.logo} 
                      alt={`Logo de ${item.name}`} 
                      width={80} 
                      height={80} 
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{item.name}</h3>
                    <p className="text-accent font-bold text-xs uppercase tracking-wider">{item.headline}</p>
                  </div>
                </div>

                <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>

                {item.url && (
                  <div className="mt-auto">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold group/btn text-sm hover:brightness-110 transition-all">
                      Ver el sitio en vivo <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
