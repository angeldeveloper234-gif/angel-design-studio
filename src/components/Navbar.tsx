"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const navLinks = [
  { name: "Servicios", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "Proceso", href: "#process" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      {/* Optional: subtle background gradient when scrolled to ensure visibility */}
      <div className={`absolute inset-0 transition-opacity duration-500 -z-10 ${
        scrolled ? "opacity-100 bg-background/80 backdrop-blur-md border-b border-border-custom/10" : "opacity-0"
      }`} />

      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-10">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image 
              src="/favicon-angelstudiodesign.png" 
              alt="Angel Design Studio Logo" 
              width={40}
              height={40}
              className="w-full h-full object-contain transition-transform group-hover:scale-110 drop-shadow-md"
            />
          </div>
          <span className="hidden sm:block font-bold text-xl tracking-tight font-heading transition-colors duration-300 text-foreground">
            Angel Design Studio
          </span>
        </Link>

        {/* Nav Pill - The container described by the user */}
        <nav className="flex items-center bg-surface/50 backdrop-blur-xl rounded-full p-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border-custom/10 transition-all duration-300">
          <div className="hidden md:flex items-center gap-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-[13px] font-bold text-secondary hover:text-foreground transition-all rounded-full hover:bg-white/5 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link 
            href="#contact"
            className="bg-accent text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.05em] md:tracking-[0.1em] hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            Pide tu propuesta
          </Link>

          {/* Mobile Menu Button - inside the pill on mobile */}
          <button 
            className="md:hidden p-3 ml-1 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-4 mx-6 p-6 bg-surface/95 backdrop-blur-xl border border-border-custom/20 rounded-[24px] shadow-2xl flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-bold text-foreground py-3 border-b border-border-custom/10 tracking-wide uppercase transition-colors hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
