import { groq } from "next-sanity";

export const getProjectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    industry,
    description,
    url,
    "mainImage": mainImage.asset->url,
    technologies,
    featured
  }
`;

export const getTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    company,
    role,
    quote,
    "photo": photo.asset->url,
    rating
  }
`;
