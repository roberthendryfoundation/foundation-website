import {defineType, defineField} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name (e.g., "Heart", "Brain")',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    // ✅ NEW OPTIMIZATION FIELDS
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      description: 'Hex color for visual distinction',
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
          name: 'hex color',
          invert: false,
        }),
      initialValue: '#6366f1',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Lower numbers appear first',
      initialValue: 999,
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Category',
      initialValue: false,
    }),
    defineField({
      name: 'parentCategory',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Parent Category',
      description: 'For subcategories (optional)',
    }),
  ],

  // ✅ PREVIEW CONFIGURATION
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      featured: 'featured',
    },
    prepare({title, subtitle, featured}) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle,
      }
    },
  },

  // ✅ ORDERING OPTIONS
  orderings: [
    {
      title: 'Manual Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'name', direction: 'asc'},
      ],
    },
  ],
})
