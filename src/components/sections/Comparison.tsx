"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Bot, XCircle, CheckCircle2 } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-accent/5"
          >
            Por qué elegirnos
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tight text-foreground max-w-3xl"
          >
            Agencias tradicionales vs <span className="text-accent">Angel Design Studio</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Card 1: Agencias Viejas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface/50 rounded-[2.5rem] p-10 md:p-12 border border-border-custom/10 flex flex-col relative overflow-hidden h-[500px]"
          >
            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-secondary/40 w-6 h-6" />
                <h3 className="text-2xl font-bold font-heading text-secondary">Agencias tradicionales</h3>
              </div>
              <ul className="space-y-4 text-secondary font-medium">
                {[
                  "Tardan 4 a 8 semanas",
                  "Plantillas iguales para todos",
                  "Sitios lentos y pesados",
                  "Imágenes genéricas de internet",
                  "Solo el sitio y nada más",
                  "Soporte que no responde"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-secondary/40 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Abstract UI Graphics - Left Card */}
            <div className="absolute -bottom-10 -right-10 w-full h-[60%] flex items-end justify-end opacity-20">
               <div className="w-64 h-48 bg-background border border-border-custom/10 rounded-2xl shadow-sm rotate-[-10deg] absolute bottom-0 right-10 flex flex-col p-4">
                 <div className="w-full h-4 bg-surface rounded mb-2"></div>
                 <div className="w-3/4 h-4 bg-surface rounded"></div>
               </div>
               <div className="w-72 h-56 bg-background border border-border-custom/10 rounded-3xl shadow-md rotate-[5deg] absolute -bottom-5 -right-5 flex flex-col p-6">
                 <div className="text-xs text-secondary font-bold mb-2">Lentitud</div>
                 <div className="text-4xl font-bold text-secondary mb-4">98.00s</div>
                 <div className="flex gap-2">
                   <div className="w-12 h-8 bg-surface rounded-lg"></div>
                   <div className="w-12 h-8 bg-surface rounded-lg"></div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Angel Design Studio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface rounded-[2.5rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-border-custom/20 flex flex-col relative overflow-hidden h-[500px]"
          >
            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-accent w-6 h-6" />
                <h3 className="text-2xl font-bold font-heading text-foreground">Angel Design Studio</h3>
              </div>
              <ul className="space-y-4 text-secondary font-medium relative z-10">
                {[
                  "Entregamos en 3 a 7 días",
                  "Diseño único para tu rubro",
                  "Rápidos, modernos y optimizados",
                  "Recursos visuales de alta calidad",
                  "También automatizamos tu negocio",
                  "Acompañamiento directo por WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Abstract UI Graphics - Right Card (Graph) */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] flex items-end">
              <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none" className="overflow-visible">
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="graphGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4DA2E3" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#4DA2E3" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Smooth Curve */}
                <path d="M0,150 C100,150 150,50 250,50 C350,50 400,100 500,80 L500,200 L0,200 Z" fill="url(#graphGradient)" />
                <path d="M0,150 C100,150 150,50 250,50 C350,50 400,100 500,80" fill="none" stroke="#4DA2E3" strokeWidth="3" strokeLinecap="round" />
                
                {/* Highlight Point */}
                <circle cx="420" cy="95" r="5" fill="#4DA2E3" stroke="#fff" strokeWidth="2" />
              </svg>
              
              {/* Tooltip */}
              <div className="absolute right-8 bottom-24 bg-background border border-border-custom/30 shadow-2xl rounded-2xl p-4 transform translate-y-4">
                <div className="text-xs text-secondary font-medium mb-1">Conversión</div>
                <div className="text-2xl font-bold text-foreground">+350%</div>
                <div className="text-xs font-bold text-accent mt-1">Con IA integrada</div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
