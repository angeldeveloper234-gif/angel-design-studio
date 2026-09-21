import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  metadataBase: new URL("https://angelstudiodigital.online"),
  title: {
    default: "Angel Design Studio | Agencia de Diseño Web, Branding & Sistemas con IA",
    template: "%s | Angel Design Studio"
  },
  description: "Expertos en diseño web profesional, posicionamiento SEO local, branding y automatizaciones de venta con IA. Impulsa tu negocio con Angel Design Studio para México, Colombia, Chile, Argentina y toda Latinoamérica.",
  keywords: [
    "angel design studio",
    "angel design",
    "agencia de diseño web",
    "diseño de paginas web",
    "creacion de paginas web",
    "desarrollo web profesional",
    "automatizacion whatsapp ia",
    "asistente virtual whatsapp",
    "seo local google maps",
    "posicionamiento seo",
    "diseño web mexico",
    "diseño web colombia",
    "diseño web chile",
    "diseño web argentina",
    "branding para empresas",
    "landing pages de alta conversion"
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
    canonical: "https://angelstudiodigital.online",
  },
  openGraph: {
    title: "Angel Design Studio | Agencia de Diseño Web, Branding & Sistemas con IA",
    description: "Expertos en diseño web profesional, posicionamiento SEO local y automatizaciones de venta con IA para toda Latinoamérica.",
    url: "https://angelstudiodigital.online",
    siteName: "Angel Design Studio",
    locale: "es_419",
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
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark overflow-x-hidden" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap" rel="stylesheet" />
        <JsonLd />
      </head>

      <body className="font-sans antialiased overflow-x-hidden">
        <GoogleAnalytics gaId="G-R65SM11F3M" />
        <LanguageProvider>
          <LenisProvider>
            <Navbar />
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
