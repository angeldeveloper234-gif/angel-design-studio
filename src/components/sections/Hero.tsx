"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full min-h-[100svh] lg:h-[100svh] bg-[#030712] text-white overflow-hidden flex flex-col justify-between select-none">
      {/* Radiant Deep Blue Degrade & Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Rich vibrant blue gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 50% 45%, #1d4ed8 0%, #1e3a8a 35%, #0c1c4d 65%, #030712 100%)
            `,
          }}
        />

        {/* Electric cyan-blue luminous beam at center-top */}
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[85vw] h-[60vw] max-w-[1200px] max-h-[750px] rounded-full blur-[110px] opacity-75 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.6) 0%, rgba(37, 99, 235, 0.5) 45%, rgba(29, 78, 216, 0.2) 70%, transparent 85%)",
          }}
        />

        {/* Ambient royal glow right side */}
        <div
          className="absolute top-[35%] -right-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[130px] opacity-60 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.7) 0%, rgba(30, 64, 175, 0.5) 50%, transparent 75%)",
          }}
        />

        {/* Subtle subtle depth gradient at the very top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#030712]/80" />
      </div>

      {/* Main Content: Header-aware viewport layout */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-24 sm:pt-30 lg:pt-28 pb-8 sm:pb-10 flex-1 flex flex-col justify-between overflow-x-hidden">
        
        {/* Massive Typographic Headline — Pure White, Framer UI/UX Agency Aesthetic */}
        <div className="w-full my-auto py-6 sm:py-8 lg:py-10">
          <div className="w-full flex flex-col">
            {/* Top Line: Left Aligned */}
            <div className="w-full text-left">
              <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[8.5vw] xl:text-[8vw] font-black uppercase tracking-[-0.04em] leading-[0.88] text-white drop-shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
                ANGEL DESIGN
              </h1>
            </div>

            {/* Bottom Line: Right Aligned (staggered composition) */}
            <div className="w-full text-right mt-1 sm:mt-2 md:mt-3">
              <span className="inline-block text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[8.5vw] xl:text-[8vw] font-black uppercase tracking-[-0.04em] leading-[0.88] text-white drop-shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
                STUDIO
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Split Bar: Short Copy + Scroll on Left, 3 Stat Blocks on Right */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 pt-6 border-t border-white/20">
          {/* Left Column: Short Paragraph Copy + Scroll Down Anchor */}
          <div className="flex flex-col max-w-md">
            <p className="text-sm sm:text-[15px] text-white/95 font-normal leading-relaxed mb-3 drop-shadow-sm">
              {language === "es"
                ? "Diseño web de alta conversión, automatizaciones inteligentes y sistemas digitales para escalar tu negocio en toda Latinoamérica."
                : "High-converting web design, smart automations, and digital systems built to scale your business across Latin America."}
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors group select-none"
            >
              <span className="border-b border-white/40 group-hover:border-white pb-0.5 transition-colors">
                Scroll Down
              </span>
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>

          {/* Right Column: 3 Metric Data Blocks */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-12 lg:gap-14 w-full sm:w-auto shrink-0">
            {/* Stat 1: Países */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-1 drop-shadow-md">
                +4
              </span>
              <span className="text-[11px] sm:text-sm text-neutral-200 font-medium leading-tight">
                {language === "es" ? "Países activos" : "Active Countries"}
              </span>
            </div>

            {/* Stat 2: Proyectos */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-1 drop-shadow-md">
                +10
              </span>
              <span className="text-[11px] sm:text-sm text-neutral-200 font-medium leading-tight">
                {language === "es" ? "Proyectos listos" : "Delivered"}
              </span>
            </div>

            {/* Stat 3: Entrega récord */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-1 drop-shadow-md whitespace-nowrap">
                &lt; 7 Días
              </span>
              <span className="text-[11px] sm:text-sm text-neutral-200 font-medium leading-tight">
                {language === "es" ? "Entrega récord" : "Record Delivery"}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
