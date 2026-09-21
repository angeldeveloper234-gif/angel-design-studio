"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Database, 
  MapPin, 
  Zap, 
  Clock, 
  AlertTriangle,
  Users,
  ChevronDown
} from "lucide-react";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import Footer from "@/components/sections/Footer";

// FAQ local data
const faqs = [
  {
    q: "¿Necesito rehacer o cambiar mi página web actual?",
    a: "No. Trabajamos directamente sobre tu página web actual (sea en WordPress, Wix, Squarespace, Shopify o código personalizado). Solo agregamos nuestros códigos de integración y configuramos los servicios."
  },
  {
    q: "¿Qué incluye exactamente el costo de Setup inicial?",
    a: "El Setup es un pago único que cubre la configuración de las APIs, la creación de tu bot de WhatsApp, la estructura del CRM conectado a Google Sheets, la generación de tus QRs de reseñas y la auditoría y optimización técnica de tu ficha de Google Maps."
  },
  {
    q: "¿Necesito pagar licencias mensuales adicionales?",
    a: "No. El mantenimiento mensual incluye todas las licencias de software y servidores necesarias para que la automatización y el chatbot funcionen sin interrupciones."
  },
  {
    q: "¿Cómo recibo las notificaciones de los clientes?",
    a: "Cada vez que un cliente interactúa con el bot, agenda un servicio o solicita una cotización, recibirás una alerta inmediata en tu WhatsApp personal o en el CRM que elijas, y los datos se guardarán automáticamente."
  }
];

// Plans local data
const plans = [
  {
    name: "Setup Conexión",
    setupPrice: "$2,500",
    monthly: "$250",
    currency: "MXN",
    description: "Ideal para fumigadoras que quieren empezar a organizar sus contactos y mejorar su presencia en Google Maps.",
    features: [
      "CRM en Google Sheets conectado a tu web",
      "Auditoría y optimización de ficha Google Maps",
      "Botón inteligente de WhatsApp y llamadas",
      "Generador de QR para reseñas de técnicos",
      "Soporte técnico mensual incluido"
    ],
    cta: "Solicitar Plan Conexión",
    highlight: false,
    ref: "Conexion"
  },
  {
    name: "Setup Automatizado Pro",
    setupPrice: "$4,900",
    monthly: "$390",
    currency: "MXN",
    description: "Nuestra solución recomendada. Chatbot 24/7 y recordatorios automáticos de re-fumigación para fidelizar clientes.",
    features: [
      "Todo lo incluido en el Plan Conexión",
      "Chatbot de WhatsApp inteligente 24/7",
      "Recordatorios automáticos de re-servicio (3 y 6 meses)",
      "Formulario interactivo inteligente de cotización",
      "Aviso inmediato por WhatsApp ante nuevos leads",
      "Optimización SEO local avanzada"
    ],
    cta: "Solicitar Plan Pro",
    highlight: true,
    ref: "Pro"
  },
  {
    name: "Setup Enterprise",
    setupPrice: "$7,500",
    monthly: "$550",
    currency: "MXN",
    description: "Para empresas consolidadas que necesitan delegar al 100% la prospección y el seguimiento comercial.",
    features: [
      "Todo lo incluido en el Plan Pro",
      "Asistente de Inteligencia Artificial para llamadas entrantes",
      "Integración con CRM avanzado (Hubspot o similar)",
      "Sistema de agendamiento y reserva automática de horarios",
      "Dashboard personalizado de ventas",
      "Estrategia de conversión local premium"
    ],
    cta: "Solicitar Plan Enterprise",
    highlight: false,
    ref: "Enterprise"
  }
];

export default function FumigacionAutomatizacionesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // WhatsApp Links
  const whatsappAuditoria = useWhatsAppLink("¡Hola! Me interesa agendar la *Auditoría de Automatización Gratuita* para mi sitio web de fumigación. ¿Qué información necesitan? [Ref: Auto]");
  
  const getWhatsAppPlan = (planName: string, ref: string) => {
    return `https://wa.me/5213322114455?text=%C2%A1Hola%21+Me+interesa+el+*${encodeURIComponent(planName)}*+para+mi+empresa+de+fumigaci%C3%B3n.+Tengo+sitio+web+activo+y+quiero+las+automatizaciones.+%5BRef%3A+Auto_${ref}%5D`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block border border-accent/25 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-8 bg-accent/5"
          >
            Servicios para Fumigadoras con Sitio Web Activo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em] mb-8 max-w-4xl mx-auto"
          >
            Tu página web actual es solo un adorno. <br />
            <span className="text-accent relative inline-block mt-2">
              Pon tu captación en piloto automático
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Si ya tienes un sitio web pero sigues respondiendo WhatsApps manualmente y perdiendo cotizaciones por estar fumigando en el campo, te falta infraestructura. Conectamos tu web a un CRM, integramos un chatbot 24/7 y optimizamos tu Google Maps para que no dejes ir a ningún cliente local.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[320px] sm:max-w-none mx-auto"
          >
            <a
              href={whatsappAuditoria}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center bg-accent text-background px-6 py-4 rounded-full font-black text-sm md:text-base uppercase tracking-wider transition-all duration-150 hover:bg-accent/90 hover:scale-[1.02] shadow-xl shadow-accent/20 active:scale-[0.98] w-full sm:w-auto"
            >
              Agendar Auditoría Gratis
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#precios-auto"
              className="bg-transparent border-2 border-foreground text-foreground px-6 py-4 rounded-full font-black text-sm uppercase tracking-wide hover:bg-foreground hover:text-background active:scale-95 transition-all w-full sm:w-auto text-center"
            >
              Ver Planes de Integración
            </a>
          </motion.div>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[55vw] h-[95vh] bg-gradient-to-l from-accent/5 to-transparent -z-10" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 -z-10" />
      </section>

      {/* Pain Point Section */}
      <section className="py-24 px-4 md:px-8 w-full bg-surface/5 border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-4">
              La Fuga de Dinero Oculta
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1] max-w-3xl mx-auto">
              ¿Por qué tener web no es suficiente en el sector del control de plagas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tarjeta de dolor 1 */}
            <div className="bg-card p-8 rounded-[2rem] border border-border-custom/5 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">El cliente no espera a que termines</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Estás aplicando termicida o fumigando un negocio y no puedes contestar. Para cuando le respondes el WhatsApp 2 horas después, ese cliente ya agendó con el competidor que contestó de inmediato. El 70% de las ventas en internet se las lleva el primero en responder.
              </p>
            </div>

            {/* Tarjeta de dolor 2 */}
            <div className="bg-card p-8 rounded-[2rem] border border-border-custom/5 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cero retención automática de clientes</h3>
              <p className="text-secondary text-sm leading-relaxed">
                La fumigación requiere refuerzos y mantenimiento preventivo periódico (cada 3, 4 o 6 meses). Si no les recuerdas tú de forma automatizada, tus clientes residenciales o comerciales simplemente se olvidarán o buscarán a cualquiera en Google Maps cuando vuelva la plaga.
              </p>
            </div>

            {/* Tarjeta de dolor 3 */}
            <div className="bg-card p-8 rounded-[2rem] border border-border-custom/5 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Google Maps abandonado</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Google Maps posiciona mejor a los negocios locales con más reseñas positivas y actividad. Si tus técnicos de campo terminan los servicios de control de plagas y no solicitan una reseña con un flujo automatizado y fácil, tu competencia seguirá rankeando por encima de ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Features Section */}
      <section className="py-24 px-4 md:px-8 w-full bg-background relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-4">
              Lo que implementamos
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
              El Sistema de Automatización <br />
              <span className="text-accent">para dueños de fumigadoras</span>
            </h2>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Solución 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Chatbot de WhatsApp 24/7</h3>
                </div>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Configuramos un asistente virtual configurado con Inteligencia Artificial o flujos guiados para tu negocio de control de plagas. El bot recibe la consulta, pregunta el tipo de plaga (cucarachas, roedores, termitas, etc.), detecta el código postal para validar la cobertura y cotiza el servicio inmediatamente. Todo esto ocurre mientras estás fumigando.
                </p>
              </div>
              <div className="md:col-span-5 bg-card p-6 rounded-2xl border border-border-custom/5 text-xs text-foreground/80 font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2 mb-2 text-accent">
                  <span>Chatbot Simulador</span>
                  <span>WhatsApp API</span>
                </div>
                <p className="text-secondary mb-1">Cliente: "Necesito cotizar fumigación en CDMX"</p>
                <p className="text-accent mb-2">Bot: "¡Hola! Con gusto. ¿Qué tipo de plaga tienes? 1. Cucarachas, 2. Chinches, 3. Roedores..."</p>
                <p className="text-secondary mb-1">Cliente: "1. Cucarachas en casa de 3 habitaciones"</p>
                <p className="text-accent">Bot: "Excelente. La inversión inicial recomendada es de $1,900 MXN. ¿Te gustaría agendar una visita técnico comercial para este sábado?"</p>
              </div>
            </div>

            {/* Solución 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">CRM Conectado a Google Sheets</h3>
                </div>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Olvídate de perder datos en WhatsApp Web o anotaciones físicas. Diseñamos una base de datos automatizada y fluida en Google Sheets para que tú y tu equipo de campo vean en tiempo real cada nuevo cliente, su número telefónico, la plaga detectada, la cotización estimada y el estado de la visita (Pendiente, En Proceso, Completado).
                </p>
              </div>
              <div className="md:col-span-5 bg-card p-6 rounded-2xl border border-border-custom/5 overflow-x-auto">
                <table className="w-full text-[10px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-accent font-bold">
                      <th className="pb-2 pr-2">Cliente</th>
                      <th className="pb-2 pr-2">Plaga</th>
                      <th className="pb-2 pr-2">Zona</th>
                      <th className="pb-2">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="text-secondary">
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-2 font-bold text-foreground">Carlos Gomez</td>
                      <td className="py-2 pr-2">Termita</td>
                      <td className="py-2 pr-2">Polanco</td>
                      <td className="py-2"><span className="bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded text-[8px] font-bold">Cotizado</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-2 font-bold text-foreground">Maria Soler</td>
                      <td className="py-2 pr-2">Roedores</td>
                      <td className="py-2 pr-2">Coyoacán</td>
                      <td className="py-2"><span className="bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[8px] font-bold">Agendado</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Solución 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Optimización Local & Ficha de Google</h3>
                </div>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Realizamos una auditoría técnica profunda y configuramos los aspectos clave de tu ficha de Google Business Profile (Maps) para que se indexe mejor en búsquedas orgánicas. Creamos flujos cortos con códigos QR personalizados para que tus técnicos puedan presentárselos a los clientes al finalizar el servicio, incentivándolos a dejar 5 estrellas inmediatamente.
                </p>
              </div>
              <div className="md:col-span-5 bg-card p-6 rounded-2xl border border-border-custom/5 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Zap size={24} />
                </div>
                <p className="text-xs font-bold text-foreground">Escanea al Terminar el Servicio</p>
                <div className="w-24 h-24 bg-foreground rounded-lg flex items-center justify-center text-background font-mono text-[8px]">
                  [ QR CODE ]
                </div>
                <p className="text-[10px] text-secondary">Abre directo el formulario de reseñas de Google con redirección limpia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios-auto" className="py-24 px-4 md:px-8 w-full bg-surface/5 border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-4">
              Nuestros Planes de Integración
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground leading-[1.1]">
              Precios de Integración y Software
            </h2>
            <p className="text-secondary text-base md:text-xl max-w-3xl mx-auto">
              Pagos de configuración únicos. Mantenimiento mensual accesible para hosting, APIs y soporte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-gradient-to-b from-[#181a1d] to-[#121315]/80 border-accent/40 shadow-2xl shadow-accent/10' 
                    : 'bg-card border-border-custom/5 hover:border-accent/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-wider uppercase shadow-lg whitespace-nowrap text-center flex items-center justify-center min-w-[140px]">
                    El Más Elegido
                  </div>
                )}
                
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                  
                  <div className="flex flex-col gap-4 mb-6 md:mb-8">
                    {/* Setup Fee Block */}
                    <div className="relative group/price">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <div className="h-[1px] w-3 bg-accent/30" />
                          <span className="text-[10px] font-black text-accent uppercase tracking-wider">
                            Setup Único de Integración
                          </span>
                        </div>
                        <div className="flex items-end gap-2">
                          <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none">
                            {plan.setupPrice}
                          </span>
                          <span className="text-secondary/60 font-bold text-xs mb-1">
                            {plan.currency}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Monthly Fee Block */}
                    <div className="pt-4 border-t border-white/5 relative">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                            Hosting, APIs y Soporte
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
                    {plan.description}
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
                  href={getWhatsAppPlan(plan.name, plan.ref)}
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-8 w-full bg-background relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
              Despeja tus dudas
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-card border border-border-custom/5 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-foreground text-sm md:text-base hover:text-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-secondary shrink-0 transition-transform duration-250 ${openFaq === idx ? 'rotate-180 text-accent' : ''}`} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-secondary text-xs md:text-sm leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 md:px-8 w-full bg-accent text-background relative overflow-hidden text-center">
        <div className="max-w-[800px] mx-auto relative z-10 px-4">
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
            ¿Quieres saber cuántos clientes dejas ir hoy?
          </h2>
          <p className="text-background/80 text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Analizamos tu sitio web actual y tu ficha de Google Maps sin costo. Te diremos exactamente dónde estás perdiendo contactos y qué automatización necesitas activar.
          </p>
          <a
            href={whatsappAuditoria}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-background text-accent px-8 py-4 rounded-full font-black text-sm md:text-base uppercase tracking-wider hover:bg-neutral-100 transition-all active:scale-95 shadow-2xl shadow-black/15"
          >
            Solicitar Auditoría Gratis
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
