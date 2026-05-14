"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import FumigationOnboardingModal from "./FumigationOnboardingModal";

export default function FumigationFinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappLink = useWhatsAppLink("¡Hola! Google Maps ya me manda clientes y quiero que mi negocio esté listo. ¿Me pueden ayudar con mi página web?");

  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-accent rounded-[4rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-black text-background mb-8 leading-[1.1] tracking-tight max-w-4xl">
              Google Maps Ya Te Manda Clientes. ¿Tu Negocio Está Listo Para Recibirlos?
            </h2>
            <p className="text-background/80 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12">
              Tomamos pocos clientes por mes para garantizar la entrega rápida de 3 a 7 días. Escríbenos ahora y aparta tu lugar.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center bg-background text-accent pl-8 pr-2 py-2 rounded-full font-black text-xl md:text-3xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 cursor-pointer"
              >
                <span className="mr-8">Escribir por WhatsApp Ahora</span>
                <div className="bg-accent rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-background border border-background/20 shrink-0">
                  <ArrowRight size={32} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </a>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-background font-bold text-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center border border-background/20">
                    <X size={14} className="text-background" />
                  </div>
                  <span>Sin llenar formularios largos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-background/20">
                    <Check size={14} className="text-background" />
                  </div>
                  <span>Respuesta directa en minutos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-accent/20 rounded-full blur-[160px] -z-10" />

      <FumigationOnboardingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
