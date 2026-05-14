"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "1. Información Básica",
    description: "Nos escribes por WhatsApp. Te hacemos 3 preguntas sobre tu negocio y te recomendamos el plan ideal.",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: "2. Envío de Material",
    description: "Te pedimos tu logo, fotos de tu equipo trabajando y certificaciones. Si no tienes, nosotros lo resolvemos.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "3. Desarrollo",
    description: "Diseñamos y programamos tu sistema de captación. No tienes que perseguirnos; te mantenemos al tanto por WhatsApp.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "4. Lanzamiento",
    description: "En 3 a 7 días hábiles, tu fumigadora está online, posicionada localmente y lista para automatizar urgencias.",
    icon: <Rocket className="w-6 h-6" />,
  }
];

export default function FumigationProcess() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-accent/5"
          >
            Nuestra Metodología
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground"
          >
            Tu Nueva Web en <span className="text-accent">4 Pasos Simples</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-custom/20 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface/30 p-8 rounded-[2.5rem] border border-border-custom/10 hover:border-accent/30 transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-accent mb-8 shadow-xl border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
