import { defineType, defineField } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Resource Type',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'Website', value: 'website' },
          { title: 'Video', value: 'video' },
          { title: 'Audio', value: 'audio' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      type: 'file',
      title: 'PDF File',
      hidden: ({ parent }) => parent?.type !== 'pdf',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context.parent?.type === 'pdf' && !field) {
            return 'PDF file is required when type is PDF'
          }
          return true
        }),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Resource URL',
      hidden: ({ parent }) => parent?.type === 'pdf',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const t = context.parent?.type
          if (['website', 'video', 'audio'].includes(t) && !field) {
            return 'URL is required for website, video, or audio resources'
          }
          return true
        }).uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Category',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: { hotspot: true },
    }),
    defineField({
      name: 'source',
      type: 'string',
      title: 'Source / Publisher',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description' }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Resource',
      initialValue: false,
    }),
  ],
})
