"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Filter, 
  Rocket,
  CheckCircle2,
  Database,
  Calendar,
  Layers
} from "lucide-react";

const serviceSections = [
  {
    category: "1. Captación & Conversión Móvil",
    description: "Lo que hace que el cliente con una plaga activa en su casa te llame al instante en lugar de seguir buscando en Google.",
    items: [
      {
        title: "Diseño Mobile-First",
        description: "Optimizada para el cliente que busca \"fumigador urgente\" desde su celular con una plaga en frente.",
        icon: <Smartphone className="w-5 h-5" />,
      },
      {
        title: "Botón de Emergencia",
        description: "Llamada a la acción directa y pegajosa a tu WhatsApp o teléfono siempre visible.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Carga Ultra Rápida",
        description: "Código optimizado para que la página cargue en menos de 1.5 segundos antes de que el cliente se desespere.",
        icon: <Rocket className="w-5 h-5" />,
      },
      {
        title: "Integración WhatsApp",
        description: "El canal principal de cierre de ventas, integrado sin fricciones en el flujo de navegación.",
        icon: <MessageSquare className="w-5 h-5" />,
      }
    ]
  },
  {
    category: "2. Confianza & Autoridad Local",
    description: "Elementos diseñados específicamente para que tu fumigadora luzca más profesional e institucional que cualquier competidor independiente.",
    items: [
      {
        title: "SEO Local Google",
        description: "Configuraciones internas optimizadas para aparecer cuando busquen control de plagas en tu ciudad.",
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        title: "Certificaciones Visibles",
        description: "Espacios destacados para mostrar tus licencias sanitarias (COFEPRIS o equivalentes) y generar confianza.",
        icon: <ShieldCheck className="w-5 h-5" />,
      },
      {
        title: "Validador de Cobertura",
        description: "Filtros interactivos por zona o código postal para no perder tiempo atendiendo consultas fuera de tu alcance.",
        icon: <Filter className="w-5 h-5" />,
      },
      {
        title: "Dominio & Soporte",
        description: "Tu dirección web profesional (tuempresa.com) y correos corporativos gestionados al 100% por nosotros.",
        icon: <CheckCircle2 className="w-5 h-5" />,
      }
    ]
  },
  {
    category: "3. Automatización de Negocio (Plan Dominio)",
    description: "Software integrado para que tu web capture clientes, cotice y los guarde en tu base de datos mientras tú estás fumigando en campo.",
    items: [
      {
        title: "CRM Google Sheets",
        description: "Cada lead o solicitud de presupuesto se organiza de forma automática en una hoja de cálculo estructurada.",
        icon: <Database className="w-5 h-5" />,
      },
      {
        title: "Chatbot Operativo 24/7",
        description: "Asistente inteligente de WhatsApp que califica al cliente, pregunta la plaga y agenda la visita.",
        icon: <MessageSquare className="w-5 h-5" />,
      },
      {
        title: "Agendador Automático",
        description: "Sistema para que inmobiliarias o clientes residenciales elijan día y hora disponible para el servicio.",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Recordatorios de Re-servicio",
        description: "Mensajes automáticos a clientes pasados cada 3 o 6 meses recordándoles su próximo mantenimiento preventivo.",
        icon: <Layers className="w-5 h-5" />,
      }
    ]
  }
];

export default function FumigationServices() {
  return (
    <section id="servicios" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto bg-surface/10 rounded-[2rem] md:rounded-[4rem] p-6 md:p-16 border border-border-custom/5 relative overflow-hidden">
        
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 bg-accent/5"
          >
            NUESTRA ESTRUCTURA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-foreground leading-[1.1]"
          >
            Qué incluye la digitalización de <br className="hidden md:block" />
            <span className="text-accent">tu empresa de control de plagas</span>
          </motion.h2>
        </div>

        {/* Sections Desglose */}
        <div className="space-y-16 relative z-10">
          {serviceSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="border-b border-white/5 pb-12 last:border-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Category Header */}
                <div className="lg:col-span-4 lg:sticky lg:top-24">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                    Categoría
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                    {section.category}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed max-w-sm">
                    {section.description}
                  </p>
                </div>

                {/* Category Items */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {section.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.05 }}
                      className="flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border-custom/5 hover:border-accent/20 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-background border border-border-custom/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-secondary text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quick check icon in bottom corner */}
        <div className="absolute bottom-10 right-10 opacity-5 -rotate-12 pointer-events-none hidden lg:block">
            <CheckCircle2 size={240} className="text-accent" />
        </div>
      </div>
    </section>
  );
}
