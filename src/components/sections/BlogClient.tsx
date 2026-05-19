"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag, Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BlogPost } from "@/constants/blogData";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

interface BlogClientProps {
  initialPosts: any[]; // Posts fetched from Sanity
  fallbackPosts: BlogPost[]; // Our high-quality static SEO posts
}

export default function BlogClient({ initialPosts, fallbackPosts }: BlogClientProps) {
  const { language } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Merge Sanity posts and fallback posts
  // Map Sanity posts to BlogPost interface format
  const formattedSanityPosts: BlogPost[] = (initialPosts || []).map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: "", // Content not needed for card list
    publishedAt: post.publishedAt,
    language: post.language || "es",
    tags: post.tags || [],
    readTime: language === "es" ? "4 min de lectura" : "4 min read",
    category: post.tags && post.tags[0] ? post.tags[0] : (language === "es" ? "General" : "General"),
    gradient: "from-blue-600 to-accent",
    mainImage: post.mainImage
  }));

  // Combine lists, preferring Sanity posts if they have the same slug
  const allPosts = [...formattedSanityPosts];
  fallbackPosts.forEach((fallback) => {
    if (!allPosts.some((p) => p.slug === fallback.slug)) {
      allPosts.push(fallback);
    }
  });

  // Filter posts by language
  const languagePosts = allPosts.filter((post) => post.language === language);

  // Extract all unique tags for the filter buttons
  const allTags = ["All", ...Array.from(new Set(languagePosts.flatMap((post) => post.tags)))];

  // Filter posts by tag
  const filteredPosts = selectedTag === "All" 
    ? languagePosts 
    : languagePosts.filter((post) => post.tags.includes(selectedTag));

  const t = {
    es: {
      badge: "Blog & Recursos",
      title: "Artículos y estrategias de diseño web y marketing digital",
      subtitle: "Descubre cómo potenciar tu presencia online con las últimas tendencias de web design, posicionamiento SEO, branding y digital marketing de Angel Design Studio.",
      noPosts: "No se encontraron artículos con esta categoría.",
      readMore: "Leer Artículo",
      backHome: "Volver al inicio",
      all: "Todos"
    },
    en: {
      badge: "Blog & Resources",
      title: "Articles and strategies on web design and digital marketing",
      subtitle: "Discover how to boost your online presence with the latest trends in web design, SEO, branding, and digital marketing from Angel Design Studio.",
      noPosts: "No articles found in this category.",
      readMore: "Read Article",
      backHome: "Back to Home",
      all: "All"
    }
  }[language] || {
    badge: "Blog & Recursos",
    title: "Artículos y estrategias de diseño web y marketing digital",
    subtitle: "Descubre cómo potenciar tu presencia online con las últimas tendencias de web design, posicionamiento SEO, branding y digital marketing de Angel Design Studio.",
    noPosts: "No se encontraron artículos con esta categoría.",
    readMore: "Leer Artículo",
    backHome: "Volver al inicio",
    all: "Todos"
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="min-h-screen bg-background pt-32 pb-24 overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-custom/20 bg-surface/30 text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6"
          >
            <Plus size={10} className="text-accent" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em]"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-lg md:text-xl leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Filter Tags */}
        {allTags.length > 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-12 border-b border-border-custom/10 pb-6"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  (tag === "All" && selectedTag === "All") || tag === selectedTag
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-surface/30 border border-border-custom/10 text-secondary hover:text-foreground hover:bg-surface/50"
                }`}
              >
                {tag === "All" ? t.all : tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const mainImageAny = post as any;
              return (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group"
                >
                  <div className="h-full flex flex-col rounded-[2.5rem] border border-border-custom/10 bg-surface p-3 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
                    {/* Cover Image/Gradient */}
                    <div className="aspect-[16/10] w-full rounded-[2rem] relative overflow-hidden mb-2">
                      {mainImageAny.mainImage ? (
                        <Image
                          src={urlForImage(mainImageAny.mainImage).url() || ""}
                          alt={post.title}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} flex flex-col justify-between p-6`}>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                          <span className="px-3 py-1 self-start bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-white uppercase border border-white/10 relative z-10">
                            {post.category}
                          </span>
                          <div className="flex items-center justify-between text-white/80 text-[11px] font-bold tracking-wider relative z-10">
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 text-secondary text-xs font-bold tracking-widest uppercase mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-accent" />
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border-custom/10 flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-accent group-hover:gap-3 transition-all"
                        >
                          {t.readMore} <ArrowRight size={14} />
                        </Link>
                        
                        <div className="flex gap-1.5">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full border border-border-custom/10 bg-background text-[8px] font-bold tracking-widest text-secondary uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface/30 rounded-[2.5rem] border border-border-custom/10">
            <p className="text-secondary text-lg mb-6">{t.noPosts}</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:brightness-110 active:scale-95 transition-all"
            >
              {t.backHome}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
