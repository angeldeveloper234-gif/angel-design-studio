'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  return (
    <section id="testimonials" className="py-20 md:py-24 px-4 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block"
            >
              Testimonios
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Lo que dicen <span className="text-accent">nuestros clientes</span>
            </motion.h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              ref={prevRef}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-border-custom/20 flex items-center justify-center text-foreground hover:bg-surface transition-all duration-300 active:scale-90 z-10"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center text-white hover:brightness-110 transition-all duration-300 active:scale-90 z-10 shadow-lg shadow-accent/20"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
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
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
          className="testimonials-swiper !overflow-visible"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-surface rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 h-full flex flex-col justify-between min-h-[400px] md:min-h-[420px] shadow-2xl border border-border-custom/10"
              >
                <div className="space-y-8 md:space-y-10">
                  {/* Top: Avatar and Company */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-background shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-background rounded-full border border-border-custom/20 shadow-sm">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-accent rounded-lg flex items-center justify-center">
                        <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white rounded-full" />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-foreground tracking-tight">{item.company}</span>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="text-accent opacity-30">
                    <svg width="32" height="24" viewBox="0 0 45 36" fill="currentColor" className="md:w-10 md:h-8">
                      <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27V36C27.9558 36 36 27.9558 36 18V0H13.5ZM13.5 9H27V18C27 23.238 23.238 27 18 27V18H9V13.5C9 11.0147 11.0147 9 13.5 9Z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-2xl md:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer: User Details */}
                <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-border-custom/20 flex items-center gap-4">
                  <div className="w-1 h-10 md:h-12 bg-accent/40 rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-bold text-foreground">{item.name}</span>
                    <span className="text-sm text-secondary font-medium">
                      {item.role}
                    </span>
                    <span className="text-xs text-secondary/60 mt-0.5">
                      {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
