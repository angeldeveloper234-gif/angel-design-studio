export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'rating', title: 'Rating (1-5)', type: 'number', validation: (Rule: any) => Rule.min(1).max(5) },
    { name: 'order', title: 'Order', type: 'number' }
  ]
};
