"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const whatsappLink = useWhatsAppLink();
  
  const floatingCards = language === "es" ? [
    {
      icon: "⚡",
      value: "Entrega en 7 días",
      delay: 0,
      position: "top-[5%] md:top-[10%] left-[-2%] md:left-[2%] lg:left-[5%]",
    },
    {
      icon: "📱",
      value: "Mobile first",
      delay: 1,
      position: "bottom-[8%] md:bottom-[15%] left-[0%] md:left-[4%] lg:left-[8%]",
    },
    {
      icon: "🌐",
      value: "Dominio incluido",
      delay: 0.5,
      position: "top-[10%] md:top-[15%] right-[-2%] md:right-[2%] lg:right-[5%]",
    },
    {
      icon: "💬",
      value: "Atención por WhatsApp",
      delay: 1.5,
      position: "bottom-[12%] md:bottom-[10%] right-[0%] md:right-[4%] lg:right-[8%]",
    },
    {
      icon: "📈",
      value: "Listo para Google",
      delay: 0.8,
      position: "top-[40%] md:top-[35%] left-[-4%] md:left-[1%] lg:left-[3%]",
    },
    {
      icon: "✅",
      value: "Sin plantillas genéricas",
      delay: 1.2,
      position: "bottom-[42%] md:bottom-[40%] right-[-4%] md:right-[1%] lg:right-[3%]",
    },
  ] : [
    {
      icon: "⚡",
      value: "7-day delivery",
      delay: 0,
      position: "top-[5%] md:top-[10%] left-[-2%] md:left-[2%] lg:left-[5%]",
    },
    {
      icon: "📱",
      value: "Mobile first",
      delay: 1,
      position: "bottom-[8%] md:bottom-[15%] left-[0%] md:left-[4%] lg:left-[8%]",
    },
    {
      icon: "🌐",
      value: "Domain included",
      delay: 0.5,
      position: "top-[10%] md:top-[15%] right-[-2%] md:right-[2%] lg:right-[5%]",
    },
    {
      icon: "💬",
      value: "WhatsApp support",
      delay: 1.5,
      position: "bottom-[12%] md:bottom-[10%] right-[0%] md:right-[4%] lg:right-[8%]",
    },
    {
      icon: "📈",
      value: "Google ready",
      delay: 0.8,
      position: "top-[40%] md:top-[35%] left-[-4%] md:left-[1%] lg:left-[3%]",
    },
    {
      icon: "✅",
      value: "No generic templates",
      delay: 1.2,
      position: "bottom-[42%] md:bottom-[40%] right-[-4%] md:right-[1%] lg:right-[3%]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-background text-foreground"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute top-1/2 left-[-15%] -translate-y-1/2 w-[50%] md:w-[35%] aspect-square border-[30px] md:border-[60px] border-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[50%] md:w-[35%] aspect-square border-[30px] md:border-[60px] border-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Soft Glows */}
      <div className="absolute top-[-5%] left-[15%] w-[25%] h-[25%] bg-accent/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[15%] w-[25%] h-[25%] bg-accent/5 blur-[80px] pointer-events-none" />
 
      {/* Floating UI Modals - Visible from md upwards, smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4, // Faster but smooth
              repeat: Infinity,
              repeatType: "reverse",
              delay: card.delay,
              ease: "easeInOut",
            }}
            className={`absolute ${card.position} z-0 md:z-10`}
          >
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-surface/50 md:bg-surface/30 backdrop-blur-xl border border-border-custom/10 rounded-lg md:rounded-xl shadow-xl ring-1 ring-white/5">
              <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-md md:rounded-lg bg-surface shadow-sm border border-border-custom/20 text-xs md:text-xl">
                {card.icon}
              </div>
              <div className="block">
                <p className="text-[10px] md:text-sm font-black text-foreground whitespace-nowrap">
                  {card.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
 
      <div className="max-w-[1200px] mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-border-custom/20 mb-8 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-bold text-accent tracking-[0.05em] uppercase">
              {t("contact.badge")}
            </span>
          </motion.div>
 
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.1] mb-8 text-foreground"
          >
            {language === "es" ? (
              <>
                Deja de ser invisible. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                  Construye tu éxito digital.
                </span>
              </>
            ) : (
              <>
                Stop being invisible. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                  Build your digital success.
                </span>
              </>
            )}
          </motion.h2>
 
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t("contact.subheading")}
          </motion.p>
 
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-accent text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <FaWhatsapp className="text-2xl" />
              {t("contact.button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            
            <div className="flex items-center gap-4 text-secondary/50">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{t("contact.fastResponse")}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/10"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">{t("contact.noForms")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


