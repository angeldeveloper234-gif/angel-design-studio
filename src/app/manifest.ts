import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Angel Design Studio",
    short_name: "Angel Studio",
    description: "Diseño Web & Branding de Alto Impacto",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#FF4A25",
    icons: [
      {
        src: "/favicon-angelstudiodesign.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
