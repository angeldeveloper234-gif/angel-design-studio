"use client";

import { motion } from "framer-motion";
import { Smartphone, History, Search, PhoneCall } from "lucide-react";

export default function FumigationProblem() {
  return (
    <section id="problem" className="py-24 px-4 md:px-8 bg-background min-h-[600px]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 bg-accent/5"
            >
              EL COSTO OCULTO DE ESTAR EN CAMPO
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-heading leading-[1.1] tracking-tight"
            >
              <span className="text-foreground">Cada consulta que llega por Maps y no puede conocer más de tu servicio es un cliente que termina llamando a otra fumigadora.</span>
            </motion.h2>
          </div>
          
          {/* Subheading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xs"
          >
            <p className="text-secondary text-base md:text-lg leading-relaxed font-medium">
              
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column (2 stacked cards) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-surface/40 rounded-[2rem] p-8 shadow-xl border border-border-custom/10 flex-1 flex flex-col justify-center backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Servicios perdidos por no contestar</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Estás aplicando producto y el celular suena. Cuando te desocupas para devolver la llamada, el cliente ya cerró con la empresa que sí lo atendió al instante. Una página web con botón de WhatsApp y formulario de contacto trabaja por ti mientras estás en campo.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-surface/40 rounded-[2rem] p-8 shadow-xl border border-border-custom/10 flex-1 flex flex-col justify-center backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Consultas de Maps que no convierten</h3>
              <p className="text-secondary font-medium leading-relaxed">
                Google Maps muestra tu negocio aunque tengas pocas o ninguna reseña. Cuando alguien te encuentra ahí y quiere saber más, busca tu nombre en Google. Si no aparece una página con tus servicios, zonas de cobertura y forma de contacto, ese cliente se va con la fumigadora que sí tiene sitio propio.
              </p>
            </motion.div>

          </div>

          {/* Right Column (1 large dark card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-7 bg-surface rounded-[2.5rem] p-10 md:p-14 text-foreground shadow-2xl flex flex-col justify-between relative overflow-hidden group border border-border-custom/20"
          >
            {/* Background decorative graphic */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" y1="22" x2="12" y2="12"></line>
              </svg>
            </div>

            <div className="relative z-10 mb-20">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                <History className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-md">
                Preguntar el tipo de plaga, la zona y calcular precios manualmente toma horas. Para cuando logras enviar el presupuesto, la urgencia del cliente ya desapareció y contactó a otro servicio.
              </p>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                Cotizaciones lentas <br />
                <span className="text-accent">que enfrían ventas</span>
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
