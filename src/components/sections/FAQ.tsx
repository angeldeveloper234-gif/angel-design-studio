"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

const faqData = [
  {
    question: "¿Cuánto tarda?",
    answer: "Entregamos tu sitio web funcional en menos de 1 semana, dependiendo de la rapidez con la que nos pases tu información (logo, textos, fotos). Somos la agencia más rápida del mercado porque no usamos procesos burocráticos.",
  },
  {
    question: "¿Qué necesito darte?",
    answer: "Básicamente el logo de tu marca, fotos de tus proyectos o servicios y los textos que quieras incluir. Si no tienes fotos o textos, nosotros podemos ayudarte a generarlos con Inteligencia Artificial para que se vean increíbles.",
  },
  {
    question: "¿Qué pasa si quiero cambios?",
    answer: "Incluimos una fase de revisiones ilimitadas durante el proceso de diseño. Una vez publicada, tienes 30 días de soporte gratuito para ajustes menores, asegurando que todo funcione a la perfección.",
  },
  {
    question: "¿Incluye dominio?",
    answer: "¡Sí! El primer año de dominio (.com o .mx) y hosting premium de alta velocidad están incluidos en todos nuestros planes. Nos encargamos de toda la configuración técnica por ti.",
  },
  {
    question: "¿Buscas diseño web cerca de mi?",
    answer: "Aunque estamos en Ciudad de México, trabajamos de forma remota para todo el país y el mundo. Al ser un estudio digital, podemos ofrecerte la misma calidad y atención personalizada sin importar tu ubicación física.",
  },
  {
    question: "¿Cómo cobran?",
    answer: "Solicitamos un 50% de anticipo para iniciar el proyecto y el 50% restante al finalizar, una vez que estés totalmente satisfecho con el resultado y antes del lanzamiento oficial.",
  },
];

export default function FAQ() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-background overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-accent/5"
            >
              Preguntas Frecuentes
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading leading-[1.1] tracking-tight text-foreground mb-6"
            >
              Todo lo que necesitas <span className="text-accent">saber</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-medium leading-relaxed max-w-sm mb-10"
            >
              Resolvemos tus dudas para que podamos empezar a escalar tu negocio hoy mismo.
            </motion.p>
            
            {/* Contact CTA in FAQ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-surface rounded-[2.5rem] text-foreground relative overflow-hidden group shadow-2xl border border-border-custom/10"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-accent transition-colors duration-500">
                   <Plus className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold font-heading mb-3">¿Aún con dudas?</h4>
                <p className="text-secondary text-sm mb-8 leading-relaxed">Estamos listos para escucharte. Resolvemos cualquier inquietud en tiempo real.</p>
                <a 
                  href="https://wa.me/543873529421" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 px-6 bg-white text-background hover:bg-accent hover:text-white font-bold rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-lg"
                >
                  Contactar por WhatsApp
                </a>
              </div>
              {/* Animated Decorative element */}
              <motion.div 
                animate={{ 
                   scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full blur-3xl -z-0"
              ></motion.div>
            </motion.div>
          </div>

          {/* Accordion Section */}
          <div className="lg:w-2/3">
            <Accordion.Root 
              type="single" 
              collapsible 
              className="space-y-5"
              value={value}
              onValueChange={setValue}
            >
              {faqData.map((item, index) => (
                <Accordion.Item 
                  key={index} 
                  value={`item-${index}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className={`border transition-all duration-500 rounded-[2.5rem] overflow-hidden ${
                      value === `item-${index}` 
                      ? "bg-surface border-accent/20 shadow-2xl shadow-black/20" 
                      : "bg-surface/40 border-border-custom/10 hover:border-accent/30 hover:bg-surface/60"
                    }`}
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex items-center justify-between w-full p-6 md:p-10 text-left cursor-pointer transition-all duration-300">
                        <span className={`text-xl md:text-2xl font-bold font-heading transition-colors duration-500 max-w-[85%] ${
                          value === `item-${index}` ? "text-accent" : "text-foreground"
                        }`}>
                          {item.question}
                        </span>
                        <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${
                          value === `item-${index}` 
                          ? "bg-accent text-white rotate-180" 
                          : "bg-background text-secondary group-hover:bg-accent/10 group-hover:text-accent"
                        }`}>
                          {value === `item-${index}` ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-6 pb-10 md:px-10 md:pb-12">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={value === `item-${index}` ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-secondary font-medium leading-relaxed text-base md:text-xl max-w-2xl"
                        >
                          {item.answer}
                        </motion.div>
                      </div>
                    </Accordion.Content>
                  </motion.div>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
