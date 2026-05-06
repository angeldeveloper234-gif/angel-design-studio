'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Dueño, Constructora M',
    location: 'CDMX, México',
    company: 'Constructora M',
    quote: 'Nos entregaron la web en una semana y empezamos a recibir consultas de clientes de inmediato.',
    image: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    name: 'Ana Silva',
    role: 'Directora, Estudio Legal',
    location: 'Monterrey, México',
    company: 'Silva Abogados',
    quote: 'El diseño es súper profesional. Captaron la seriedad que buscábamos pero con un toque moderno.',
    image: 'https://i.pravatar.cc/150?u=ana'
  },
  {
    name: 'Roberto Gómez',
    role: 'Gerente, PanelSolar Tech',
    location: 'Guadalajara, México',
    company: 'PanelSolar Tech',
    quote: 'La automatización de WhatsApp nos salvó la vida. Ahora los clientes se filtran solos.',
    image: 'https://i.pravatar.cc/150?u=roberto'
  },
  {
    name: 'Lucía Torres',
    role: 'Fundadora, FitLife Gym',
    location: 'Querétaro, México',
    company: 'FitLife Gym',
    quote: 'Increíble velocidad de carga. La gente puede ver los horarios y reservar desde el celular sin problema.',
    image: 'https://i.pravatar.cc/150?u=lucia'
  }
];

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-background overflow-hidden relative w-full">
      {/* Background Decor - Constrained to prevent DOM stretching */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 px-0 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-8 px-6 md:px-0">
          <div className="space-y-4 md:space-y-6 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-accent uppercase block">
                Testimonios
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] md:leading-[0.95]"
            >
              Lo que dicen <br className="hidden md:block" />
              <span className="text-secondary/60 font-light italic text-2xl sm:text-3xl md:text-6xl lg:text-8xl">nuestros clientes</span>
            </motion.h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex gap-3 md:gap-4">
            <button
              ref={prevRef}
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-border-custom/20 flex items-center justify-center text-foreground hover:bg-surface hover:border-accent/40 transition-all duration-300 active:scale-90 disabled:opacity-20 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center text-white hover:brightness-110 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 active:scale-90 disabled:opacity-20 cursor-pointer"
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
                    <SwiperSlide key={index} className="h-auto px-2 sm:px-0">
                      <motion.div
                        className="bg-surface/30 backdrop-blur-md rounded-[2rem] md:rounded-[4rem] p-6 md:p-14 h-full flex flex-col justify-between min-h-[340px] sm:min-h-[420px] md:min-h-[500px] border border-white/5 hover:border-accent/20 transition-all duration-700 relative group overflow-hidden"
                      >
                        {/* Decorative Quote Icon in background */}
                        <Quote size={80} className="absolute -top-4 -right-4 text-white/[0.03] rotate-12 group-hover:text-accent/[0.05] transition-colors duration-700 md:size-[180px] md:-top-10 md:-right-10" />

                        <div className="space-y-6 md:space-y-10 relative z-10">
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
                          <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-medium text-foreground leading-[1.4] md:leading-[1.2] tracking-tight">
                            &quot;{item.quote}&quot;
                          </p>
                        </div>

                        {/* Footer: User Details */}
                        <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-white/5 flex items-center gap-4 md:gap-6 relative z-10">
                          <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-accent/30 transition-colors duration-500 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-base sm:text-lg md:text-2xl font-bold text-foreground tracking-tight truncate">{item.name}</span>
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
              <div className="h-[340px] md:h-[500px] w-full bg-surface/10 rounded-[2rem] md:rounded-[4rem] animate-pulse mx-4 md:mx-0" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
