"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bug, Hammer, Scale, Sun, Wind, Utensils, Dumbbell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NicheBand() {
  const { t } = useLanguage();

  const niches = [
    { name: t("niche.pest"), icon: <Bug size={24} /> },
    { name: t("niche.construction"), icon: <Hammer size={24} /> },
    { name: t("niche.legal"), icon: <Scale size={24} /> },
    { name: t("niche.solar"), icon: <Sun size={24} /> },
    { name: t("niche.air"), icon: <Wind size={24} /> },
    { name: t("niche.restaurant"), icon: <Utensils size={24} /> },
    { name: t("niche.gym"), icon: <Dumbbell size={24} /> },
  ];

  // Triple the niches to ensure enough content for the seamless scroll
  const duplicatedNiches = [...niches, ...niches, ...niches];

  return (
    <section className="w-full bg-background py-12 md:py-16 border-b border-border-custom/5 relative overflow-hidden min-h-[200px]">
      {/* Premium Side Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-background via-background/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-background via-background/70 to-transparent z-10 pointer-events-none" />
 
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        {/* Context Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10 md:mb-12"
        >
          <div className="h-[1px] w-8 bg-border-custom/20" />
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-secondary/60">
            {t("niche.badge")}
          </p>
          <div className="h-[1px] w-8 bg-border-custom/20" />
        </motion.div>
 
        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden w-full select-none">
          <motion.div
            className="flex whitespace-nowrap gap-16 md:gap-24 items-center py-4"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedNiches.map((niche, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 group cursor-default"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-surface text-secondary group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-sm border border-border-custom/10">
                  {niche.icon}
                </div>
                
                {/* Text */}
                <span className="text-2xl md:text-4xl font-black text-secondary/20 group-hover:text-foreground transition-colors duration-500 font-heading tracking-tighter">
                  {niche.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
