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

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  excerpt,
  "slug": slug.current,
  mainImage,
  publishedAt,
  language,
  tags
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  mainImage,
  publishedAt,
  language,
  tags
}`

