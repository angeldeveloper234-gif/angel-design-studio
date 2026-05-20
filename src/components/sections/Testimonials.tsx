'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { urlForImage } from '@/sanity/lib/image';
import type { Image as SanityImage } from 'sanity';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  location: string;
  company: string;
  quote: string;
  image?: string;
  photo?: SanityImage;
  isLogo?: boolean;
}

import { useLanguage } from '@/context/LanguageContext';

const defaultTestimonialsEs: Testimonial[] = [
  {
    _id: '1',
    name: 'Dueño',
    role: 'Fumcon',
    location: 'México',
    company: 'Fumcon',
    quote: 'Siempre predispuestos y con una entrega de muy buena calidad. Estoy muy conforme con el resultado.',
    image: 'https://fumcon.com.mx/fumcon-logo.png',
    isLogo: true
  },
  {
    _id: '2',
    name: 'Jorge Guevara',
    role: 'BigCat & PCP Internacional',
    location: 'México',
    company: 'BigCat',
    quote: 'Están siempre a la altura de las expectativas. Entregan grandes resultados sin los procesos lentos de otras agencias.',
    image: 'https://bigcat.mx/logo/BIG%20CAT%20-%20Control%20de%20plagas.png',
    isLogo: true
  },
  {
    _id: '3',
    name: 'Pérez',
    role: 'Dueño',
    location: 'México',
    company: 'Pérez & González Asociados',
    quote: 'Nos entregaron algo muy profesional y sin vueltas innecesarias. Ahora nuestra presencia online refleja el nivel de nuestro estudio. Los recomendamos.',
    image: 'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Perez%20Gonzalez%20Co.%20Abogados/logo-gonzales.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJleiBHb256YWxleiBDby4gQWJvZ2Fkb3MvbG9nby1nb256YWxlcy5wbmciLCJpYXQiOjE3NjkyNzg5MDcsImV4cCI6MTgwMDgxNDkwN30.uRkGpMw4Gfncw30tO4h22P32vEEIlCCYh0Nca6ZgHDg',
    isLogo: true
  },
  {
    _id: '4',
    name: 'Miguel',
    role: 'Dueño',
    location: 'México',
    company: 'Villalba & Asociados',
    quote: 'Profesionales, rápidos y con muy buen criterio estético. El sitio quedó exactamente como lo necesitábamos para proyectar confianza a nuestros clientes.',
    image: 'https://banuelos-villalba-asociados.netlify.app/images/logo-white.svg',
    isLogo: true
  }
];

const defaultTestimonialsEn: Testimonial[] = [
  {
    _id: '1',
    name: 'Owner',
    role: 'Fumcon',
    location: 'Mexico',
    company: 'Fumcon',
    quote: 'Always willing to help and delivering very high-quality work. I am extremely satisfied with the result.',
    image: 'https://fumcon.com.mx/fumcon-logo.png',
    isLogo: true
  },
  {
    _id: '2',
    name: 'Jorge Guevara',
    role: 'BigCat & PCP International',
    location: 'Mexico',
    company: 'BigCat',
    quote: 'They always rise to expectations. They deliver great results without the slow processes of other agencies.',
    image: 'https://bigcat.mx/logo/BIG%20CAT%20-%20Control%20de%20plagas.png',
    isLogo: true
  },
  {
    _id: '3',
    name: 'Perez',
    role: 'Owner',
    location: 'Mexico',
    company: 'Perez & Gonzalez Associates',
    quote: 'They delivered something highly professional with no unnecessary delays. Our online presence now reflects our firm\'s high standard. Highly recommended.',
    image: 'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Perez%20Gonzalez%20Co.%20Abogados/logo-gonzales.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJleiBHb256YWxleiBDby4gQWJvZ2Fkb3MvbG9nby1nb256YWxlcy5wbmciLCJpYXQiOjE3NjkyNzg5MDcsImV4cCI6MTgwMDgxNDkwN30.uRkGpMw4Gfncw30tO4h22P32vEEIlCCYh0Nca6ZgHDg',
    isLogo: true
  },
  {
    _id: '4',
    name: 'Miguel',
    role: 'Owner',
    location: 'Mexico',
    company: 'Villalba & Associates',
    quote: 'Professional, fast, and with excellent aesthetic judgment. The site turned out exactly how we needed it to build client trust.',
    image: 'https://banuelos-villalba-asociados.netlify.app/images/logo-white.svg',
    isLogo: true
  }
];

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials: sanityTestimonials }: TestimonialsProps) {
  const { language, t } = useLanguage();
  const defaultTestimonials = language === "es" ? defaultTestimonialsEs : defaultTestimonialsEn;
  const testimonials = sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : defaultTestimonials;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 bg-background overflow-hidden relative w-full">
      {/* Background Decor - Constrained to prevent DOM stretching */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="space-y-4 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-accent uppercase block">
                {t("test.badge")}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              {language === "es" ? (
                <>
                  Lo que dicen <br className="hidden md:block" />
                  <span className="text-secondary/60 font-light italic">nuestros clientes</span>
                </>
              ) : (
                <>
                  What <br className="hidden md:block" />
                  <span className="text-secondary/60 font-light italic">our clients say</span>
                </>
              )}
            </motion.h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex gap-3 md:gap-4">
            <button
              ref={prevRef}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-border-custom/20 flex items-center justify-center text-foreground hover:bg-surface hover:border-accent/40 transition-all duration-300 active:scale-90 disabled:opacity-20 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center text-white hover:brightness-110 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 active:scale-90 disabled:opacity-20 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Slider Section - Ensuring no horizontal overflow */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {isLoaded ? (
              <motion.div
                key="swiper-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.1}
                  centeredSlides={true}
                  grabCursor={true}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    // @ts-expect-error Swiper types
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-expect-error Swiper types
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                      centeredSlides: true,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 24,
                      centeredSlides: false,
                    },
                    1024: {
                      slidesPerView: 2.2,
                      spaceBetween: 32,
                      centeredSlides: false,
                    },
                    1280: {
                      slidesPerView: 2.5,
                      spaceBetween: 40,
                      centeredSlides: false,
                    }
                  }}
                  className="testimonials-swiper !overflow-hidden pb-12"
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={item._id || index} className="h-auto px-2 sm:px-0">
                      <motion.div
                        className="bg-surface/30 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:min-h-[360px] border border-white/5 hover:border-accent/20 transition-all duration-700 relative group overflow-hidden"
                      >
                        {/* Decorative Quote Icon in background */}
                        <Quote size={60} className="absolute -top-4 -right-4 text-white/[0.03] rotate-12 group-hover:text-accent/[0.05] transition-colors duration-700 md:size-[120px] md:-top-6 md:-right-6" />

                        <div className="space-y-4 md:space-y-6 relative z-10">
                          {/* Top: Header info */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-background/40 rounded-full border border-white/5 backdrop-blur-xl">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              <span className="text-[9px] md:text-[10px] font-bold text-foreground tracking-widest uppercase">{item.company}</span>
                            </div>
                            
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-accent/40" />
                              ))}
                            </div>
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground leading-[1.4] md:leading-[1.3] tracking-tight">
                            &quot;{item.quote}&quot;
                          </p>
                        </div>

                        {/* Footer: User Details */}
                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 flex items-center gap-4 md:gap-5 relative z-10">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-accent/30 transition-colors duration-500 flex-shrink-0">
                            <Image
                              src={(item.photo ? urlForImage(item.photo).url() : item.image) || ''}
                              alt={item.name}
                              width={64}
                              height={64}
                              className={`w-full h-full ${item.isLogo ? 'object-contain p-2 bg-white/5' : 'object-cover'} grayscale group-hover:grayscale-0 transition-all duration-700`}
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-base sm:text-lg md:text-xl font-bold text-foreground tracking-tight truncate">{item.name}</span>
                            <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3 mt-0.5">
                              <span className="text-[9px] md:text-xs text-secondary font-medium uppercase tracking-wider truncate">
                                {item.role}
                              </span>
                              <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                              <span className="text-[8px] md:text-[10px] text-secondary/40 font-mono truncate">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            ) : (
              <div className="h-[280px] md:h-[360px] w-full bg-surface/10 rounded-[2rem] md:rounded-[2.5rem] animate-pulse mx-4 md:mx-0" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
