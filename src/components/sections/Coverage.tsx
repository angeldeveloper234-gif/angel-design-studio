"use client";

import { motion } from "framer-motion";
import { Globe, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Image from "next/image";

interface CountryCard {
  code: string;
  flag: string;
  name: string;
}

export default function Coverage() {
  const { language } = useLanguage();

  const countries: CountryCard[] = [
    {
      code: "MX",
      flag: "/banderas/mx.png",
      name: language === "es" ? "México" : "Mexico",
    },
    {
      code: "CO",
      flag: "/banderas/co.png",
      name: "Colombia",
    },
    {
      code: "CL",
      flag: "/banderas/cl.png",
      name: "Chile",
    },
    {
      code: "AR",
      flag: "/banderas/ar.png",
      name: "Argentina",
    },
  ];

  return (
    <section id="coverage" className="py-24 bg-background overflow-hidden relative border-b border-border-custom/5">
      {/* Background Decorative Network Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative bg-surface/40 hover:bg-surface/60 border border-border-custom/10 hover:border-accent/30 rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col items-center justify-center text-center"
            >
              <Image
                src={country.flag}
                alt={language === "es" ? `Bandera de ${country.name}` : `${country.name} flag`}
                width={56}
                height={56}
                className="w-14 h-14 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              
              <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                {country.name}
              </h3>
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
