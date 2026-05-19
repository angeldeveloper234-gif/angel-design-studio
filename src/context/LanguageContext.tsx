"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.portfolio": "Portfolio",
    "nav.process": "Proceso",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.cta": "Pide tu propuesta",
    
    // Hero
    "hero.title": "Agencia de diseño de páginas web & branding de alto impacto en toda Latinoamérica",
    "hero.subtitle": "Expertos en diseño web, posicionamiento SEO, branding y marketing digital de exportación. Creamos páginas web profesionales que consiguen clientes en México, Colombia, Chile, Argentina y toda la región.",
    "hero.cta1": "Quiero mi sitio web",
    "hero.cta2": "Ver proyectos",

    // NicheBand
    "niche.badge": "Expertos por Industria",
    "niche.pest": "Fumigaciones",
    "niche.construction": "Construcción",
    "niche.legal": "Servicios Legales",
    "niche.solar": "Paneles Solares",
    "niche.air": "Aire Acondicionado",
    "niche.restaurant": "Restaurantes",
    "niche.gym": "Gimnasios",

    // MarketProblem
    "market.badge": "La dura realidad",
    "market.title": "El 90% de los sitios web en Latinoamérica no consiguen clientes. Son invisibles.",
    "market.card1.title": "Estética sin estrategia",
    "market.card1.desc": "Se ven bonitos, pero no tienen un embudo claro. El usuario entra, se confunde y se va en 3 segundos.",
    "market.card2.title": "Lentos y pesados",
    "market.card2.desc": "Páginas que tardan una eternidad en cargar. En el celular de tu cliente, cada segundo de espera es una venta perdida.",
    "market.card3.title": "Cero posicionamiento",
    "market.card3.desc": "No aparecen en Google ni buscando su nombre. Si tu negocio no está en la primera página, no existes.",

    // Comparison
    "comp.badge": "Nuestra Diferencia",
    "comp.title": "Las agencias tradicionales te venden procesos. Nosotros resultados.",
    "comp.header.feature": "Característica",
    "comp.header.agency": "Agencia Tradicional",
    "comp.header.studio": "Angel Design Studio",
    "comp.row1.feature": "Tiempo de Entrega",
    "comp.row1.agency": "30 a 90 días (eterno)",
    "comp.row1.studio": "Menos de 7 días (récord)",
    "comp.row2.feature": "Diseño y Copywriting",
    "comp.row2.agency": "Plantillas genéricas repetidas",
    "comp.row2.studio": "Diseño a medida de conversión",
    "comp.row3.feature": "Optimización SEO",
    "comp.row3.agency": "Costo extra y básico",
    "comp.row3.studio": "Integrado y optimizado de inicio",
    "comp.row4.feature": "Soporte y Cambios",
    "comp.row4.agency": "Tardado y con cobros sorpresa",
    "comp.row4.studio": "Soporte rápido ilimitado",
    "comp.row5.feature": "Velocidad de Carga",
    "comp.row5.agency": "Lenta y pesada",
    "comp.row5.studio": "Puntuación de 95+ (Premium)",

    // Services
    "services.badge": "Qué Hacemos",
    "services.title": "Servicios diseñados para hacer crecer tu facturación",
    "services.card1.title": "Diseño Web de Conversión",
    "services.card1.desc": "Sitios web rápidos, responsivos y optimizados para convertir visitantes en clientes reales. Tu mejor vendedor 24/7.",
    "services.card2.title": "Posicionamiento SEO Local",
    "services.card2.desc": "Aparece primero cuando tus clientes busquen tus servicios en Google en tu ciudad y toda la región. Tráfico orgánico y leads constantes.",
    "services.card3.title": "Branding & Identidad",
    "services.card3.desc": "Logotipos, paletas de colores y sistemas visuales premium que transmiten confianza, autoridad y profesionalismo.",

    // Projects
    "projects.badge": "Casos de Éxito",
    "projects.title": "Proyectos que traen resultados reales",
    "projects.cta": "Ver el sitio en vivo",

    // Testimonials
    "test.badge": "Opiniones",
    "test.title": "Lo que dicen nuestros clientes",

    // Process
    "process.badge": "Cómo Trabajamos",
    "process.title": "De la idea a tu web lista en 3 simples pasos",
    "process.step1.title": "1. Estrategia & Estructura",
    "process.step1.desc": "Definimos la estructura comercial y los textos persuasivos enfocados en tu cliente ideal.",
    "process.step2.title": "2. Diseño & Desarrollo",
    "process.step2.desc": "Creamos una interfaz premium, rápida y totalmente adaptada a celulares y tablets.",
    "process.step3.title": "3. Lanzamiento & SEO",
    "process.step3.desc": "Publicamos tu sitio optimizado para Google y listo para empezar a captar prospectos.",

    // FAQ
    "faq.badge": "Preguntas Frecuentes",
    "faq.title": "Todo lo que necesitas saber",
    "faq.subtitle": "Resolvemos tus dudas para que podamos empezar a escalar tu negocio hoy mismo.",
    "faq.box.title": "¿Aún con dudas?",
    "faq.box.desc": "Estamos listos para escucharte. Resolvemos cualquier inquietud en tiempo real.",
    "faq.box.cta": "Contactar por WhatsApp",
    "faq.q1": "¿Cuánto tarda?",
    "faq.a1": "En Angel Design Studio (también conocido como Angel Design o por el error común Angel Desing) entregamos tu sitio web funcional en menos de 1 semana, dependiendo de la rapidez con la que nos pases tu información (logo, textos, fotos). Somos la agencia más rápida del mercado porque no usamos procesos burocráticos.",
    "faq.q2": "¿Qué necesito darte?",
    "faq.a2": "Básicamente el logo de tu marca, fotos de tus proyectos o servicios y los textos que quieras incluir. Si no tienes fotos o textos, nosotros podemos ayudarte a generarlos con Inteligencia Artificial para que se vean increíbles.",
    "faq.q3": "¿Qué pasa si quiero cambios?",
    "faq.a3": "Incluimos una fase de revisiones ilimitadas durante el proceso de diseño. Una vez publicada, tienes 30 días de soporte gratuito para ajustes menores, asegurando que todo funcione a la perfección.",
    "faq.q4": "¿Incluye dominio?",
    "faq.a4": "¡Sí! El primer año de dominio (.com o .com.ar) y hosting premium de alta velocidad están incluidos en todos nuestros planes. Nos encargamos de toda la configuración técnica por ti.",
    "faq.q5": "¿Buscas un design studio o agencia de digital marketing y web design cerca de mí?",
    "faq.a5": "Aunque nuestro centro de desarrollo principal está en Argentina, en Angel Design Studio (a veces buscado como ange design o angelstudio.design) operamos de forma 100% remota para toda Latinoamérica. Esto nos permite contar con talento de primer nivel y ofrecer la misma calidad y atención personalizada sin importar tu ubicación física.",
    "faq.q6": "¿Cómo cobran?",
    "faq.a6": "Solicitamos un 50% de anticipo para iniciar el proyecto y el 50% restante al finalizar, una vez que estés totalmente satisfecho con el resultado y antes del lanzamiento oficial.",

    // Contact
    "contact.badge": "Contacto",
    "contact.title": "Trabajemos juntos",
    "contact.subtitle": "Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas.",
    "contact.form.name": "Nombre Completo",
    "contact.form.name.ph": "Tu nombre...",
    "contact.form.email": "Correo Electrónico",
    "contact.form.email.ph": "tu@email.com",
    "contact.form.message": "Mensaje",
    "contact.form.message.ph": "Cuéntanos de tu negocio...",
    "contact.form.cta": "Enviar Propuesta",

    // Footer
    "footer.location": "Latinoamérica",
    "footer.desc": "Estrategias de diseño web, posicionamiento SEO y branding de exportación para México, Colombia, Chile, Argentina y toda la región.",
    "footer.timeLabel": "Hora Local (Buenos Aires HQ)",
    "footer.rights": "Todos los derechos reservados."
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.cta": "Get a proposal",

    // Hero
    "hero.title": "High-impact web design & branding agency serving all of Latin America",
    "hero.subtitle": "Experts in web design, SEO positioning, branding, and digital marketing. We create professional websites that get clients in Mexico, Colombia, Chile, Argentina, and across the region.",
    "hero.cta1": "Get My Website",
    "hero.cta2": "View Projects",

    // NicheBand
    "niche.badge": "Industry Experts",
    "niche.pest": "Pest Control",
    "niche.construction": "Construction",
    "niche.legal": "Legal Services",
    "niche.solar": "Solar Panels",
    "niche.air": "Air Conditioning",
    "niche.restaurant": "Restaurants",
    "niche.gym": "Gyms",

    // MarketProblem
    "market.badge": "The Harsh Reality",
    "market.title": "90% of websites in Latin America do not get clients. They are invisible.",
    "market.card1.title": "Aesthetics Without Strategy",
    "market.card1.desc": "They look nice, but lack a clear funnel. Users enter, get confused, and leave in 3 seconds.",
    "market.card2.title": "Slow and Heavy",
    "market.card2.desc": "Pages that take forever to load. On your client's mobile, every second of waiting is a lost sale.",
    "market.card3.title": "Zero Visibility",
    "market.card3.desc": "They don't show up on Google even when searching their name. If your business is not on the first page, you don't exist.",

    // Comparison
    "comp.badge": "Our Difference",
    "comp.title": "Traditional agencies sell you processes. We sell results.",
    "comp.header.feature": "Feature",
    "comp.header.agency": "Traditional Agency",
    "comp.header.studio": "Angel Design Studio",
    "comp.row1.feature": "Delivery Time",
    "comp.row1.agency": "30 to 90 days (eternal)",
    "comp.row1.studio": "Under 7 days (record)",
    "comp.row2.feature": "Design & Copywriting",
    "comp.row2.agency": "Generic repeated templates",
    "comp.row2.studio": "Custom conversion-focused design",
    "comp.row3.feature": "SEO Optimization",
    "comp.row3.agency": "Basic & extra cost",
    "comp.row3.studio": "Integrated & optimized from the start",
    "comp.row4.feature": "Support & Changes",
    "comp.row4.agency": "Slow with surprise charges",
    "comp.row4.studio": "Unlimited fast support",
    "comp.row5.feature": "Page Load Speed",
    "comp.row5.agency": "Slow and heavy",
    "comp.row5.studio": "95+ score (Premium)",

    // Services
    "services.badge": "What We Do",
    "services.title": "Services designed to grow your revenue",
    "services.card1.title": "Conversion Web Design",
    "services.card1.desc": "Fast, responsive websites optimized to turn visitors into real clients. Your best 24/7 salesperson.",
    "services.card2.title": "Local SEO Positioning",
    "services.card2.desc": "Rank first when clients search for your services in Google in your city and across the region. Organic traffic and steady leads.",
    "services.card3.title": "Branding & Identity",
    "services.card3.desc": "Premium logos, color palettes, and visual systems that convey trust, authority, and professionalism.",

    // Projects
    "projects.badge": "Success Cases",
    "projects.title": "Projects that bring real results",
    "projects.cta": "View Live Site",

    // Testimonials
    "test.badge": "Reviews",
    "test.title": "What our clients say",

    // Process
    "process.badge": "How We Work",
    "process.title": "From idea to ready website in 3 simple steps",
    "process.step1.title": "1. Strategy & Structure",
    "process.step1.desc": "We define the commercial structure and persuasive copywriting focused on your ideal client.",
    "process.step2.title": "2. Design & Development",
    "process.step2.desc": "We create a premium, fast interface fully adapted to mobile devices and tablets.",
    "process.step3.title": "3. Launch & SEO",
    "process.step3.desc": "We publish your site optimized for Google and ready to start capturing prospects.",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Everything you need to know",
    "faq.subtitle": "We solve your doubts so we can start scaling your business today.",
    "faq.box.title": "Still have questions?",
    "faq.box.desc": "We are ready to listen. We resolve any concern in real time.",
    "faq.box.cta": "Contact via WhatsApp",
    "faq.q1": "How long does it take?",
    "faq.a1": "At Angel Design Studio (also known as Angel Design or by the common typo Angel Desing) we deliver your functional website in less than 1 week, depending on how quickly you send us your information (logo, texts, photos). We are the fastest agency in the market because we do not use bureaucratic processes.",
    "faq.q2": "What do I need to provide?",
    "faq.a2": "Basically your brand logo, photos of your projects or services, and the texts you want to include. If you don't have photos or texts, we can help you generate them with Artificial Intelligence so they look amazing.",
    "faq.q3": "What if I want changes?",
    "faq.a3": "We include an unlimited revisions phase during the design process. Once published, you have 30 days of free support for minor adjustments, ensuring everything works perfectly.",
    "faq.q4": "Does it include a domain?",
    "faq.a4": "Yes! The first year of domain (.com or .com.ar) and premium high-speed hosting are included in all our plans. We handle all the technical configuration for you.",
    "faq.q5": "Looking for a design studio or digital marketing and web design agency near me?",
    "faq.a5": "Although our main development center is based in Argentina, at Angel Design Studio (sometimes searched as ange design or angelstudio.design) we work 100% remotely for all of Latin America. This allows us to have top-tier talent and offer the same quality and personalized attention regardless of your physical location.",
    "faq.q6": "How do you charge?",
    "faq.a6": "We request a 50% deposit to start the project and the remaining 50% upon completion, once you are fully satisfied with the result and before the official launch.",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Let's work together",
    "contact.subtitle": "Tell us about your project and we will send you a personalized proposal in less than 24 hours.",
    "contact.form.name": "Full Name",
    "contact.form.name.ph": "Your name...",
    "contact.form.email": "Email Address",
    "contact.form.email.ph": "you@email.com",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Tell us about your business...",
    "contact.form.cta": "Send Proposal",

    // Footer
    "footer.location": "Latin America",
    "footer.desc": "High-impact web design, SEO positioning, and branding strategies for Mexico, Colombia, Chile, Argentina, and across the region.",
    "footer.timeLabel": "Local Time (Buenos Aires HQ)",
    "footer.rights": "All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "es" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string): string => {
    const dict = translations[language] || translations.es;
    return (dict as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
