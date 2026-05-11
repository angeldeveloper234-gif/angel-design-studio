"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tarda en estar listo mi sitio?",
    answer: "Entre 3 y 7 días hábiles desde que nos entregas la información básica (logo, servicios, fotos). Trabajamos rápido porque sabemos que necesitas captar clientes ya."
  },
  {
    question: "¿El precio incluye dominio y hosting?",
    answer: "Sí, todos nuestros planes de pago único incluyen el registro del dominio y el hosting inicial. El mantenimiento opcional posterior cubre estos gastos para que no te preocupes de nada."
  },
  {
    question: "¿Qué pasa si necesito cambios después de la entrega?",
    answer: "Tienes un periodo de revisiones incluido. Después, puedes contratar nuestro mantenimiento mensual opcional (desde $20 USD) para cambios, actualizaciones, seguridad y soporte continuo."
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
            className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground"
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
                <h3 className="text-lg font-bold font-heading text-foreground pr-8">
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
