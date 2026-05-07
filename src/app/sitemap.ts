import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.angelstudio.design";
  
  // Fetch projects slugs from Sanity via GROQ
  const projects = await client.fetch(groq`*[_type == "project" && defined(slug.current)] { "slug": slug.current, _updatedAt }`);
  
  const projectUrls = projects.map((project: { slug: string; _updatedAt: string }) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
