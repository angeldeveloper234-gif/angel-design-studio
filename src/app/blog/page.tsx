import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { staticBlogPosts } from "@/constants/blogData";
import BlogClient from "@/components/sections/BlogClient";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Blog & Recursos de Diseño Web y SEO | Angel Design Studio",
  description: "Aprende de digital marketing, web design, y posicionamiento SEO. Estrategias de Angel Design Studio (Angel Design/Angel Desing) para captar leads en Google.",
  keywords: [
    "angel design studio",
    "angel design",
    "design studio",
    "ange design",
    "angel desing",
    "design angel",
    "web design",
    "digital marketing"
  ],
  alternates: {
    canonical: "https://www.angelstudio.design/blog",
  },
  openGraph: {
    title: "Blog & Recursos de Diseño Web y SEO | Angel Design Studio",
    description: "Aprende de digital marketing, web design, y posicionamiento SEO. Estrategias de Angel Design Studio para captar leads en Google.",
    url: "https://www.angelstudio.design/blog",
    type: "website",
  }
};

export default async function BlogPage() {
  let sanityPosts: any[] = [];
  try {
    sanityPosts = await client.fetch(postsQuery);
  } catch (error) {
    console.error("Error fetching blog posts from Sanity, falling back to static posts:", error);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <BlogClient initialPosts={sanityPosts} fallbackPosts={staticBlogPosts} />
      </main>
      <Footer />
    </>
  );
}
