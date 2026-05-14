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
              <Cpu size={14} /> Add-ons de Automatización
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-heading leading-tight"
            >
              Opcionales para escalar tu atención
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-lg max-w-sm font-medium"
          >
            Mientras tú estás en campo, estas herramientas filtran prospectos, responden dudas y agendan los servicios por ti.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Chatbot Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-surface/20 rounded-[3rem] p-8 md:p-10 border border-border-custom/10 hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:rotate-6 transition-transform">
              <MessageSquare className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-heading mb-4">Chatbot Básico para WhatsApp</h3>
            <div className="text-secondary text-sm md:text-base leading-relaxed mb-8 flex-grow space-y-2">
              <p>Filtra clientes y responde preguntas frecuentes antes de que tú tomes la conversación.</p>
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className="flex flex-col gap-1 text-accent font-bold">
                <span className="text-xl md:text-2xl">$1,500 MXN</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-70">Pago único</span>
              </div>
            </div>
          </motion.div>

          {/* AI Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-surface/20 rounded-[3rem] p-8 md:p-10 border border-border-custom/10 hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-background border border-border-custom/20 rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                <Cpu className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-heading mb-4">Asistente IA para WhatsApp</h3>
            <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 flex-grow">
              IA avanzada que agenda citas automáticamente en tu calendario, responde con naturalidad, guarda leads en tu base de datos y manda recordatorios. Todo por WhatsApp.
            </p>
            <div className="pt-6 border-t border-white/5">
              <div className="flex flex-col gap-1 text-accent font-bold">
                <span className="text-xl md:text-2xl">Desde $4,500 MXN</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-70">Setup + Mensualidad</span>
              </div>
            </div>
          </motion.div>

          {/* AI Voice Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-surface/20 rounded-[3rem] p-8 md:p-10 border border-border-custom/10 hover:border-accent/30 transition-all duration-500 flex flex-col h-full md:col-span-2 xl:col-span-1"
          >
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-background border border-border-custom/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <PhoneIncoming className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -top-2 -right-2 bg-accent text-background text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                NUEVO
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-heading mb-4">Asistente Telefónico IA</h3>
            <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 flex-grow">
              Se conecta a un número y actúa como recepcionista. Anota todo de forma profesional y con tono natural para dejarte los datos listos para cerrar el servicio.
            </p>
            <div className="pt-6 border-t border-white/5">
              <div className="flex flex-col gap-1 text-accent font-bold">
                <span className="text-xl md:text-2xl">Cotización a medida</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-70">Setup + Mensualidad</span>
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
