const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const token = process.argv[2] || process.env.SANITY_API_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '65gbp852';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!token) {
  console.error('Error: Debes proporcionar un token de Sanity con permisos de Editor o Administrador.');
  console.error('Uso: node scripts/sync-to-sanity.js <TU_SANITY_API_TOKEN>');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token
});

const projectsDir = path.join(__dirname, '../public/projects');

const projects = [
  {
    title: 'MosquitoMEX - Control de Plagas',
    slug: 'mosquitomex',
    client: 'MosquitoMEX',
    industry: 'Fumigación',
    technologies: ['Página Web', 'SEO Local', 'Multi-idioma', 'WhatsApp CRM'],
    url: 'https://mosquitomex.com',
    description: 'Plataforma web de alta conversión para franquicia internacional de control de plagas con sedes en CDMX, Monterrey y Valle de Texas. Arquitectura ultra veloz en Next.js, sistema bilingüe (ES/EN) y cotizador conectado a WhatsApp.',
    featured: true,
    imageFile: 'mosquitomex.png'
  },
  {
    title: 'PCP Internacional - Red Corporativa',
    slug: 'pcp-internacional',
    client: 'PCP Internacional',
    industry: 'Fumigación',
    technologies: ['Página Web', 'B2B Industrial', 'Red de Sedes', 'SEO Marca'],
    url: 'https://pcpinternacional.com',
    description: 'Portal corporativo e institucional para la red líder en manejo integrado de plagas industriales y normativas de inocuidad. Diseño estructurado para auditorías B2B y derivación estratégica hacia empresas asociadas.',
    featured: true,
    imageFile: 'pcp-internacional.png'
  },
  {
    title: 'AC Desinfecciones y Servicios',
    slug: 'ac-desinfecciones',
    client: 'AC Desinfecciones',
    industry: 'Fumigación',
    technologies: ['Página Web', 'SEO Local Córdoba', 'Manejo MIP', 'CTA WhatsApp'],
    url: 'https://acdesinfecciones.com.ar',
    description: 'Rediseño web integral para empresa de saneamiento ambiental y control de plagas en Córdoba Capital. Enfoque en conversión rápida, credenciales técnicas de salubridad y botón directo de asesoramiento por WhatsApp.',
    featured: true,
    imageFile: 'ac-desinfecciones.png'
  },
  {
    title: 'CG Fumigaciones - Control de Plagas',
    slug: 'cg-fumigaciones',
    client: 'CG Fumigaciones',
    industry: 'Fumigación',
    technologies: ['Página Web', 'Atención 24hs', 'SEO Local Rosario', 'Diseño Dark Mode'],
    url: 'https://cg-fumigaciones.netlify.app',
    description: 'Sitio web de atención de urgencias y alta conversión para fumigación residencial y comercial en Rosario, Argentina. Interfaz en modo oscuro con botón de llamada inmediata 24/7 y cotización rápida.',
    featured: true,
    imageFile: 'cg-fumigaciones.png'
  },
  {
    title: 'DecoCiprés - Muebles a Medida',
    slug: 'decocipres',
    client: 'DecoCiprés',
    industry: 'Mueblería y Carpintería',
    technologies: ['Página Web', 'Catálogo Visual', 'Local SEO Aysén', 'Agendamiento'],
    url: 'https://decocipres.cl',
    description: 'Diseño web editorial y catálogo visual de muebles de autor en madera nativa, melamina y fierro para Puerto Aysén y Coyhaique, Chile. Destaca proyectos a medida, acabados de alta gama y reserva de visitas técnicas.',
    featured: true,
    imageFile: 'decocipres.png'
  }
];

async function sync() {
  console.log('Iniciando sincronización con Sanity CMS...');
  for (const p of projects) {
    console.log(`\nSubiendo proyecto: ${p.title} (${p.slug})`);
    const imagePath = path.join(projectsDir, p.imageFile);
    if (!fs.existsSync(imagePath)) {
      console.warn(`Imagen no encontrada: ${imagePath}`);
      continue;
    }

    const imageStream = fs.createReadStream(imagePath);
    const asset = await client.assets.upload('image', imageStream, {
      filename: p.imageFile
    });
    console.log(`Imagen subida a Sanity: ${asset._id}`);

    const existing = await client.fetch('*[_type == "project" && slug.current == $slug][0]', { slug: p.slug });
    const docData = {
      _type: 'project',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      client: p.client,
      industry: p.industry,
      description: p.description,
      url: p.url,
      technologies: p.technologies,
      featured: p.featured,
      mainImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      }
    };

    if (existing) {
      await client.patch(existing._id).set(docData).commit();
      console.log(`Proyecto actualizado en Sanity: ${existing._id}`);
    } else {
      const created = await client.create(docData);
      console.log(`Proyecto creado en Sanity: ${created._id}`);
    }
  }
  console.log('\n¡Todos los proyectos se sincronizaron con éxito en Sanity CMS!');
}

sync().catch(console.error);
