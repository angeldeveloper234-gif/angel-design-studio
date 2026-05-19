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

  // Fetch blog posts from Sanity via GROQ
  const posts = await client.fetch(groq`*[_type == "post" && defined(slug.current)] { "slug": slug.current, _updatedAt }`);
  
  const postUrls = posts.map((post: { slug: string; _updatedAt: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fumigacion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectUrls,
    ...postUrls,
  ];
}
