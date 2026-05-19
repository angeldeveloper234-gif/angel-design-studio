import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { staticBlogPosts } from "@/constants/blogData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.angelstudio.design";
  
  // 1. Fetch de proyectos desde Sanity
  let projectUrls: MetadataRoute.Sitemap = [];
  try {
    const projects = await client.fetch(
      groq`*[_type == "project" && defined(slug.current)] { "slug": slug.current, _updatedAt }`
    );
    projectUrls = projects.map((project: { slug: string; _updatedAt: string }) => ({
      url: `${baseUrl}/proyectos/${project.slug}`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error fetching projects for sitemap:", error);
  }

  // 2. Fetch de posts del blog desde Sanity
  let sanityBlogUrls: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await client.fetch(
      groq`*[_type == "post" && defined(slug.current)] { "slug": slug.current, publishedAt }`
    );
    sanityBlogUrls = blogPosts.map((post: { slug: string; publishedAt: string }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  // 3. Mapear posts de blog estáticos (fallback)
  const staticBlogUrls: MetadataRoute.Sitemap = staticBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Combinar todas las URLs únicas de blog (evitar duplicados si hay coincidencia entre estáticos y dinámicos)
  const allBlogUrlsMap = new Map<string, MetadataRoute.Sitemap[number]>();
  [...staticBlogUrls, ...sanityBlogUrls].forEach(item => {
    allBlogUrlsMap.set(item.url, item);
  });
  const uniqueBlogUrls = Array.from(allBlogUrlsMap.values());

  return [
    // Home principal
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Home de Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Landing page de Fumigación
    {
      url: `${baseUrl}/fumigacion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Proyectos
    ...projectUrls,
    // Posts de Blog (únicos)
    ...uniqueBlogUrls,
  ];
}
