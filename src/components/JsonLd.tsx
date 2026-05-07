import React from 'react';

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Angel Design Studio",
    "image": "https://www.angelstudio.design/og-image.jpg",
    "@id": "https://www.angelstudio.design",
    "url": "https://www.angelstudio.design",
    "telephone": "+543873529421",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Salta, Argentina",
      "addressLocality": "Salta",
      "addressRegion": "Salta",
      "postalCode": "4400",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -24.7821,
      "longitude": -65.4232
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/angeldesignstudio",
      "https://www.linkedin.com/company/angeldesignstudio",
      "https://twitter.com/angeldesignstudio"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "Diseño Web Premium",
          "description": "Sitios web de alto impacto diseñados para convertir."
        },
        {
          "@type": "Service",
          "name": "Branding & Identidad Visual",
          "description": "Creación de marcas memorables y profesionales."
        },
        {
          "@type": "Service",
          "name": "Desarrollo E-commerce",
          "description": "Tiendas online optimizadas para ventas."
        },
        {
          "@type": "Service",
          "name": "SEO & Optimización",
          "description": "Mejoramos tu visibilidad en buscadores."
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Angel Design Studio",
    "url": "https://www.angelstudio.design",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.angelstudio.design/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tarda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entregamos tu sitio web funcional en menos de 1 semana, dependiendo de la rapidez con la que nos pases tu información."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué necesito darte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Básicamente el logo de tu marca, fotos de tus proyectos o servicios y los textos que quieras incluir."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si quiero cambios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Incluimos una fase de revisiones ilimitadas durante el proceso de diseño y 30 días de soporte gratuito tras la publicación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Incluye dominio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "¡Sí! El primer año de dominio (.com o .mx) y hosting premium están incluidos en todos nuestros planes."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
