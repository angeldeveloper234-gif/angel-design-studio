export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'industry', title: 'Industry', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'url', title: 'URL', type: 'url' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] },
    { name: 'featured', title: 'Featured', type: 'boolean' }
  ]
};
