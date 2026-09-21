"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Cpu, MapPin } from "lucide-react";
import Image from "next/image";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { useLanguage } from "@/context/LanguageContext";

const servicesEs = [
  {
    title: "Sitios Web",
    subtitle: "de Alta Conversión",
    tagline: "Arquitectura Next.js Mobile-First",
    description: "Creamos páginas web y landing pages ultra veloces en Next.js. Diseñadas para convertir visitantes en clientes directos de WhatsApp en menos de 7 días, sin plantillas lentas.",
    features: [
      "Landing pages y webs corporativas",
      "Velocidad de carga 95+ (Google PageSpeed)",
      "Botón WhatsApp sticky optimizado",
      "Entrega lista en menos de 7 días"
    ],
    buttonText: "Quiero mi sitio web",
    icon: <Code className="w-6 h-6" />,
    image: "/services/web-dev.png",
    highlight: true,
  },
  {
    title: "Asistente IA",
    subtitle: "WhatsApp + CRM",
    tagline: "Automatización con TinoAI",
    description: "Implementamos agentes inteligentes con IA que atienden a tus prospectos 24/7 por texto y notas de voz. Califican leads, cotizan en segundos y sincronizan todo en tu CRM para no perder ventas.",
    features: [
      "Atención 24/7 por texto y notas de voz",
      "Calificación instantánea de clientes",
      "Sincronización automática con Google Sheets / CRM",
      "Handoff inteligente a tu equipo comercial"
    ],
    buttonText: "Automatizar mi negocio",
    icon: <Cpu className="w-6 h-6" />,
    image: "/services/ai-automation.png",
    highlight: false,
  },
  {
    title: "SEO Local",
    subtitle: "& Google Maps",
    tagline: "Dominá las búsquedas de tu ciudad",
    description: "Optimizamos tu presencia en Google Business Profile y búsquedas locales con Schema LocalBusiness. Hacemos que los clientes de tu zona te encuentren antes que a tu competencia.",
    features: [
      "Auditoría y optimización de Google Maps",
      "Schema LocalBusiness estructurado",
      "Arquitectura para rankear por servicio y ciudad",
      "Mayor captación de llamadas y visitas"
    ],
    buttonText: "Posicionar mi negocio",
    icon: <MapPin className="w-6 h-6" />,
    image: "/services/web-dev.png",
    highlight: false,
  },
];

const servicesEn = [
  {
    title: "High-Converting",
    subtitle: "Websites",
    tagline: "Mobile-First Next.js Architecture",
    description: "We build lightning-fast websites and landing pages in Next.js. Specifically engineered to turn visitors into paying WhatsApp leads in under 7 days.",
    features: [
      "Landing pages & corporate websites",
      "Extreme speed (95+ Google PageSpeed)",
      "Optimized sticky WhatsApp CTA",
      "Fast delivery in under 7 days"
    ],
    buttonText: "I want my website",
    icon: <Code className="w-6 h-6" />,
    image: "/services/web-dev.png",
    highlight: true,
  },
  {
    title: "AI Assistant",
    subtitle: "WhatsApp + CRM",
    tagline: "Automation powered by TinoAI",
    description: "Deploy smart AI agents that answer inquiries 24/7 via text and voice messages. They pre-qualify leads, quote in seconds, and automatically log deals into your CRM.",
    features: [
      "24/7 text and audio voice note support",
      "Instant lead qualification & quoting",
      "Direct Google Sheets / CRM synchronization",
      "Seamless handoff to human sales reps"
    ],
    buttonText: "Automate my business",
    icon: <Cpu className="w-6 h-6" />,
    image: "/services/ai-automation.png",
    highlight: false,
  },
  {
    title: "Local SEO",
    subtitle: "& Google Maps",
    tagline: "Dominate search in your city",
    description: "Position your business on Google Business Profile and local search results with structured LocalBusiness Schema. Capture high-intent customers looking for your services nearby.",
    features: [
      "Google Business Profile setup & audit",
      "Rich LocalBusiness Schema markup",
      "Targeted city + service ranking layout",
      "More direct phone calls and bookings"
    ],
    buttonText: "Rank my business",
    icon: <MapPin className="w-6 h-6" />,
    image: "/services/web-dev.png",
    highlight: false,
  },
];

export default function Services() {
  const { language, t } = useLanguage();
  const services = language === "es" ? servicesEs : servicesEn;
  const whatsappLink = useWhatsAppLink();
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
            {t("services.badge")}
          </motion.div>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.1] text-foreground">
              {language === "es" ? (
                <>
                  Todo lo que tu negocio necesita para <span className="text-accent">crecer online</span>
                </>
              ) : (
                <>
                  Everything your business needs to <span className="text-accent">grow online</span>
                </>
              )}
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                    href={whatsappLink}
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
                    {language === "es" ? "Proyecto Elite" : "Elite Project"}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 relative z-20">
                <p className={`text-sm md:text-base leading-relaxed mb-6 ${service.highlight ? "text-white/80" : "text-secondary"}`}>
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${service.highlight ? "text-white/50" : "text-secondary/50"}`}>
                    {language === "es" ? "Lo que incluye:" : "What's included:"}
                  </p>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.highlight ? "bg-white" : "bg-accent"}`} />
                      <span className={`text-sm font-medium ${service.highlight ? "text-white/90" : "text-secondary"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={whatsappLink}
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


