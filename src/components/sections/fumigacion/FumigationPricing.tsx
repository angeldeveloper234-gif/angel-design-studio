"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import FumigationOnboardingModal from "./FumigationOnboardingModal";

const plans = [
  {
    name: "Plan Urgencia",
    price: "$1,900",
    monthly: "$250",
    currency: "MXN",
    target: "Para fumigadoras que necesitan presencia digital profesional ya. Tu página lista en 3 a 7 días.",
    features: [
      "Landing page de alta conversión",
      "Botones de emergencia (WhatsApp y llamada directa)",
      "SEO Local básico para aparecer en Google",
      "Diseño optimizado para celular",
      "Dominio profesional incluido"
    ],
    cta: "Preguntar por este plan",
    highlight: false,
    badge: "Lo esencial para empezar",
    delay: 0.1,
  },
  {
    name: "Plan Autoridad",
    price: "$3,900",
    monthly: "$350",
    currency: "MXN",
    target: "Para negocios que buscan captar contratos comerciales de alto valor y posicionarse por encima de la competencia.",
    features: [
      "Sitio web corporativo completo (múltiples páginas)",
      "Todo lo incluido en el Plan Urgencia",
      "Galería de trabajos realizados",
      "Sección de certificaciones sanitarias",
      "Formulario de cobertura por zona",
      "SEO Local avanzado para dominar resultados",
      "Correos corporativos configurados"
    ],
    cta: "Preguntar por este plan",
    highlight: true,
    badge: "El más elegido",
    delay: 0.2,
  },
  {
    name: "Plan Dominio",
    price: "$5,100",
    monthly: "$500",
    currency: "MXN",
    target: "Para dueños que quieren que la página capte clientes y los atienda sin intervención manual.",
    features: [
      "Todo lo incluido en el Plan Autoridad",
      "Chatbot de WhatsApp operativo 24/7",
      "CRM automatizado conectado a Google Sheets",
      "Filtrado por tipo de plaga y código postal",
      "Asistente de IA para llamadas entrantes",
      "Agendamiento automático de cotizaciones",
      "Estrategia SEO proyectada a 3 meses",
      "Sin costos extra por licencias de software"
    ],
    cta: "Preguntar por este plan",
    highlight: false,
    badge: "Todo automatizado",
    delay: 0.3,
  }
];

export default function FumigationPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

  const whatsappUrgencia = useWhatsAppLink("¡Hola! Me interesa el *Plan Urgencia* para mi fumigadora. ¿Qué datos necesitan para empezar? [Ref: Control]");
  const whatsappAutoridad = useWhatsAppLink("¡Hola! Me interesa el *Plan Autoridad* para mi fumigadora. Quiero posicionarme por encima de la competencia. [Ref: Control]");
  const whatsappDominio = useWhatsAppLink("¡Hola! Me interesa el *Plan Dominio* para mi fumigadora. Quiero automatizar mi atención y captar clientes 24/7. [Ref: Control]");

  const getPlanLink = (planName: string) => {
    if (planName === "Plan Urgencia") return whatsappUrgencia;
    if (planName === "Plan Autoridad") return whatsappAutoridad;
    if (planName === "Plan Dominio") return whatsappDominio;
    return whatsappUrgencia;
  };

  return (
    <section id="precios" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black font-heading mb-6 tracking-tight text-foreground leading-[1.1]"
          >
            Elige el plan que necesita tu fumigadora hoy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-base md:text-xl max-w-3xl mx-auto"
          >
            Inversión clara. Sin costos sorpresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-[#181a1d] to-[#121315]/80 border-accent/40 shadow-2xl shadow-accent/10' 
                  : 'bg-card border-border-custom/5 hover:border-accent/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-wider uppercase shadow-lg whitespace-nowrap text-center flex items-center justify-center min-w-[140px]">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                
                <div className="flex flex-col gap-4 mb-6 md:mb-8">
                  {/* Inversión Inicial Block */}
                  <div className="relative group/price">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="h-[1px] w-3 bg-accent/30" />
                        <span className="text-[10px] font-black text-accent uppercase tracking-wider">
                          Inversión Inicial
                        </span>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none">
                          {plan.price}
                        </span>
                        <span className="text-secondary/60 font-bold text-xs mb-1">
                          {plan.currency}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mantenimiento Block */}
                  <div className="pt-4 border-t border-white/5 relative">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                          Mantenimiento Mensual
                        </span>
                      </div>
                      <div className="flex items-end gap-1.5">
                        <span className="text-2xl font-black text-foreground">
                          {plan.monthly}
                        </span>
                        <span className="text-secondary/60 text-xs font-bold mb-0.5">
                          {plan.currency}/mes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed min-h-[48px]">
                  {plan.target}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-accent/25 flex items-center justify-center mt-0.5">
                        <Check size={11} className="text-accent" />
                      </div>
                      <span className="text-foreground/90 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getPlanLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider text-center transition-all duration-150 active:scale-[0.97] active:brightness-95 flex items-center justify-center ${
                  plan.highlight
                    ? 'bg-accent text-background hover:bg-accent/90 hover:scale-[1.01] shadow-xl shadow-accent/15 cursor-pointer'
                    : 'bg-surface border border-border-custom text-foreground hover:border-accent/40 hover:bg-accent/5 cursor-pointer'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-secondary/60 text-xs max-w-4xl mx-auto px-4"
        >
          <p>Todos los precios en pesos mexicanos. El mantenimiento mensual cubre hosting, dominio, actualizaciones de seguridad y soporte directo por WhatsApp.</p>
        </motion.div>
      </div>

      <FumigationOnboardingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPlan={selectedPlan} 
      />
    </section>
  );
}
