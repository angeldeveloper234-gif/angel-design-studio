'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Check, ArrowRight, Mail, Globe, Palette, Map, FileText, Megaphone, Smartphone, Building2, MonitorSmartphone, Bot, ChevronRight } from 'lucide-react';
import { getDynamicWhatsAppNumber } from '@/hooks/useWhatsAppLink';

type PlanType = 'A' | 'B' | 'C' | 'D';
type ThemeType = 1 | 2 | 3 | 4;
type MaintenanceType = 199 | 399;
type Step = 1 | 2 | 3 | 4 | 5;

interface FumigationOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PlanType | null;
}

interface Selections {
  planType: PlanType | null;
  theme: ThemeType | null;
  addons: {
    emails: number;
    domain: boolean;
    branding: boolean;
    seo: boolean;
    map: boolean;
    form: boolean;
    ads: boolean;
  };
  maintenance: MaintenanceType | null;
  companyName: string;
  city: string;
}

const THEMES = [
  { id: 1, name: 'Theme 1 — Fumigación Profesional', desc: 'Estilo oscuro y técnico. Para servicios industriales y pólizas comerciales.', price: 1599 },
  { id: 2, name: 'Theme 2 — Control Nacional', desc: 'Limpio y corporativo. Para empresas con cobertura en varias ciudades.', price: 1599 },
  { id: 3, name: 'Theme 3 — Residencial', desc: 'Cálido y directo. Para fumigadoras que atienden casas y departamentos.', price: 1599 },
  { id: 4, name: 'Theme 4 — Restaurantes y Comercios', desc: 'Institucional y formal. Para clientes que manejan pólizas con COFEPRIS.', price: 1599 },
];

export default function FumigationOnboardingModal({ isOpen, onClose, initialPlan = null }: FumigationOnboardingModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [highestStep, setHighestStep] = useState<number>(1);
  const [selections, setSelections] = useState<Selections>({
    planType: initialPlan,
    theme: null,
    addons: { emails: 0, domain: false, branding: false, seo: false, map: false, form: false, ads: false },
    maintenance: 199,
    companyName: '',
    city: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (initialPlan) {
        setSelections(prev => ({ ...prev, planType: initialPlan }));
        setHighestStep(2);
        setStep(2);
      } else {
        setStep(1);
        setHighestStep(1);
        setSelections({
          planType: null,
          theme: null,
          addons: { emails: 0, domain: false, branding: false, seo: false, map: false, form: false, ads: false },
          maintenance: 199,
          companyName: '',
          city: '',
        });
      }
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen, initialPlan]);

  if (!isOpen) return null;

  const getBasePrice = () => {
    switch (selections.planType) {
      case 'A': return 1599;
      case 'B': return 3199;
      case 'C': return 4999;
      case 'D': return 1900;
      default: return 0;
    }
  };

  const getPlanName = () => {
    switch (selections.planType) {
      case 'A': return selections.theme ? `Theme ${selections.theme}` : 'Diseño Pre-armado';
      case 'B': return 'Plan Custom';
      case 'C': return 'Plan Empresa Nacional';
      case 'D': return 'Plan Sistema (Solo Automatización)';
      default: return 'Seleccionando...';
    }
  };

  const getAddonsTotal = () => {
    let total = 0;
    if (selections.addons.emails > 0) total += selections.addons.emails * 150;
    if (selections.addons.domain) total += 350;
    if (selections.addons.branding) total += 900;
    if (selections.addons.seo) total += 1200;
    if (selections.addons.map) total += 400;
    if (selections.addons.form) total += 450;
    if (selections.addons.ads) total += 1100;
    return total;
  };

  const getTotalSetup = () => getBasePrice() + getAddonsTotal();

  const generateWhatsAppLink = () => {
    const phoneNumber = getDynamicWhatsAppNumber();
    let message = `*NUEVO PROYECTO WEB - FUMIGACIÓN* 🕷️\n\n`;
    message += `*Empresa:* ${selections.companyName || 'No especificado'}\n`;
    message += `*Ubicación:* ${selections.city || 'No especificada'}\n\n`;
    
    message += `*— SELECCIÓN DE PLAN —*\n`;
    message += `*Plan:* ${getPlanName()}\n`;
    if (selections.planType === 'A' && selections.theme) {
      message += `*Theme elegido:* ${selections.theme}\n`;
    }
    message += `*Inversión Inicial Base:* $${getBasePrice().toLocaleString('es-MX')} MXN\n\n`;

    const activeAddons = [];
    if (selections.addons.emails > 0) activeAddons.push(`${selections.addons.emails} Correos corporativos`);
    if (selections.addons.domain) activeAddons.push('Dominio alternativo');
    if (selections.addons.branding) activeAddons.push('Branding básico');
    if (selections.addons.seo) activeAddons.push('SEO Local Avanzado');
    if (selections.addons.map) activeAddons.push('Mapa interactivo de zonas');
    if (selections.addons.form) activeAddons.push('Formulario de cotización');
    if (selections.addons.ads) activeAddons.push('Setup Google Ads');

    if (activeAddons.length > 0) {
      message += `*— COMPLEMENTOS (Addons) —*\n`;
      activeAddons.forEach(addon => {
        message += `• ${addon}\n`;
      });
      message += `*Total Complementos:* $${getAddonsTotal().toLocaleString('es-MX')} MXN\n\n`;
    }

    message += `*— MANTENIMIENTO MENSUAL —*\n`;
    message += `*Opción:* ${selections.maintenance === 199 ? 'Mantenimiento Esencial' : 'Mantenimiento Completo'}\n`;
    message += `*Costo Mensual:* $${selections.maintenance} MXN\n\n`;

    message += `*— RESUMEN DE INVERSIÓN —*\n`;
    message += `*TOTAL A PAGAR HOY (Setup):* $${getTotalSetup().toLocaleString('es-MX')} MXN\n`;
    if (selections.maintenance && selections.maintenance > 0) {
      message += `*A partir del día 30:* $${selections.maintenance} MXN / mes\n`;
    }

    message += `\n¡Hola equipo de Ángel Design! Esta es la configuración de mi proyecto. Me gustaría proceder con el pago inicial.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const renderAccordionItem = (
    stepNum: Step,
    title: string,
    children: React.ReactNode
  ) => {
    const isAccessible = stepNum <= highestStep;
    const isOpen = step === stepNum;
    const isCompleted = highestStep > stepNum;

    return (
      <div className={`mb-4 rounded-xl border overflow-hidden transition-all duration-300 ${isAccessible ? (isOpen ? 'border-accent ring-1 ring-accent bg-surface/50' : 'border-accent bg-background/30 hover:border-accent/80 hover:bg-white/5') : 'border-white/5 bg-background/10 opacity-50'}`}>
        <button
          onClick={() => { if (isAccessible) setStep(stepNum) }}
          className={`w-full flex items-center justify-between p-4 md:p-6 transition-colors ${!isAccessible && 'cursor-not-allowed'}`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isAccessible ? 'bg-accent text-background' : 'bg-white/10 text-secondary'}`}>
              {isCompleted && !isOpen ? <Check size={16} /> : stepNum}
            </div>
            <span className={`font-bold md:text-lg transition-colors ${isAccessible ? 'text-accent' : 'text-secondary'}`}>{title}</span>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isAccessible ? 'bg-accent text-background' : 'bg-white/10 text-secondary'}`}>
            <ChevronRight size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="p-4 md:p-6 pt-0 border-t border-white/5 mt-2">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#050505]" data-lenis-prevent="true">
      {/* Top Header Nav */}
      <div className="h-16 md:h-20 border-b border-white/5 flex items-center justify-between px-4 sm:px-6 md:px-12 shrink-0 bg-surface/50 backdrop-blur-md">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <Image 
              src="/favicon-angelstudiodesign.png" 
              alt="Angel Design Studio Logo" 
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-foreground tracking-tight text-base md:text-xl font-heading">
            Angel Design Studio
          </span>
        </div>
        
        <button 
          onClick={onClose}
          className="flex items-center gap-2 hover:bg-white/5 px-2 py-1.5 md:px-3 rounded-full transition-colors group"
        >
          <span className="text-secondary group-hover:text-foreground text-[10px] md:text-xs uppercase tracking-widest font-bold hidden sm:block">Cerrar</span>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-white/10 text-foreground group-hover:border-white/20 transition-colors">
            <X size={16} />
          </div>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex justify-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          className="w-full h-full max-w-[1400px] flex flex-col md:flex-row md:gap-6 p-0 md:p-6 lg:p-8"
        >
          {/* Left Side: Accordion Flow */}
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-surface md:border border-white/10 md:rounded-2xl relative shadow-2xl">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-10 lg:p-12" data-lenis-prevent="true">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">Armá tu propuesta en 2 minutos</h2>
                <p className="text-secondary text-sm md:text-base">Sin formularios largos. Al final te conectamos directo por WhatsApp.</p>
              </div>

              {/* Accordion Steps */}
              {renderAccordionItem(1, "Modalidad del Proyecto", (
                <div className="grid gap-4 mt-2">
                  {[
                    { id: 'A', icon: MonitorSmartphone, title: 'Necesito web rápida y lista', desc: 'Elegís uno de nuestros diseños pre-armados para fumigadoras. Online en 3-5 días.' },
                    { id: 'B', icon: Palette, title: 'Quiero un diseño propio y personalizado', desc: 'Diseño desde cero adaptado a tu marca. Más páginas, más secciones.' },
                    { id: 'C', icon: Building2, title: 'Tengo empresa con operación en varias ciudades', desc: 'Solución completa con automatizaciones, SEO y estrategia. Para escalar.' },
                    { id: 'D', icon: Bot, title: 'Solo quiero automatizar mi WhatsApp', desc: 'Chatbot IA que atiende, filtra y agenda clientes las 24hs.' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelections(prev => ({ ...prev, planType: option.id as PlanType }));
                        setHighestStep(Math.max(highestStep, 2));
                        setTimeout(() => setStep(2), 300);
                      }}
                      className={`text-left p-5 rounded-xl border flex gap-4 transition-all ${
                        selections.planType === option.id 
                          ? 'bg-accent/10 border-accent ring-1 ring-accent' 
                          : 'bg-background/50 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className={`mt-1 shrink-0 ${selections.planType === option.id ? 'text-accent' : 'text-secondary'}`}>
                        <option.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{option.title}</h4>
                        <p className="text-sm text-secondary">{option.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ))}

              {renderAccordionItem(2, "Diseño & Detalles", (
                <div className="mt-2">
                  {!selections.planType && <p className="text-secondary text-sm">Por favor, elige una modalidad en el Paso 1.</p>}
                  
                  {selections.planType === 'A' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => {
                            setSelections(prev => ({ ...prev, theme: theme.id as ThemeType }));
                            setHighestStep(Math.max(highestStep, 3));
                            setTimeout(() => setStep(3), 300);
                          }}
                          className={`text-left rounded-xl border overflow-hidden transition-all group ${
                            selections.theme === theme.id 
                              ? 'border-accent ring-1 ring-accent' 
                              : 'border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="h-32 bg-background/50 relative p-4 flex items-center justify-center">
                            <span className="text-secondary/30 font-bold uppercase tracking-widest text-sm">PREVIEW THEME {theme.id}</span>
                            {selections.theme === theme.id && (
                              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                <Check size={14} className="text-background" />
                              </div>
                            )}
                          </div>
                          <div className="p-4 bg-surface/50">
                            <h4 className="font-bold text-foreground mb-1">{theme.name}</h4>
                            <p className="text-xs text-secondary mb-3">{theme.desc}</p>
                            <p className="text-sm font-bold text-accent">${theme.price.toLocaleString('es-MX')} MXN</p>
                          </div>
                        </button>
                      ))}
                      <div className="col-span-full">
                        <p className="text-xs text-secondary/60 mt-4 text-center">Todos los diseños incluyen dominio .com.mx, mobile-first y botones de WhatsApp.</p>
                      </div>
                    </div>
                  )}

                  {selections.planType === 'B' && (
                    <div className="bg-background/50 border border-white/10 rounded-xl p-6 md:p-8">
                      <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl font-black text-foreground">$3,199</span>
                        <span className="text-secondary font-bold text-sm mb-1">MXN / pago único</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {['Diseño desde cero (sin themes)', 'Hasta 6 páginas interiores', 'Galería de trabajos y métodos', 'Sección de certificaciones sanitarias', 'Cobertura por zonas', 'Correos corporativos incluidos', 'SEO avanzado'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5"><Check size={12} className="text-accent" /></div>
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => {
                          setHighestStep(Math.max(highestStep, 3));
                          setStep(3);
                        }}
                        className="w-full py-4 bg-foreground text-background font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                      >
                        Confirmar y continuar <ArrowRight size={18} />
                      </button>
                    </div>
                  )}

                  {selections.planType === 'C' && (
                    <div className="bg-background/50 border border-white/10 rounded-xl p-6 md:p-8">
                      <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl font-black text-foreground">$4,999</span>
                        <span className="text-secondary font-bold text-sm mb-1">MXN / pago único</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {['Todo lo del Plan Custom', 'Chatbot WhatsApp 24/7 con CRM en Google Sheets', 'Flujo automático por tipo de plaga y zona', 'Asistente AI de llamadas (Beta)', 'Estrategia SEO proyectada a 3 meses', '2 sesiones de estrategia con el equipo', 'Sin costos de licencias de software externo'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5"><Check size={12} className="text-accent" /></div>
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => {
                          setHighestStep(Math.max(highestStep, 3));
                          setStep(3);
                        }}
                        className="w-full py-4 bg-foreground text-background font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                      >
                        Confirmar y continuar <ArrowRight size={18} />
                      </button>
                    </div>
                  )}

                  {selections.planType === 'D' && (
                    <div className="bg-background/50 border border-white/10 rounded-xl p-6 md:p-8">
                      <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl font-black text-foreground">$1,900</span>
                        <span className="text-secondary font-bold text-sm mb-1">MXN / pago único</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {['Setup completo de WhatsApp Business API', 'Chatbot IA entrenado con tus precios y zonas', 'Flujo de cotización automática de fumigaciones', 'Derivación inteligente a humanos', 'Integración con CRM (Google Sheets)'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5"><Check size={12} className="text-accent" /></div>
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => {
                          setHighestStep(Math.max(highestStep, 3));
                          setStep(3);
                        }}
                        className="w-full py-4 bg-foreground text-background font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                      >
                        Confirmar y continuar <ArrowRight size={18} />
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {renderAccordionItem(3, "Complementos (Opcional)", (
                <div className="mt-2 space-y-3">
                  <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${selections.addons.emails > 0 ? 'bg-accent/5 border-accent/50' : 'bg-background/50 border-white/5 hover:border-white/20'}`}>
                    <div className="flex items-start gap-3">
                      <Mail className="shrink-0 text-secondary mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-foreground text-sm">Correos corporativos</h4>
                        <p className="text-xs text-secondary">$150 MXN por casilla</p>
                      </div>
                    </div>
                    <select 
                      value={selections.addons.emails} 
                      onChange={(e) => setSelections(prev => ({ ...prev, addons: { ...prev.addons, emails: parseInt(e.target.value) } }))}
                      className="bg-surface border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent"
                    >
                      <option value={0}>No necesito</option>
                      <option value={1}>1 correo (+$150)</option>
                      <option value={3}>3 correos (+$450)</option>
                      <option value={5}>5 correos (+$750)</option>
                      <option value={10}>10 correos (+$1,500)</option>
                    </select>
                  </div>

                  {[
                    { id: 'domain', icon: Globe, title: 'Dominio alternativo (.com / .mx / .net)', desc: 'Si necesitás otro dominio además del .com.mx', price: 350 },
                    { id: 'branding', icon: Palette, title: 'Branding básico', desc: 'Te armamos identidad visual si no tenés', price: 900 },
                    { id: 'seo', icon: Megaphone, title: 'SEO Local avanzado (3 meses)', desc: 'Para aparecer primero en Google Maps de tu ciudad', price: 1200 },
                    { id: 'map', icon: Map, title: 'Mapa interactivo de zonas', desc: 'El cliente ingresa su colonia y sabe si tenés cobertura', price: 400 },
                    { id: 'form', icon: FileText, title: 'Formulario de cotización automático', desc: 'El cliente completa tipo de plaga, metros y recibe precio', price: 450 },
                    { id: 'ads', icon: Smartphone, title: 'Setup Google Ads', desc: 'Campaña inicial configurada para búsquedas en tu zona', price: 1100 },
                  ].map((addon) => (
                    <label key={addon.id} className={`p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-colors ${selections.addons[addon.id as keyof typeof selections.addons] ? 'bg-accent/5 border-accent/50' : 'bg-background/50 border-white/5 hover:border-white/20'}`}>
                      <div className="flex items-start gap-3">
                        <addon.icon className={`shrink-0 mt-1 ${selections.addons[addon.id as keyof typeof selections.addons] ? 'text-accent' : 'text-secondary'}`} size={20} />
                        <div>
                          <h4 className="font-bold text-foreground text-sm">{addon.title}</h4>
                          <p className="text-xs text-secondary">{addon.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-sm font-bold text-accent">+${addon.price}</span>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${selections.addons[addon.id as keyof typeof selections.addons] ? 'bg-accent border-accent' : 'border-white/20'}`}>
                          {selections.addons[addon.id as keyof typeof selections.addons] && <Check size={14} className="text-background" />}
                        </div>
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={selections.addons[addon.id as keyof typeof selections.addons] as boolean}
                          onChange={(e) => setSelections(prev => ({ ...prev, addons: { ...prev.addons, [addon.id]: e.target.checked } }))}
                        />
                      </div>
                    </label>
                  ))}

                  <div className="mt-8 pt-4 flex justify-end border-t border-white/5">
                    <button 
                      onClick={() => {
                        setHighestStep(Math.max(highestStep, 4));
                        setStep(4);
                      }}
                      className="bg-foreground text-background px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                    >
                      Continuar <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}

              {renderAccordionItem(4, "Mantenimiento Mensual", (
                <div className="grid gap-4 mt-2">
                  {[
                    { id: 199, title: 'Mantenimiento Esencial', desc: 'Hosting seguro, actualizaciones de contenido, soporte por WhatsApp', price: 199, badge: 'Recomendado' },
                    { id: 399, title: 'Mantenimiento Completo', desc: 'Todo lo anterior + cambios ilimitados de contenido + reportes mensuales de visitas', price: 399 },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelections(prev => ({ ...prev, maintenance: opt.id as MaintenanceType }));
                        setHighestStep(5);
                        setTimeout(() => setStep(5), 300);
                      }}
                      className={`text-left p-5 rounded-xl border flex flex-col sm:flex-row justify-between gap-4 transition-all relative overflow-hidden ${
                        selections.maintenance === opt.id 
                          ? 'bg-accent/10 border-accent ring-1 ring-accent' 
                          : 'bg-background/50 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {opt.badge && (
                        <div className="absolute top-0 right-0 bg-accent text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                          {opt.badge}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{opt.title}</h4>
                        <p className="text-sm text-secondary">{opt.desc}</p>
                      </div>
                      <div className="shrink-0 flex items-center sm:items-start">
                        <span className="text-xl font-bold text-foreground">${opt.price}<span className="text-sm text-secondary font-normal">/mes</span></span>
                      </div>
                    </button>
                  ))}
                </div>
              ))}

              {renderAccordionItem(5, "Finalizar Propuesta", (
                <div className="mt-2 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest">¿Cuál es el nombre de tu empresa?</label>
                      <input 
                        type="text" 
                        value={selections.companyName}
                        onChange={(e) => setSelections(prev => ({ ...prev, companyName: e.target.value }))}
                        placeholder="Ej. Fumigaciones Express"
                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest">¿En qué ciudad / estado operás?</label>
                      <input 
                        type="text" 
                        value={selections.city}
                        onChange={(e) => setSelections(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="Ej. Monterrey, Nuevo León"
                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <a 
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selections.companyName || !selections.city) {
                        e.preventDefault();
                        alert('Por favor, completa el nombre de tu empresa y ciudad antes de continuar.');
                      }
                    }}
                    className="flex justify-center items-center gap-2 bg-accent text-background px-6 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(var(--accent),0.3)] w-full"
                  >
                    Confirmar por WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Order Summary (Hidden on mobile) */}
          <div className="hidden md:flex w-80 lg:w-[400px] bg-surface md:border border-white/10 md:rounded-2xl p-8 flex-col justify-between overflow-y-auto custom-scrollbar shadow-2xl" data-lenis-prevent="true">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                <FileText size={20} className="text-accent" /> Order Summary
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-secondary font-bold uppercase tracking-widest">Setup Fee</span>
                    <span className="text-accent font-bold">${getTotalSetup().toLocaleString('es-MX')} MXN</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 border border-white/5">
                    <div className="flex justify-between text-xs text-foreground">
                      <span>{getPlanName()}</span>
                      <span className="text-secondary">${getBasePrice().toLocaleString('es-MX')}</span>
                    </div>
                    {selections.addons.emails > 0 && <div className="flex justify-between text-xs text-foreground/80"><span>Correos x{selections.addons.emails}</span><span>${selections.addons.emails * 150}</span></div>}
                    {selections.addons.domain && <div className="flex justify-between text-xs text-foreground/80"><span>Dominio</span><span>$350</span></div>}
                    {selections.addons.branding && <div className="flex justify-between text-xs text-foreground/80"><span>Branding</span><span>$900</span></div>}
                    {selections.addons.seo && <div className="flex justify-between text-xs text-foreground/80"><span>SEO Local</span><span>$1,200</span></div>}
                    {selections.addons.map && <div className="flex justify-between text-xs text-foreground/80"><span>Mapa</span><span>$400</span></div>}
                    {selections.addons.form && <div className="flex justify-between text-xs text-foreground/80"><span>Formulario</span><span>$450</span></div>}
                    {selections.addons.ads && <div className="flex justify-between text-xs text-foreground/80"><span>Google Ads</span><span>$1,100</span></div>}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-secondary font-bold uppercase tracking-widest">Monthly Fee</span>
                    <span className="text-accent font-bold">${selections.maintenance || 0} MXN</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-white/5">
                    <div className="flex justify-between text-xs text-foreground">
                      <span>{selections.maintenance === 199 ? 'Esencial' : 'Completo'}</span>
                      <span className="text-secondary">${selections.maintenance || 0}/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-8">
              <div className="flex items-end justify-between mb-2">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Total Due Today</span>
                <span className="text-2xl font-black text-foreground">${getTotalSetup().toLocaleString('es-MX')} MXN</span>
              </div>
              {(selections.maintenance ?? 0) > 0 && (
                <p className="text-xs text-secondary/60">
                  Monthly fee of <span className="text-foreground">${selections.maintenance}</span> starts on {(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)).toLocaleDateString('es-MX', { day: 'numeric', month: 'numeric', year: 'numeric' })}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
