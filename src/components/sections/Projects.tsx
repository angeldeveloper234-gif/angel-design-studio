'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';
import type { Image as SanityImage } from 'sanity';

interface Project {
  _id: string;
  title: string;
  description: string;
  industry?: string;
  technologies?: string[];
  tags?: string[];
  mainImage?: SanityImage;
}

const defaultProjects: Project[] = [
  {
    _id: "1",
    title: "Luxory",
    description: "Sitio web elegante y minimalista con detalles dorados, que combina simplicidad con un toque corporativo premium.",
    industry: "Arquitectura",
    technologies: ["SITIO CORPORATIVO", "NEXT.JS"],
    mainImage: undefined
  },
  {
    _id: "2",
    title: "Habita+",
    description: "Landing page minimalista y moderna con tonos azulados, enfocada en transmitir profesionalismo y claridad visual.",
    industry: "Real Estate",
    technologies: ["LANDING PAGE", "CMS"],
    mainImage: undefined
  }
];

interface ProjectProps {
  projects?: Project[];
}

export default function Projects({ projects: sanityProjects }: ProjectProps) {
  const projects = sanityProjects && sanityProjects.length > 0 ? sanityProjects : defaultProjects;
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-custom/20 bg-surface/30 text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6"
          >
            <Plus size={10} className="text-accent" />
            Proyectos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]"
          >
            Webs entregadas que están generando resultados
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Cada sitio fue diseñado para el rubro específico del negocio. No hay dos iguales.
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border-custom/10 bg-surface p-3 transition-all duration-500 hover:border-accent/30">
              {/* Image Section */}
              <div className="aspect-[16/10] w-full rounded-[2rem] bg-gradient-to-br from-background to-surface relative overflow-hidden mb-2">
                {project.mainImage ? (
                  <Image 
                    src={urlForImage(project.mainImage).url() || ''} 
                    alt={`Diseño web para ${project.industry || 'negocios'} - ${project.title} | Angel Design Studio`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(77,162,227,0.05),transparent)]" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                      <div className="h-1/3 w-px bg-gradient-to-b from-transparent via-accent to-transparent absolute" />
                    </div>
                  </>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                {project.industry && (
                  <div className="mb-3">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-accent uppercase">
                      Rubro: {project.industry}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || project.tags || []).map((tag: string) => (
                    <span 
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-border-custom/10 bg-background text-[9px] font-bold tracking-widest text-secondary uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center max-w-2xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary text-lg md:text-xl leading-relaxed mb-8"
        >
          ¿Querés ver cómo quedaría el sitio de tu negocio? Escribinos y te mostramos un ejemplo en minutos.
        </motion.p>
        
        <motion.a
          href="https://wa.me/543873529421"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-accent text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2 group"
        >
          Ver mi ejemplo gratis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      </div>
    </section>
  );
}


