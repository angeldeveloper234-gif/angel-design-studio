"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

interface CountryCard {
  code: string;
  flag: string;
  name: string;
  role: string;
  desc: string;
  cities: string[];
}

export default function Coverage() {
  const { language, t } = useLanguage();

  const countries: CountryCard[] = [
    {
      code: "MX",
      flag: "🇲🇽",
      name: language === "es" ? "México" : "Mexico",
      role: language === "es" ? "Mercado Norte" : "North Market",
      desc: language === "es" 
        ? "Infraestructura cloud de baja latencia y optimización SEO orientada al mercado mexicano y de EE.UU."
        : "Low-latency cloud infrastructure and SEO optimization oriented to the Mexican and US markets.",
      cities: ["CDMX", "Guadalajara", "Monterrey"],
    },
    {
      code: "CO",
      flag: "🇨🇴",
      name: "Colombia",
      role: language === "es" ? "Mercado Andino" : "Andean Market",
      desc: language === "es"
        ? "Sitios web rápidos y adaptados a las dinámicas de ventas y captación de clientes del ecosistema colombiano."
        : "Fast websites adapted to the sales and client acquisition dynamics of the Colombian ecosystem.",
      cities: ["Bogotá", "Medellín", "Cali"],
    },
    {
      code: "CL",
      flag: "🇨🇱",
      name: "Chile",
      role: language === "es" ? "Mercado Cono Sur" : "Southern Cone Market",
      desc: language === "es"
        ? "Desarrollo web de conversión y optimización extrema de velocidad para mercados altamente competitivos."
        : "Conversion web development and extreme speed optimization for highly competitive markets.",
      cities: ["Santiago", "Valparaíso", "Concepción"],
    },
    {
      code: "AR",
      flag: "🇦🇷",
      name: "Argentina",
      role: language === "es" ? "Centro de Desarrollo Principal" : "Main Development Center",
      desc: language === "es"
        ? "Donde reside nuestro equipo de ingeniería y diseño, exportando software y marcas premium a toda la región."
        : "Where our engineering and design team resides, exporting software and premium brands to the entire region.",
      cities: ["Buenos Aires", "Salta", "Córdoba"],
    },
  ];

  return (
    <section id="coverage" className="py-24 bg-background overflow-hidden relative border-b border-border-custom/5">
      {/* Background Decorative Network Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border-custom/20 mb-6 shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-bold text-accent tracking-[0.1em] uppercase">
              {language === "es" ? "Presencia Regional" : "Regional Presence"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.1] tracking-tight text-foreground max-w-3xl mb-6"
          >
            {language === "es" ? (
              <>
                Atendemos negocios en <span className="text-accent">toda Latinoamérica</span>
              </>
            ) : (
              <>
                We serve businesses in <span className="text-accent">all of Latin America</span>
              </>
            )}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-secondary font-medium text-base md:text-xl max-w-2xl leading-relaxed"
          >
            {language === "es" 
              ? "Diseñamos y desarrollamos con estándares globales y soporte localizado para los principales mercados de habla hispana."
              : "We design and develop with global standards and localized support for the main Spanish-speaking markets."}
          </motion.p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative bg-surface/40 hover:bg-surface/60 border border-border-custom/10 hover:border-accent/30 rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between min-h-[320px] md:min-h-[350px]"
            >
              {/* Card Top: Flag and Name */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-3xl shadow-inner border border-border-custom/10 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <span className="text-[10px] font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {country.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
                  {country.name}
                </h3>
                
                <p className="text-sm md:text-base text-secondary font-medium leading-relaxed mb-6">
                  {country.desc}
                </p>
              </div>

              {/* Card Bottom: Hub Cities */}
              <div className="border-t border-border-custom/5 pt-4">
                <div className="flex items-center gap-1.5 text-accent mb-2">
                  <MapPin size={12} className="shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {language === "es" ? "Ciudades Clave" : "Key Cities"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city) => (
                    <span 
                      key={city} 
                      className="text-xs font-bold text-secondary/80 bg-background/50 border border-border-custom/10 px-2.5 py-1 rounded-lg group-hover:text-foreground group-hover:border-accent/10 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-[2.5rem] bg-surface/30 border border-border-custom/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6 text-left max-w-xl">
            <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <Globe size={32} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-2">
                {language === "es" ? "Soporte y facturación regional" : "Regional support and billing"}
              </h4>
              <p className="text-sm md:text-base text-secondary leading-relaxed font-medium">
                {language === "es"
                  ? "Nos adaptamos a tu moneda y horarios locales. Facilitamos los procesos administrativos y de comunicación para que tu proyecto fluya sin fricciones."
                  : "We adapt to your local currency and schedules. We facilitate administrative and communication processes so that your project flows smoothly."}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <div className="flex items-center gap-3 px-5 py-3.5 bg-background/40 border border-border-custom/10 rounded-2xl text-sm font-bold text-foreground">
              <Clock size={16} className="text-accent" />
              <span>{language === "es" ? "Misma Zona Horaria" : "Same Time Zone"}</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3.5 bg-background/40 border border-border-custom/10 rounded-2xl text-sm font-bold text-foreground">
              <CheckCircle size={16} className="text-accent" />
              <span>{language === "es" ? "Moneda Local & USD" : "Local Currency & USD"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
