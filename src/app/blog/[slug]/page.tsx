import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { staticBlogPosts, BlogPost } from "@/constants/blogData";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { groq } from "next-sanity";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  let sanitySlugs: string[] = [];
  try {
    sanitySlugs = await client.fetch(groq`*[_type == "post" && defined(slug.current)].slug.current`);
  } catch (error) {
    console.error("Error generating static params for blog:", error);
  }
  const staticSlugs = staticBlogPosts.map((post) => post.slug);
  return [...sanitySlugs, ...staticSlugs].map((slug) => ({ slug }));
}

async function getPost(slug: string): Promise<any | null> {
  // First attempt: Sanity
  try {
    const sanityPost = await client.fetch(postBySlugQuery, { slug });
    if (sanityPost) return sanityPost;
  } catch (error) {
    console.error("Error fetching post from Sanity:", error);
  }

  // Second attempt: Fallback static posts
  const staticPost = staticBlogPosts.find((p) => p.slug === slug);
  if (staticPost) return staticPost;

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  const isStatic = !post.content || typeof post.content === "string";
  const mainImageAny = post as any;
  const imageUrl = mainImageAny.mainImage 
    ? urlForImage(mainImageAny.mainImage).url() 
    : undefined;

  return {
    title: `${post.title} | Blog Angel Design Studio`,
    description: post.excerpt,
    keywords: [
      "angel design studio",
      "angel design",
      "design studio",
      "ange design",
      "angel desing",
      "design angel",
      "web design",
      "digital marketing",
      ...(post.tags || [])
    ],
    openGraph: {
      title: `${post.title} | Blog Angel Design Studio`,
      description: post.excerpt,
      type: "article",
      url: `https://www.angelstudio.design/blog/${post.slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    }
  };
}

// Markdown parser helper for static posts
function parseInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={idx} className="text-foreground font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderMarkdownContent(text: string) {
  return text.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    
    // Headers
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight font-heading letter-spacing-[-0.02em] line-height-[1.2]">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-3xl font-bold text-foreground mt-10 mb-4 tracking-tight font-heading letter-spacing-[-0.02em] line-height-[1.2]">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    
    // Lists
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map(li => li.replace("- ", "").trim());
      return (
        <ul key={i} className="list-disc list-inside space-y-2 my-4 pl-4 text-secondary">
          {items.map((item, idx) => (
            <li key={idx} className="text-base md:text-lg leading-relaxed">
              {parseInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
    }

    // Paragraph
    return (
      <p key={i} className="text-base md:text-lg text-secondary leading-relaxed mb-6">
        {parseInlineMarkdown(trimmed)}
      </p>
    );
  });
}

// Portable text styling components
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-foreground mt-10 mb-4 tracking-tight font-heading">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight font-heading">{children}</h3>,
    normal: ({ children }: any) => <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 my-4 pl-4 text-secondary">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-base md:text-lg leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="text-foreground font-bold">{children}</strong>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a href={value.href} rel={rel} target={target} className="text-accent underline hover:text-accent/80 transition-colors">
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const isStatic = !post.content || typeof post.content === "string";
  const mainImageAny = post as any;
  const imageUrl = mainImageAny.mainImage 
    ? urlForImage(mainImageAny.mainImage).url() 
    : null;

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(post.language === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const readTime = post.readTime || (post.language === "es" ? "4 min de lectura" : "4 min read");
  const category = post.tags && post.tags[0] ? post.tags[0] : (post.language === "es" ? "General" : "General");

  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-secondary hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            {post.language === "es" ? "Volver al Blog" : "Back to Blog"}
          </Link>

          {/* Article Header */}
          <article className="prose prose-invert max-w-none">
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold tracking-widest text-accent uppercase">
                  {category}
                </span>
                
                <span className="text-secondary/60 text-xs flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(post.publishedAt)}
                </span>

                <span className="text-secondary/60 text-xs flex items-center gap-1">
                  <Clock size={12} />
                  {readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em] font-heading">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-secondary leading-relaxed border-l-2 border-accent pl-6 py-1 italic mb-8">
                {post.excerpt}
              </p>
            </header>

            {/* Cover Media */}
            {imageUrl ? (
              <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-border-custom/10 mb-12 shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            ) : (
              <div className={`aspect-[21/9] w-full rounded-[2.5rem] bg-gradient-to-br ${post.gradient || "from-blue-600 to-accent"} relative overflow-hidden mb-12 shadow-xl border border-border-custom/10 flex items-center justify-center p-8`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />
                <span className="text-3xl md:text-4xl font-extrabold text-white text-center leading-tight tracking-tight max-w-xl opacity-90 drop-shadow-md select-none">
                  {post.title}
                </span>
              </div>
            )}

            {/* Content Body */}
            <div className="text-foreground leading-relaxed">
              {isStatic ? (
                renderMarkdownContent(post.content)
              ) : (
                <PortableText value={post.content} components={portableTextComponents} />
              )}
            </div>

            {/* Article Footer Tags */}
            <footer className="mt-16 pt-8 border-t border-border-custom/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={14} className="text-accent" />
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface/50 border border-border-custom/10 rounded-full text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-secondary/60">
                © {new Date().getFullYear()} Angel Design Studio
              </div>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
