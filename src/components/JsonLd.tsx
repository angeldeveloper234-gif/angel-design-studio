import React from 'react';

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Angel Design Studio",
    "alternateName": [
      "Angel Design",
      "Ange Design",
      "Angel Desing",
      "AngelStudio.design",
      "angelstudio design",
      "diseño web salta",
      "paginas web salta",
      "diseño web argentina",
      "diseño de paginas web",
      "estudio de diseño",
      "marketing digital salta"
    ],
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
      "postalCode": "A4400",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -24.78977,
      "longitude": -65.41098
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
      "closes": "19:00"
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
          "name": "Diseño Web Profesional",
          "description": "Sitios web de alto impacto diseñados para convertir y posicionar en Google."
        },
        {
          "@type": "Service",
          "name": "Graphic Design & Branding",
          "description": "Creación de marcas memorables, logotipos y sistemas de identidad visual."
        },
        {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Estrategias de marketing digital para escalar negocios."
        },
        {
          "@type": "Service",
          "name": "SEO & Optimización",
          "description": "Mejoramos tu visibilidad en buscadores para que aparezcas cerca de tus clientes."
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
          "text": "¡Sí! El primer año de dominio (.com o .com.ar) y hosting premium están incluidos en todos nuestros planes."
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
