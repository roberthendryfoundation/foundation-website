import {defineType, defineField} from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  groups: [
    {name: 'content', title: '📝 Content', default: true},
    {name: 'media', title: '🖼️ Media & Files'},
    {name: 'organization', title: '📁 Organization'},
    {name: 'metadata', title: '🔍 Metadata & SEO'},
    {name: 'education', title: '📚 Educational Details'},
    {name: 'settings', title: '⚙️ Settings'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description:
        "A clear, descriptive title for this resource (e.g., 'Understanding Anxiety: A Beginner's Guide')",
      placeholder: 'Enter resource title...',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(120)
          .warning('Titles should be between 10-120 characters for best SEO results'),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'A brief summary (2-3 sentences) that explains what this resource covers. This appears in search results and resource listings.',
      placeholder: 'Describe what users will learn or find in this resource...',
      rows: 4,
      validation: (Rule) =>
        Rule.max(300).warning('Descriptions over 300 characters may be truncated in listings'),
      group: 'content',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Resource Type',
      description:
        'Select the format of this resource. This determines which fields are available below.',
      options: {
        list: [
          {title: '📄 PDF - Document or guide', value: 'pdf'},
          {title: '🌐 Website - External link', value: 'website'},
          {title: '🎥 Video - YouTube, Vimeo, etc.', value: 'video'},
          {title: '🎵 Audio - Podcast, audio guide', value: 'audio'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Please select a resource type'),
      group: 'media',
    }),
    defineField({
      name: 'file',
      type: 'file',
      title: 'PDF File',
      hidden: ({parent}) => parent?.type !== 'pdf',
      validation: (Rule) =>
        Rule.custom((field, context: any) => {
          if (context.parent?.type === 'pdf' && !field) {
            return 'PDF file is required when type is PDF'
          }
          return true
        }),
      group: 'media',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Resource URL',
      hidden: ({parent}) => parent?.type === 'pdf',
      validation: (Rule) =>
        Rule.custom((field, context: any) => {
          const t = context.parent?.type
          if (['website', 'video', 'audio'].includes(t) && !field) {
            return 'URL is required for website, video, or audio resources'
          }
          return true
        }).uri({scheme: ['https']}),
      group: 'media',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Category',
      description:
        'Select the primary category for this resource. This helps users find related content.',
      validation: (Rule: any) =>
        Rule.required().error('A category is required to help users find this resource'),
      group: 'organization',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      group: 'organization',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail Image (Optional)',
      description:
        'Optional: Recommended 1200x630px, JPG or PNG. This image appears in resource listings and when shared on social media. Resources without thumbnails will use a default placeholder.',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette'],
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Describe the image for screen readers (e.g., "Cover of anxiety guide book")',
          validation: (Rule: any) => Rule.max(125),
        },
      ],
      group: 'media',
    }),
    defineField({
      name: 'source',
      type: 'string',
      title: 'Source / Publisher',
      group: 'metadata',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
      initialValue: () => new Date().toISOString(),
      group: 'metadata',
    }),
    defineField({
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      description:
        'Custom title for search engines (50-60 characters recommended). Leave blank to use the main title.',
      placeholder: 'Custom SEO title (optional)',
      validation: (Rule: any) =>
        Rule.max(60).warning('SEO titles over 60 characters may be truncated'),
      group: 'metadata',
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Description',
      description:
        'Custom description for search engines (150-160 characters recommended). Leave blank to use the main description.',
      placeholder: 'Custom SEO description (optional)',
      rows: 3,
      validation: (Rule: any) =>
        Rule.max(160).warning(
          'SEO descriptions over 160 characters may be truncated in search results',
        ),
      group: 'metadata',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: '⭐ Featured Resource',
      description:
        'Featured resources appear prominently on the homepage and resource pages. Use sparingly for your best content.',
      initialValue: false,
      group: 'settings',
    }),

    // ✅ NEW OPTIMIZATION FIELDS
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description:
        'Lower numbers appear first. Use 1-10 for featured items, 100+ for regular items. Leave blank for alphabetical order.',
      placeholder: '999',
      validation: (Rule: any) => Rule.min(0).max(9999),
      initialValue: 999,
      group: 'settings',
    }),
    defineField({
      name: 'duration',
      type: 'string',
      title: 'Duration/Length',
      description: 'e.g., "5 min read", "10 pages", "15 min video"',
      group: 'education',
    }),
    defineField({
      name: 'difficulty',
      type: 'string',
      title: 'Difficulty Level',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ],
        layout: 'dropdown',
      },
      group: 'education',
    }),
    defineField({
      name: 'audience',
      type: 'array',
      title: 'Target Audience',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Teens', value: 'teens'},
          {title: 'Adults', value: 'adults'},
          {title: 'Parents', value: 'parents'},
          {title: 'Professionals', value: 'professionals'},
        ],
      },
      group: 'education',
    }),
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      initialValue: 'en',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Spanish', value: 'es'},
          {title: 'French', value: 'fr'},
        ],
      },
      group: 'metadata',
    }),
    defineField({
      name: 'accessType',
      type: 'string',
      title: 'Access Type',
      options: {
        list: [
          {title: 'Free', value: 'free'},
          {title: 'Paid', value: 'paid'},
          {title: 'Registration Required', value: 'registration'},
        ],
        layout: 'radio',
      },
      initialValue: 'free',
      group: 'metadata',
    }),
    defineField({
      name: 'lastVerified',
      type: 'datetime',
      title: 'Last Verified',
      description: 'When was this resource last checked for accuracy?',
      initialValue: () => new Date().toISOString(),
      group: 'metadata',
    }),
    defineField({
      name: 'contentWarning',
      type: 'boolean',
      title: 'Contains Sensitive Content',
      description: 'Check if this resource discusses crisis, self-harm, etc.',
      initialValue: false,
      group: 'settings',
    }),
    defineField({
      name: 'relatedResources',
      type: 'array',
      title: 'Related Resources',
      of: [{type: 'reference', to: [{type: 'resource'}]}],
      validation: (Rule) => Rule.max(5),
      group: 'organization',
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Publication Status',
      description:
        'Draft: Not visible to public | Published: Live on website | Archived: Hidden but kept for reference',
      options: {
        list: [
          {title: '📝 Draft - Not published', value: 'draft'},
          {title: '✅ Published - Live on site', value: 'published'},
          {title: '📦 Archived - Hidden', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'published',
      group: 'settings',
    }),

    // ✅ EDUCATION-FOCUSED ORGANIZATION

    // Learning Level (Educational Depth)
    defineField({
      name: 'learningLevel',
      type: 'string',
      title: 'Learning Level',
      description: 'What level of understanding does this resource target?',
      options: {
        list: [
          {title: '📖 Beginner (Anxiety 101)', value: 'beginner'},
          {title: '🧠 Intermediate (Deep Understanding)', value: 'intermediate'},
          {title: '🔬 Advanced (Research & Evidence)', value: 'advanced'},
        ],
        layout: 'radio',
      },
      group: 'education',
    }),

    // Topic Areas (What They'll Learn)
    defineField({
      name: 'topicAreas',
      type: 'array',
      title: 'Topic Areas',
      description: 'What topics does this resource cover?',
      of: [{type: 'string'}],
      group: 'education',
      options: {
        list: [
          // Understanding Anxiety
          {title: '📚 What is Anxiety?', value: 'what_is_anxiety'},
          {title: '📚 Types of Anxiety Disorders', value: 'types_of_anxiety'},
          {title: '📚 Myths vs. Facts', value: 'myths_facts'},
          {title: '📚 Anxiety vs. Normal Worry', value: 'anxiety_vs_worry'},
          // Understanding Symptoms & Signs
          {title: '🧠 Physical Symptoms Explained', value: 'physical_symptoms'},
          {title: '🧠 Emotional & Mental Impact', value: 'emotional_impact'},
          {title: '🧠 Behavioral Signs', value: 'behavioral_signs'},
          {title: '🧠 Recognizing Anxiety in Others', value: 'recognizing_anxiety'},
          // Science & Causes
          {title: '🔬 Brain Science & Chemistry', value: 'brain_science'},
          {title: '🔬 Genetic Factors', value: 'genetic_factors'},
          {title: '🔬 Environmental Triggers', value: 'environmental_triggers'},
          {title: '🔬 Research & Studies', value: 'research_studies'},
          // Treatment & Support
          {title: '💊 Treatment Options Overview', value: 'treatment_overview'},
          {title: '💊 Therapy Types (CBT, ACT, etc.)', value: 'therapy_types'},
          {title: '💊 Medication Information', value: 'medication_info'},
          {title: '💊 Self-Help Strategies', value: 'self_help'},
          // When to Seek Help
          {title: '💡 When to Seek Professional Help', value: 'when_to_seek_help'},
          {title: '💡 Finding a Therapist', value: 'finding_therapist'},
          {title: '💡 What to Expect in Treatment', value: 'what_to_expect'},
          {title: '💡 Talking to Your Doctor', value: 'talking_to_doctor'},
          // Supporting Others
          {title: '🤝 Supporting Family Members', value: 'supporting_family'},
          {title: '🤝 Parenting a Child with Anxiety', value: 'parenting'},
          {title: '🤝 What NOT to Say', value: 'what_not_to_say'},
          {title: '🤝 Creating a Supportive Environment', value: 'supportive_environment'},
          // Awareness & Advocacy
          {title: '📊 Statistics & Data', value: 'statistics_data'},
          {title: '📊 Breaking the Stigma', value: 'breaking_stigma'},
          {title: '📊 Awareness Campaigns', value: 'awareness_campaigns'},
          {title: '📊 Sharing & Educating Others', value: 'sharing_educating'},
        ],
        layout: 'list',
      },
    }),

    // Target Audience
    defineField({
      name: 'targetAudience',
      type: 'array',
      title: 'Target Audience',
      description: 'Who is this resource designed for?',
      of: [{type: 'string'}],
      group: 'education',
      options: {
        list: [
          {title: '👥 General Public', value: 'general_public'},
          {title: '🧑 Individuals with Anxiety', value: 'individuals'},
          {title: '👨‍👩‍👧 Parents & Caregivers', value: 'parents'},
          {title: '👨‍🏫 Educators & Teachers', value: 'educators'},
          {title: '⚕️ Healthcare Professionals', value: 'healthcare'},
          {title: '🔬 Researchers & Students', value: 'researchers'},
          {title: '💼 Workplace & HR', value: 'workplace'},
          {title: '🤝 Support Groups & Advocates', value: 'advocates'},
        ],
        layout: 'list',
      },
    }),

    // Content Depth (Reading Time)
    defineField({
      name: 'contentDepth',
      type: 'string',
      title: 'Content Depth',
      description: 'How in-depth is this content?',
      group: 'education',
      options: {
        list: [
          {title: '📄 Quick Read (2-5 min)', value: 'quick'},
          {title: '📰 Standard Article (5-15 min)', value: 'article'},
          {title: '📚 Deep Dive (15-30 min)', value: 'deep'},
          {title: '🔬 Research Paper (30+ min)', value: 'research'},
        ],
        layout: 'dropdown',
      },
    }),

    // Shareability (For Awareness)
    defineField({
      name: 'shareable',
      type: 'boolean',
      title: 'Shareable Resource',
      description: 'Is this designed to be easily shared (infographic, social media, etc.)?',
      initialValue: false,
      group: 'settings',
    }),
  ],

  // ✅ ENHANCED PREVIEW CONFIGURATION
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'thumbnail',
      category: 'category.name',
      featured: 'featured',
      status: 'status',
      learningLevel: 'learningLevel',
      shareable: 'shareable',
      description: 'description',
    },
    prepare({
      title,
      subtitle,
      media,
      category,
      featured,
      status,
      learningLevel,
      shareable,
      description,
    }) {
      const levelEmoji =
        learningLevel === 'beginner'
          ? '📖'
          : learningLevel === 'intermediate'
            ? '🧠'
            : learningLevel === 'advanced'
              ? '🔬'
              : ''
      const shareIcon = shareable ? '📤 ' : ''
      const statusIcon = status === 'draft' ? '📝 ' : status === 'published' ? '✅ ' : '📦 '

      // Build subtitle with more context
      const subtitleParts = [
        subtitle ? subtitle.toUpperCase() : '',
        category || '',
        description
          ? `"${description.substring(0, 50)}${description.length > 50 ? '...' : ''}"`
          : '',
      ].filter(Boolean)

      return {
        title: `${featured ? '⭐ ' : ''}${statusIcon}${shareIcon}${levelEmoji} ${title || 'Untitled Resource'}`,
        subtitle: subtitleParts.join(' • '),
        media,
      }
    },
  },

  // ✅ ORDERING OPTIONS
  orderings: [
    {
      title: 'Manual Order',
      name: 'manualOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Recently Added',
      name: 'dateDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: '_createdAt', direction: 'desc'},
      ],
    },
  ],
})
