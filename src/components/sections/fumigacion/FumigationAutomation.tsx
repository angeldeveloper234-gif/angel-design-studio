"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneIncoming, CheckCircle2, Cpu } from "lucide-react";

export default function FumigationAutomation() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent font-black uppercase tracking-[0.2em] text-xs mb-4"
            >
              <Cpu size={14} /> Automatización Inteligente
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-heading leading-tight"
            >
              Atención inmediata sin contratar recepcionistas
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-lg max-w-sm font-medium"
          >
            Mientras tú estás con la bomba aspersora, estas herramientas filtran prospectos, responden dudas y agendan los servicios por ti.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chatbot Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-surface/20 rounded-[3rem] p-10 border border-border-custom/10 hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-accent/20 group-hover:rotate-6 transition-transform">
              <MessageSquare className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-3xl font-black font-heading mb-6">Chatbot IA para WhatsApp + CRM</h3>
            <div className="text-secondary text-sm md:text-base leading-relaxed mb-8 flex-grow space-y-2">
              <p>1. El bot saluda al cliente.</p>
              <p>2. Pregunta el tipo de plaga a tratar.</p>
              <p>3. Solicita zona o código postal.</p>
              <p>4. Agenda la cotización.</p>
              <p>5. Guarda toda la información de contacto ordenada automáticamente en Google Sheets.</p>
            </div>
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-start gap-3 text-accent font-bold">
                <CheckCircle2 size={24} className="shrink-0 mt-0.5" />
                <span>Tu negocio atiende urgencias 24/7 y filtra curiosos sin que tengas que pagar costosas mensualidades de plataformas externas.</span>
              </div>
            </div>
          </motion.div>

          {/* AI Voice Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-surface/20 rounded-[3rem] p-10 border border-border-custom/10 hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="relative mb-10">
              <div className="w-16 h-16 bg-background border border-border-custom/20 rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                <PhoneIncoming className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -top-2 -right-2 bg-accent text-background text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                BETA
              </div>
            </div>
            <h3 className="text-3xl font-black font-heading mb-6">Asistente Telefónico de IA [BETA]</h3>
            <p className="text-secondary text-base leading-relaxed mb-8 flex-grow">
              Un sistema avanzado de voz que atiende tus llamadas entrantes de forma natural, califica la urgencia del problema, responde preguntas frecuentes del servicio y agenda visitas técnicas.
            </p>
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-start gap-3 text-accent font-bold">
                <CheckCircle2 size={24} className="shrink-0 mt-0.5" />
                <span>Ideal para cuando estás trabajando o fuera de horario; jamás volverá a sonar ocupado ni perderás un servicio de emergencia.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative pulse animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse" />
    </section>
  );
}
