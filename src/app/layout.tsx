import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.angelstudio.design"),
  title: {
    default: "Angel Design Studio | Agencia de Diseño Web & Automatización con AI",
    template: "%s | Angel Design Studio"
  },
  description: "En Angel Design Studio transformamos tu visión en una presencia digital premium. Expertos en diseño web profesional, automatización con AI y marketing digital de alto impacto en México.",
  keywords: [
    "angel design studio",
    "angel design",
    "graphic design",
    "angel desing",
    "digital marketing",
    "marketing",
    "angeldesign",
    "agencia de",
    "diseño web cerca de mi",
    "design",
    "diseño web profesional",
    "agencia digital",
    "estudio de diseño",
    "branding México",
    "desarrollo web CDMX",
    "diseño de logotipos",
    "posicionamiento SEO"
  ],
  authors: [{ name: "Angel Design Studio" }],
  creator: "Angel Design Studio",
  publisher: "Angel Design Studio",
  category: "technology",
  classification: "Design Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon-angelstudiodesign.png",
    apple: "/favicon-angelstudiodesign.png",
  },
  alternates: {
    canonical: "https://www.angelstudio.design",
  },
  openGraph: {
    title: "Angel Design Studio | Agencia de Diseño Web & Automatización con AI",
    description: "Expertos en diseño web profesional, automatización con inteligencia artificial y marketing digital de alto impacto.",
    url: "https://www.angelstudio.design",
    siteName: "Angel Design Studio",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angel Design Studio - Agencia de Diseño Web & Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Design Studio | Diseño Web & Branding de Alto Impacto",
    description: "Transformamos tu visión en una presencia digital premium con diseño web y marketing digital.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap" rel="stylesheet" />
        <JsonLd />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
