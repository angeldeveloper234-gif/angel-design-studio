"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  Filter, 
  Rocket,
  CheckCircle2
} from "lucide-react";

const inclusions = [
  {
    title: "Diseño Mobile-First",
    description: "Optimizada para el cliente que busca \"fumigador\" desde su celular con una plaga en frente.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "SEO Local Básico",
    description: "Configuraciones para que aparezcas cuando busquen control de plagas en tu ciudad.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Botón de Emergencia",
    description: "Llamada a la acción directa y pegajosa a tu WhatsApp o teléfono.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Certificaciones Visibles",
    description: "Espacios diseñados para mostrar tus licencias sanitarias y generar confianza.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Validador de Zonas",
    description: "Claridad geográfica para no recibir contactos de áreas donde no das servicio.",
    icon: <Filter className="w-6 h-6" />,
  },
  {
    title: "Carga Ultra Rápida",
    description: "Código optimizado para que la página cargue antes de que el cliente se desespere.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Dominio Incluido",
    description: "Tu dirección profesional (tuempresa.com) gestionada por nosotros.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Integración WhatsApp",
    description: "El canal principal de cierre de ventas, integrado sin fricciones.",
    icon: <MessageSquare className="w-6 h-6" />,
  }
];

export default function FumigationServices() {
  return (
    <section id="servicios" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto bg-surface/10 rounded-[2rem] md:rounded-[4rem] p-6 md:p-20 border border-border-custom/5 relative overflow-hidden">
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-accent/5"
          >
            Lo que incluye
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            El estándar mínimo para <br />
            <span className="text-accent">tu fumigadora</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {inclusions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col gap-4 group"
            >
              <div className="w-14 h-14 bg-background border border-border-custom/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Quick check icon in bottom corner */}
        <div className="absolute bottom-10 right-10 opacity-5 -rotate-12 pointer-events-none hidden lg:block">
            <CheckCircle2 size={300} className="text-accent" />
        </div>
      </div>
    </section>
  );
}
