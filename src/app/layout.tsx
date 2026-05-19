import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.angelstudio.design"),
  title: {
    default: "Angel Design Studio | Agencia de Diseño Web, Branding & Marketing Digital",
    template: "%s | Angel Design Studio"
  },
  description: "Expertos en diseño web profesional, posicionamiento SEO, branding de identidad visual y marketing digital de alto impacto. Impulsa tu negocio con Angel Design Studio en Salta, Argentina para toda Latinoamérica.",
  keywords: [
    "angel design studio",
    "angel design",
    "ange design",
    "angel desing",
    "diseño web salta",
    "paginas web salta",
    "diseño de paginas web salta",
    "marketing digital salta",
    "seo salta",
    "diseño web argentina",
    "paginas web argentina",
    "desarrollo web argentina",
    "agencia de diseño web",
    "estudio de diseño",
    "marketing digital argentina",
    "branding argentina",
    "diseño de paginas web",
    "creacion de paginas web",
    "posicionamiento seo",
    "diseño de logotipos"
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
    title: "Angel Design Studio | Agencia de Diseño Web, Branding & Marketing Digital",
    description: "Expertos en diseño web profesional, branding de marcas de primer nivel y marketing digital de alto impacto.",
    url: "https://www.angelstudio.design",
    siteName: "Angel Design Studio",
    locale: "es_AR",
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
