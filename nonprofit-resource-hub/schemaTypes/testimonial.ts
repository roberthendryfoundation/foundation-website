export default {
  name: 'testimonial',
  title: 'Testimonials & Stories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Full name of the person giving the testimonial',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Headshot photo (recommended: 400x400px, professional quality)',
    },
    {
      name: 'role',
      title: 'Role/Relationship',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g. "Volunteer", "Partner Organization", "Community Member", "Board Member"',
    },
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().max(500),
      description: 'The main testimonial text (1-3 sentences, max 500 characters)',
    },
    {
      name: 'fullStory',
      title: 'Full Story (Optional)',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Optional longer story if they want to share more (for future Stories page)',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Volunteer', value: 'volunteer'},
          {title: 'Partner Organization', value: 'partner'},
          {title: 'Community Member', value: 'community'},
          {title: 'Board/Advisory', value: 'board'},
          {title: 'Lived Experience', value: 'lived-experience'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured on About Page',
      type: 'boolean',
      description: 'Check to show this testimonial on the About Us page',
      initialValue: false,
    },
    {
      name: 'showOnHomepage',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Check to show this testimonial on the homepage',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3). Leave blank for default order.',
      validation: (Rule: any) => Rule.min(0),
    },
    {
      name: 'dateAdded',
      title: 'Date Added',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
      initialValue: () => new Date().toISOString().split('T')[0],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Published', value: 'published'},
          {title: 'Draft', value: 'draft'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
      status: 'status',
    },
    prepare(selection: any) {
      const {title, subtitle, media, status} = selection
      return {
        title: title,
        subtitle: `${subtitle} • ${status}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'dateAdded', direction: 'desc'},
      ],
    },
    {
      title: 'Date Added (Newest First)',
      name: 'dateDesc',
      by: [{field: 'dateAdded', direction: 'desc'}],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
}
