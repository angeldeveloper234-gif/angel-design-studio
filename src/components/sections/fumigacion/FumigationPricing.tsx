"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import FumigationOnboardingModal from "./FumigationOnboardingModal";

const plans = [
  {
    name: "Plan Urgencia",
    price: "$1,900",
    monthly: "$250",
    currency: "MXN",
    target: "Para fumigadoras chicas o independientes que necesitan presencia digital profesional hoy mismo.",
    features: [
      "Landing Page de 1 sección de alta conversión",
      "Botones de urgencia (WhatsApp y Llamada directa)",
      "SEO Local básico para Google",
      "Diseño Mobile-first optimizado",
      "Dominio profesional incluido"
    ],
    cta: "Contratar Plan Urgencia",
    highlight: false,
    delay: 0.1,
  },
  {
    name: "Plan Autoridad",
    price: "$3,900",
    monthly: "$350",
    currency: "MXN",
    target: "Para negocios consolidados que buscan captar contratos comerciales de alto valor y destacar frente a la competencia.",
    features: [
      "Sitio web corporativo completo (Múltiples páginas)",
      "Todo lo incluido en el Plan Urgencia",
      "Galería de trabajos y control de plagas",
      "Sección dedicada a certificaciones sanitarias",
      "Formulario avanzado de cobertura por zona",
      "SEO Local avanzado para dominar mapas",
      "Configuración de correos corporativos"
    ],
    cta: "Contratar Plan Autoridad",
    highlight: true,
    badge: "MÁS ELEGIDO",
    delay: 0.2,
  },
  {
    name: "Plan Dominio",
    price: "$5,100",
    monthly: "$500",
    currency: "MXN",
    target: "Para dueños de fumigadoras que quieren automatizar su atención al 100% y delegar la captación en inteligencia artificial.",
    features: [
      "Todo lo incluido en el Plan Autoridad",
      "Chatbot de WhatsApp operativo 24/7",
      "CRM automatizado conectado a Google Sheets",
      "Flujo de filtrado por tipo de plaga y código postal",
      "Acceso a Asistente AI de llamadas (Beta)",
      "Agendamiento automático de cotizaciones",
      "Estrategia SEO proyectada a 3 meses",
      "Sin costos extra por licencias de software externo"
    ],
    cta: "Contratar Plan Dominio",
    highlight: false,
    delay: 0.3,
  }
];

export default function FumigationPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

  const openModalWithPlan = (planName: string) => {
    if (planName === "Plan Urgencia") setSelectedPlan('A');
    else if (planName === "Plan Autoridad") setSelectedPlan('B');
    else if (planName === "Plan Dominio") setSelectedPlan('C');
    else setSelectedPlan(null);
    setIsModalOpen(true);
  };

  return (
    <section id="precios" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground"
          >
            Inversión clara. <span className="text-accent">Sin costos sorpresa.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg md:text-xl max-w-3xl mx-auto"
          >
            Nuestros planes incluyen el desarrollo inicial y un mantenimiento mensual para garantizar que tu sitio y automatizaciones nunca dejen de captar clientes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className={`relative flex flex-col p-8 rounded-[2rem] border ${
                plan.highlight 
                  ? 'bg-surface/80 border-accent shadow-2xl shadow-accent/10' 
                  : 'bg-surface/30 border-border-custom/10 hover:border-accent/30'
              } transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4">{plan.name}</h3>
                <div className="flex flex-col gap-6 mb-8">
                  {/* Inversión Inicial Block */}
                  <div className="relative group/price">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-[1px] w-4 bg-accent/30" />
                        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] font-mono">
                          Inversión Inicial
                        </span>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-5xl md:text-6xl font-black font-heading text-foreground tracking-tighter">
                          {plan.price}
                        </span>
                        <span className="text-secondary/60 font-bold text-sm mb-2">
                          {plan.currency}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mantenimiento Block */}
                  <div className="pt-6 border-t border-white/5 relative">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">
                          Mantenimiento Mensual
                        </span>
                      </div>
                      <div className="flex items-end gap-1.5">
                        <span className="text-3xl font-black font-heading text-foreground">
                          {plan.monthly}
                        </span>
                        <span className="text-secondary/60 text-xs font-bold mb-1">
                          {plan.currency}/mes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed min-h-[40px]">
                  {plan.target}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-foreground/80 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => openModalWithPlan(plan.name)}
                className={`w-full py-4 rounded-xl font-bold font-heading text-center transition-all ${
                  plan.highlight
                    ? 'bg-accent text-background hover:scale-[1.02] active:scale-95 shadow-xl shadow-accent/20'
                    : 'bg-surface border border-border-custom/20 text-foreground hover:border-accent/50 hover:bg-accent/5 active:scale-95'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-secondary/60 text-sm max-w-4xl mx-auto"
        >
          <p>* Nota: Todos los precios están expresados en pesos mexicanos (MXN). El mantenimiento mensual es obligatorio para asegurar el correcto funcionamiento del hosting, dominio, chatbot y actualizaciones de seguridad. En el Plan Dominio, el costo mensual de mantenimiento puede variar según el volumen de mensajes y llamadas procesadas por la IA.</p>
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
