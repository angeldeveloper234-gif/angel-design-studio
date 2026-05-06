"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#servicios" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Proceso", href: "#proceso" },
  { name: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Facebook", href: "#", icon: FaFacebookF },
];

export default function Footer() {
  const currentYear = 2026;
  const [currentTime, setCurrentTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("es-AR", {
        timeZone: "America/Argentina/Salta",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      // Formatear para asegurar el estilo "a. m." o "p. m." solicitado
      const formatted = formatter.format(now).replace("AM", "a. m.").replace("PM", "p. m.");
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-background text-foreground pt-24 pb-12 overflow-hidden border-t border-border-custom/10">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image 
                  src="/favicon-angelstudiodesign.png" 
                  alt="Angel Design Studio Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full object-contain transition-transform group-hover:scale-110 drop-shadow-md"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight font-heading text-foreground">
                Angel Design Studio<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-secondary max-w-xs leading-relaxed mb-8">
              Especialistas en diseñar y desarrollar presencia digital de alto impacto para negocios que buscan escalar.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border-custom/20 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-accent">Navegación</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary hover:text-foreground transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-accent">Contacto</h4>
            <ul className="space-y-6">
              <li className="p-6 rounded-[2rem] bg-surface/50 border border-border-custom/10">
                <p className="text-sm text-secondary mb-4">
                  ¿Tienes un proyecto en mente? Hablemos hoy mismo.
                </p>
                <div className="flex flex-col gap-4">
                  <Link 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-accent hover:gap-3 transition-all"
                  >
                    Agendar llamada <ArrowUpRight size={16} />
                  </Link>
                  <a 
                    href="mailto:hola@angelstudio.design" 
                    className="text-sm font-medium text-secondary hover:text-accent transition-colors flex items-center gap-2"
                  >
                    hola@angelstudio.design
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-accent">Ubicación</h4>
            <div className="mb-8">
              <p className="text-foreground font-bold mb-1">Salta, Argentina.</p>
              <p className="text-secondary leading-relaxed">
                Desde Salta-Argentina, disponible en todo el mundo.
              </p>
            </div>
            
            <div className="mb-8 p-4 rounded-2xl bg-surface border border-border-custom/10 inline-flex flex-col">
              <p className="text-[10px] text-secondary/40 uppercase font-black tracking-[0.2em] mb-1">Hora Local (ART)</p>
              <p className="text-2xl font-black text-accent tracking-tighter tabular-nums">
                {currentTime || "00:00"}
              </p>
            </div>

            <div className="h-px w-full bg-border-custom/10 mb-8" />
            <p className="text-[10px] text-secondary/40 uppercase font-black tracking-[0.2em]">
              Innovación Constante
            </p>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-custom/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary text-sm">
            © {currentYear} Angel Design Studio. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs font-medium text-secondary/60 uppercase tracking-widest">
            <Link href="#" className="hover:text-foreground transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[15vw] font-black uppercase tracking-tighter leading-none text-foreground">
          ANGEL
        </span>
      </div>
    </footer>
  );
}
