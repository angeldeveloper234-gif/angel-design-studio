"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Siempre predispuestos y con una entrega de muy buena calidad. Estoy muy conforme con el resultado.",
    author: "Dueño",
    company: "Fumcon del Sureste",
    location: "Yucatán, MX",
  },
  {
    quote: "Están siempre a la altura de las expectativas. Entregan grandes resultados sin los procesos lentos de otras agencias.",
    author: "Jorge Guevara",
    company: "Big Cat & PCP Internacional",
    location: "Nivel Nacional, MX",
  }
];

export default function FumigationTestimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 bg-surface/30 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground"
          >
            Lo que dicen los <span className="text-accent">dueños de fumigadoras</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-border-custom/10 relative group hover:border-accent/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                  <span className="text-accent font-bold font-heading">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-foreground font-bold font-heading">{testimonial.author}</h4>
                  <p className="text-secondary text-sm">{testimonial.company} <span className="text-accent/50 mx-1">•</span> {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
