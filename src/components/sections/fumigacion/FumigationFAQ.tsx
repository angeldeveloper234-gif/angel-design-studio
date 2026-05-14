"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Ya tengo página en Facebook / perfil en Maps, para qué quiero una web?",
    answer: "Porque tu competencia sí la tiene. Cuando un cliente encuentra tu Maps y quiere asegurarse de que eres profesional, busca tu web. Si no existes, le marca al siguiente negocio en Maps que sí tiene un sitio que le dé confianza."
  },
  {
    question: "¿Yo no sé nada de tecnología, ustedes se encargan?",
    answer: "De todo. Tú solo nos dices qué servicios haces (cucarachas, chinches, termitas, industrial) y nosotros redactamos, diseñamos, subimos y configuramos todo. Llave en mano en 3 a 7 días."
  },
  {
    question: "¿Cómo funciona el pago?",
    answer: "Pagas 50% al iniciar y 50% al recibir tu página terminada. Después, el mantenimiento mensual cubre hosting, dominio, actualizaciones y soporte por WhatsApp. Sin contratos largos ni costos ocultos."
  }
];

export default function FumigationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
          >
            Preguntas <span className="text-accent">Frecuentes</span>
          </motion.h2>
        </div>

        <div className="space-y-4 relative z-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface/50 border border-border-custom/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-foreground pr-8">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-background shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-accent" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-secondary leading-relaxed border-t border-border-custom/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
