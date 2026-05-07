import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "project" && defined(slug.current)].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
      title,
      description,
      "image": mainImage.asset->url
    }`,
    { slug }
  );

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [{ url: project.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
      title,
      description,
      "image": mainImage.asset->url,
      technologies,
      url
    }`,
    { slug }
  );

  if (!project) notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          {project.title}
        </h1>
        {project.image && (
          <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-white/90">Sobre el Proyecto</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white/90">Detalles</h2>
              {project.technologies && (
                <div className="mb-6">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Tecnologías</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 active:scale-95 transition-all"
              >
                Visitar Sitio Web
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
