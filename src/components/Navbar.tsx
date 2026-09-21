"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const isFumigacion = pathname === "/fumigacion";

  const currentNavLinks = isFumigacion
    ? [
        { name: language === "es" ? "Servicios" : "Services", href: "#servicios" },
        { name: language === "es" ? "Precios" : "Prices", href: "#precios" },
        { name: language === "es" ? "Portafolio" : "Portfolio", href: "#portafolio" },
      ]
    : [
        { name: language === "es" ? "Inicio" : "Home", href: "/" },
        { name: language === "es" ? "Servicios" : "Services", href: "/#services" },
        { name: language === "es" ? "Portafolio" : "Portfolio", href: "/#projects" },
        { name: language === "es" ? "Proceso" : "Process", href: "/#process" },
        { name: "FAQ", href: "/#faq" },
        { name: "Blog", href: "/blog" },
      ];

  const ctaText = isFumigacion
    ? language === "es"
      ? "Empezar"
      : "Start"
    : language === "es"
    ? "Contactar"
    : "Contact Us";

  const ctaHref = isFumigacion ? "#precios" : "/#contact";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide Navbar in Sanity Studio
  if (pathname?.startsWith("/studio")) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href={isFumigacion ? "/fumigacion" : "/"}
          className="flex items-center gap-2 group relative z-10 shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex items-center justify-center shrink-0">
            <Image
              src="/logo-icon-white.svg"
              alt="Angel Design Studio Logo"
              width={32}
              height={32}
              priority
              className="w-full h-full object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <span className="font-heading font-black text-sm sm:text-lg lg:text-xl tracking-tight text-white select-none whitespace-nowrap">
            <span className="sm:hidden">Angel Studio</span>
            <span className="hidden sm:inline">Angel Design Studio</span>
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {currentNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action: Pill CTA + Language Switcher + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Pill CTA Button (Framer style: pure white pill with black text & arrow) */}
          <Link
            href={ctaHref}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-black hover:bg-neutral-200 px-5 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-200 shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>{ctaText}</span>
            <ArrowUpRight size={16} className="stroke-[2.5]" />
          </Link>

          {/* Minimalist Language Switcher */}
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/15 rounded-full p-0.5 text-[11px] font-bold">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === "es"
                  ? "bg-white text-black shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === "en"
                  ? "bg-white text-black shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 mx-4 mt-3 p-6 bg-[#080d1e]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl flex flex-col gap-4 z-50"
          >
            <div className="flex flex-col gap-1">
              {currentNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white/90 hover:text-white py-3 border-b border-white/10 tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              href={ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg active:scale-95"
            >
              <span>{ctaText}</span>
              <ArrowUpRight size={18} className="stroke-[2.5]" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
