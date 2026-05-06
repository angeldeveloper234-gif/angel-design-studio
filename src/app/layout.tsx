import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://angeldesignstudio.com"),
  title: {
    default: "Angel Design Studio | Diseño Web & Branding de Alto Impacto",
    template: "%s | Angel Design Studio"
  },
  description: "Transformamos tu visión en una presencia digital premium. En Angel Design Studio somos expertos en diseño web, branding y estrategias digitales que impulsan tu negocio.",
  keywords: [
    "diseño web",
    "branding",
    "desarrollo web profesional",
    "agencia digital",
    "estudio de diseño",
    "marketing digital",
    "experiencia de usuario",
    "UI/UX",
    "Angel Design Studio"
  ],
  authors: [{ name: "Angel Design Studio" }],
  creator: "Angel Design Studio",
  publisher: "Angel Design Studio",
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
    canonical: "/",
  },
  openGraph: {
    title: "Angel Design Studio | Diseño Web & Branding de Alto Impacto",
    description: "Transformamos tu visión en una presencia digital premium. Expertos en diseño web y branding.",
    url: "https://angeldesignstudio.com",
    siteName: "Angel Design Studio",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Angel Design Studio - Diseño Web & Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Design Studio | Diseño Web & Branding de Alto Impacto",
    description: "Transformamos tu visión en una presencia digital premium.",
    images: ["/hero-image.webp"],
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
      <body className="font-sans antialiased">
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
