import {defineType, defineField} from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {list: ['pdf', 'video', 'audio', 'link']},
    }),
    defineField({name: 'file', type: 'file', title: 'File'}),
    defineField({name: 'url', type: 'url', title: 'URL'}),
    defineField({name: 'category', type: 'reference', to: [{type: 'category'}]}),
    defineField({name: 'tags', type: 'array', of: [{type: 'string'}], title: 'Tags'}),
    defineField({name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}}),
    defineField({name: 'seoTitle', type: 'string', title: 'SEO Title'}),
    defineField({name: 'seoDescription', type: 'text', title: 'SEO Description'}),
  ],
})
