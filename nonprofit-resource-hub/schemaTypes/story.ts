import {defineField, defineType} from 'sanity'

export const story = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      title: 'Summary',
      rows: 4,
      description: 'Brief overview (ideal 3–4 sentences).',
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: 'wordCount',
      type: 'number',
      title: 'Word Count',
      description: 'Approximate word count (should be ≤ 2000).',
      validation: (Rule) => Rule.min(0).max(2000),
    }),
    defineField({
      name: 'themes',
      type: 'array',
      title: 'Themes / Tags',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Feature Image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.max(120),
        }),
      ],
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Story Body',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.max(2000).warning('Recommended length is under 2,000 words.'),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Lower numbers appear first.',
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
        ],
      },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
      media: 'image',
    },
  },
})

