import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description,
  "slug": slug.current,
  mainImage,
  industry,
  technologies,
  url,
  featured
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc, _createdAt desc) {
  _id,
  name,
  company,
  role,
  location,
  quote,
  photo,
  rating
}`
