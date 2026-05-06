import React from 'react';

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Angel Design Studio",
    "image": "https://angeldesignstudio.com/hero-image.webp",
    "@id": "https://angeldesignstudio.com",
    "url": "https://angeldesignstudio.com",
    "telephone": "", // Add telephone if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
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
      "https://www.instagram.com/angeldesignstudio", // Add real social links
      "https://www.linkedin.com/company/angeldesignstudio"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Angel Design Studio",
    "url": "https://angeldesignstudio.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://angeldesignstudio.com/?s={search_term_string}"
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
