"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Cpu } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Desarrollo",
    subtitle: "Web",
    tagline: "Sitio web que convierte",
    description: "Diseñamos tu presencia digital desde cero: landing pages, sitios institucionales y portfolios que generan confianza y traen clientes. Rápidos, mobile-first y listos para posicionarse en Google.",
    features: [
      "Diseño único para tu rubro",
      "Dominio y publicación incluidos",
      "Optimizado para celular",
      "Listo en menos de 7 días"
    ],
    buttonText: "Quiero mi sitio web",
    icon: <Code className="w-6 h-6" />,
    image: "/services/web-dev.png",
    highlight: true,
  },
  {
    title: "Automatizaciones",
    subtitle: "con IA",
    tagline: "Tu negocio trabajando solo",
    description: "Implementamos asistentes con inteligencia artificial que atienden a tus clientes por WhatsApp las 24 horas, agendan citas, responden preguntas frecuentes y te mandan los datos organizados directo a tu celular.",
    features: [
      "Chatbot con IA para WhatsApp",
      "Respuestas automáticas personalizadas",
      "Registro de clientes en tiempo real",
      "Sin necesidad de estar pendiente"
    ],
    buttonText: "Quiero automatizar mi negocio",
    icon: <Cpu className="w-6 h-6" />,
    image: "/services/ai-automation.png",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 bg-surface/20 rounded-[3rem] p-8 md:p-16 border border-border-custom/10 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        {/* Header Section */}
        <div className="mb-16 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-accent/5"
          >
            Servicios
          </motion.div>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.1] text-foreground">
              Todo lo que tu negocio necesita para <span className="text-accent">crecer online</span>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 flex flex-col h-full min-h-[600px] transition-all duration-500 ${
                service.highlight 
                  ? "bg-accent text-white shadow-2xl shadow-accent/20" 
                  : "bg-surface/30 text-white border border-border-custom/10 hover:border-border-custom/20"
              }`}
            >
              {/* Content Top */}
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl ${service.highlight ? "bg-white/20 backdrop-blur-md" : "bg-background/50"}`}>
                    {service.icon}
                  </div>
                  <a 
                    href="https://wa.me/543873529421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 rounded-full cursor-pointer transition-all shadow-xl ${
                      service.highlight ? "bg-white text-accent" : "bg-accent text-white"
                    } hover:scale-110 active:scale-95 hover:rotate-12`}
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </a>
                </div>
                <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${service.highlight ? "text-white/60" : "text-accent"}`}>
                  {service.tagline}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                  {service.title} <br />
                  <span className={service.highlight ? "text-white/90" : "text-accent"}>
                    {service.subtitle}
                  </span>
                </h3>
              </div>

              {/* Image Area with "Stacked" effect inspired by mockup */}
              <div className="mt-auto relative w-full h-[300px] group">
                {/* Background stacks */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-full bg-white/5 rounded-[2rem] -z-10 translate-y-4 transition-transform group-hover:translate-y-2 duration-500" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[95%] h-full bg-white/10 rounded-[2rem] -z-10 translate-y-2 transition-transform group-hover:translate-y-1 duration-500" />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={service.image} 
                    alt={`Servicio de ${service.title} ${service.subtitle} - Angel Design Studio`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge inside image */}
                  <div className={`absolute bottom-6 left-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md ${
                    service.highlight ? "bg-white/20 text-white" : "bg-background/40 text-accent"
                  }`}>
                    Proyecto Elite
                  </div>
                </div>
              </div>
              
              <div className="mt-8 relative z-20">
                <p className={`text-sm md:text-base leading-relaxed mb-6 ${service.highlight ? "text-white/80" : "text-secondary"}`}>
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${service.highlight ? "text-white/50" : "text-secondary/50"}`}>
                    Lo que incluye:
                  </p>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.highlight ? "bg-white" : "bg-accent"}`} />
                      <span className={`text-sm font-medium ${service.highlight ? "text-white/90" : "text-secondary"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://wa.me/543873529421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all active:scale-95 flex items-center justify-center gap-2 group ${service.highlight ? "bg-white text-accent hover:bg-white/90" : "bg-accent text-white hover:bg-accent/90"}`}
                >
                  {service.buttonText} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


