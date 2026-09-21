import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';
import { groq } from 'next-sanity';

export interface ProjectItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  industry?: string;
  technologies?: string[];
  tags?: string[];
  mainImage?: any;
  url?: string;
  featured?: boolean;
}

export const staticNewProjects: ProjectItem[] = [
  {
    _id: 'project-mosquitomex',
    title: 'MosquitoMEX - Control de Plagas',
    slug: 'mosquitomex',
    industry: 'Fumigación',
    description: 'Plataforma web de alta conversión para franquicia internacional de control de plagas con sedes en CDMX, Monterrey y Valle de Texas. Arquitectura ultra veloz en Next.js, sistema bilingüe (ES/EN) y cotizador conectado a WhatsApp.',
    technologies: ['Página Web', 'SEO Local', 'Multi-idioma', 'WhatsApp CRM'],
    url: 'https://mosquitomex.com',
    mainImage: '/projects/mosquitomex.png',
    featured: true
  },
  {
    _id: 'project-pcp-internacional',
    title: 'PCP Internacional - Red Corporativa',
    slug: 'pcp-internacional',
    industry: 'Fumigación',
    description: 'Portal corporativo e institucional para la red líder en manejo integrado de plagas industriales y normativas de inocuidad. Diseño estructurado para auditorías B2B y derivación estratégica hacia empresas asociadas.',
    technologies: ['Página Web', 'B2B Industrial', 'Red de Sedes', 'SEO Marca'],
    url: 'https://pcpinternacional.com',
    mainImage: '/projects/pcp-internacional.png',
    featured: true
  },
  {
    _id: 'project-ac-desinfecciones',
    title: 'AC Desinfecciones y Servicios',
    slug: 'ac-desinfecciones',
    industry: 'Fumigación',
    description: 'Rediseño web integral para empresa de saneamiento ambiental y control de plagas en Córdoba Capital. Enfoque en conversión rápida, credenciales técnicas de salubridad y botón directo de asesoramiento por WhatsApp.',
    technologies: ['Página Web', 'SEO Local Córdoba', 'Manejo MIP', 'CTA WhatsApp'],
    url: 'https://acdesinfecciones.com.ar',
    mainImage: '/projects/ac-desinfecciones.png',
    featured: true
  },
  {
    _id: 'project-cg-fumigaciones',
    title: 'CG Fumigaciones - Control de Plagas',
    slug: 'cg-fumigaciones',
    industry: 'Fumigación',
    description: 'Sitio web de atención de urgencias y alta conversión para fumigación residencial y comercial en Rosario, Argentina. Interfaz en modo oscuro con botón de llamada inmediata 24/7 y cotización rápida.',
    technologies: ['Página Web', 'Atención 24hs', 'SEO Local Rosario', 'Diseño Dark Mode'],
    url: 'https://cg-fumigaciones.netlify.app',
    mainImage: '/projects/cg-fumigaciones.png',
    featured: true
  },
  {
    _id: 'project-decocipres',
    title: 'DecoCiprés - Muebles a Medida',
    slug: 'decocipres',
    industry: 'Mueblería y Carpintería',
    description: 'Diseño web editorial y catálogo visual de muebles de autor en madera nativa, melamina y fierro para Puerto Aysén y Coyhaique, Chile. Destaca proyectos a medida, acabados de alta gama y reserva de visitas técnicas.',
    technologies: ['Página Web', 'Catálogo Visual', 'Local SEO Aysén', 'Agendamiento'],
    url: 'https://decocipres.cl',
    mainImage: '/projects/decocipres.png',
    featured: true
  }
];

export async function getMergedProjects(): Promise<ProjectItem[]> {
  let sanityProjects: ProjectItem[] = [];
  try {
    sanityProjects = await client.fetch(projectsQuery);
  } catch (error) {
    console.error('Error fetching sanity projects:', error);
  }

  const sanitySlugs = new Set((sanityProjects || []).map((p) => p.slug));
  const missingNewProjects = staticNewProjects.filter((p) => !sanitySlugs.has(p.slug));

  return [...(sanityProjects || []), ...missingNewProjects];
}

export async function getAllProjectSlugs(): Promise<string[]> {
  let sanitySlugs: string[] = [];
  try {
    sanitySlugs = await client.fetch(
      groq`*[_type == "project" && defined(slug.current)].slug.current`
    );
  } catch (error) {
    console.error('Error fetching sanity slugs:', error);
  }

  const allSlugs = new Set([...sanitySlugs, ...staticNewProjects.map((p) => p.slug)]);
  return Array.from(allSlugs);
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  try {
    const sanityProject = await client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        description,
        "slug": slug.current,
        "image": mainImage.asset->url,
        mainImage,
        industry,
        technologies,
        url,
        featured
      }`,
      { slug }
    );
    if (sanityProject) {
      return {
        ...sanityProject,
        mainImage: sanityProject.image || sanityProject.mainImage
      };
    }
  } catch (error) {
    console.error(`Error fetching project ${slug} from Sanity:`, error);
  }

  const local = staticNewProjects.find((p) => p.slug === slug);
  return local || null;
}
