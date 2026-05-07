import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ 
      name: 'rating', 
      title: 'Rating (1-5)', 
      type: 'number', 
      validation: (Rule) => Rule.min(1).max(5) 
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' })
  ]
});

export default testimonial;
