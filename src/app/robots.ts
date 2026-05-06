import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio/"], // Assuming there might be a Sanity studio or internal API
    },
    sitemap: "https://angeldesignstudio.com/sitemap.xml",
  };
}
