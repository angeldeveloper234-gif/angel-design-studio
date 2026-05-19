"use client";

import { motion } from "framer-motion";
import { Smartphone, History, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarketProblem() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 px-4 md:px-8 bg-background min-h-[600px]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 bg-accent/5"
            >
              {t("market.badge")}
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-heading leading-[1.1] tracking-tight"
            >
              {language === "es" ? (
                <>
                  <span className="text-secondary/60">El 90% de los sitios web de negocios en Argentina</span> <br />
                  <span className="text-foreground">están desactualizados o no convierten</span>
                </>
              ) : (
                <>
                  <span className="text-secondary/60">90% of business websites in Argentina</span> <br />
                  <span className="text-foreground">are outdated or don't convert</span>
                </>
              )}
            </motion.h2>
          </div>
          
          {/* Subheading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xs"
          >
            <p className="text-secondary text-base md:text-lg leading-relaxed font-medium">
              {language === "es" 
                ? "No dejes que una mala presencia digital frene el crecimiento de tu negocio."
                : "Don't let a poor digital presence slow down your business growth."}
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column (2 stacked cards) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-surface/40 rounded-[2rem] p-8 shadow-xl border border-border-custom/10 flex-1 flex flex-col justify-center backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">{t("market.card1.title")}</h3>
              <p className="text-secondary font-medium leading-relaxed">
                {t("market.card1.desc")}
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-surface/40 rounded-[2rem] p-8 shadow-xl border border-border-custom/10 flex-1 flex flex-col justify-center backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">{t("market.card2.title")}</h3>
              <p className="text-secondary font-medium leading-relaxed">
                {t("market.card2.desc")}
              </p>
            </motion.div>

          </div>

          {/* Right Column (1 large dark card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-7 bg-surface rounded-[2.5rem] p-10 md:p-14 text-foreground shadow-2xl flex flex-col justify-between relative overflow-hidden group border border-border-custom/20"
          >
            {/* Background decorative graphic */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" y1="22" x2="12" y2="12"></line>
              </svg>
            </div>

            <div className="relative z-10 mb-20">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-md">
                {t("market.card3.desc")}
              </p>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                {t("market.card3.title")}
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
