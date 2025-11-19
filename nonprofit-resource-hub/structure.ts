import {StructureBuilder, StructureResolverContext} from 'sanity/structure'
import {
  DocumentIcon,
  FolderIcon,
  ImageIcon,
  HeartIcon,
  ClockIcon,
  WarningOutlineIcon,
  DocumentTextIcon,
  EarthGlobeIcon,
  VideoIcon,
  BoltIcon,
} from '@sanity/icons'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content Management')
    .items([
      // 🏠 DASHBOARD - Recently edited items
      S.listItem()
        .title('🏠 Recently Edited')
        .icon(ClockIcon)
        .child(
          S.documentList()
            .title('Recently Edited')
            .filter('_type in ["resource", "story", "testimonial", "category"]')
            .defaultOrdering([{field: '_updatedAt', direction: 'desc'}])
            .menuItems(S.documentTypeList('resource').getMenuItems()),
        ),
      // 📚 RESOURCES SECTION
      S.listItem()
        .title('📚 Resources')
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Resources')
            .items([
              S.listItem()
                .title('All Resources')
                .schemaType('resource')
                .child(S.documentTypeList('resource').title('All Resources')),
              S.divider(),
              S.listItem()
                .title('⭐ Featured Resources')
                .schemaType('resource')
                .child(
                  S.documentTypeList('resource')
                    .title('Featured Resources')
                    .filter('_type == "resource" && featured == true')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
              S.listItem()
                .title('✅ Published')
                .schemaType('resource')
                .child(
                  S.documentTypeList('resource')
                    .title('Published Resources')
                    .filter('_type == "resource" && status == "published"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('📝 Drafts')
                .schemaType('resource')
                .child(
                  S.documentTypeList('resource')
                    .title('Draft Resources')
                    .filter('_type == "resource" && status == "draft"'),
                ),
              S.listItem()
                .title('📦 Archived')
                .schemaType('resource')
                .child(
                  S.documentTypeList('resource')
                    .title('Archived Resources')
                    .filter('_type == "resource" && status == "archived"'),
                ),
              S.divider(),
              S.listItem()
                .title('⚠️ Needs Attention')
                .schemaType('resource')
                .icon(WarningOutlineIcon)
                .child(
                  S.documentTypeList('resource')
                    .title('Resources Needing Attention')
                    .filter('_type == "resource" && (!defined(category) || !defined(description))'),
                ),
              S.divider(),
              S.listItem()
                .title('📄 PDF Resources')
                .schemaType('resource')
                .icon(DocumentTextIcon)
                .child(
                  S.documentTypeList('resource')
                    .title('PDF Resources')
                    .filter('_type == "resource" && type == "pdf"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('🌐 Website Resources')
                .schemaType('resource')
                .icon(EarthGlobeIcon)
                .child(
                  S.documentTypeList('resource')
                    .title('Website Resources')
                    .filter('_type == "resource" && type == "website"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('🎥 Video Resources')
                .schemaType('resource')
                .icon(VideoIcon)
                .child(
                  S.documentTypeList('resource')
                    .title('Video Resources')
                    .filter('_type == "resource" && type == "video"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('🎵 Audio Resources')
                .schemaType('resource')
                .icon(BoltIcon)
                .child(
                  S.documentTypeList('resource')
                    .title('Audio Resources')
                    .filter('_type == "resource" && type == "audio"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
            ]),
        ),

      // 📁 CATEGORIES SECTION
      S.listItem()
        .title('📁 Categories')
        .icon(FolderIcon)
        .child(
          S.list()
            .title('Categories')
            .items([
              S.listItem()
                .title('All Categories')
                .schemaType('category')
                .child(
                  S.documentTypeList('category')
                    .title('All Categories')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
              S.listItem()
                .title('⭐ Featured Categories')
                .schemaType('category')
                .child(
                  S.documentTypeList('category')
                    .title('Featured Categories')
                    .filter('_type == "category" && featured == true')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
            ]),
        ),

      // 📖 STORIES SECTION
      S.listItem()
        .title('📖 Stories')
        .icon(ImageIcon)
        .child(
          S.list()
            .title('Stories')
            .items([
              S.listItem()
                .title('All Stories')
                .schemaType('story')
                .child(S.documentTypeList('story').title('All Stories')),
              S.divider(),
              S.listItem()
                .title('⭐ Featured Stories')
                .schemaType('story')
                .child(
                  S.documentTypeList('story')
                    .title('Featured Stories')
                    .filter('_type == "story" && featured == true')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
              S.listItem()
                .title('✅ Published')
                .schemaType('story')
                .child(
                  S.documentTypeList('story')
                    .title('Published Stories')
                    .filter('_type == "story" && status == "published"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('📝 Drafts')
                .schemaType('story')
                .child(
                  S.documentTypeList('story')
                    .title('Draft Stories')
                    .filter('_type == "story" && status == "draft"'),
                ),
              S.divider(),
              S.listItem()
                .title('⚠️ Needs Attention')
                .schemaType('story')
                .icon(WarningOutlineIcon)
                .child(
                  S.documentTypeList('story')
                    .title('Stories Needing Attention')
                    .filter(
                      '_type == "story" && (!defined(image) || !defined(summary) || !defined(publishedAt))',
                    ),
                ),
            ]),
        ),

      // 💬 TESTIMONIALS SECTION
      S.listItem()
        .title('💬 Testimonials')
        .icon(HeartIcon)
        .child(
          S.list()
            .title('Testimonials')
            .items([
              S.listItem()
                .title('All Testimonials')
                .schemaType('testimonial')
                .child(
                  S.documentTypeList('testimonial')
                    .title('All Testimonials')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
              S.divider(),
              S.listItem()
                .title('⭐ Featured on About Page')
                .schemaType('testimonial')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Featured on About Page')
                    .filter('_type == "testimonial" && featured == true')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
              S.listItem()
                .title('🏠 Show on Homepage')
                .schemaType('testimonial')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Homepage Testimonials')
                    .filter('_type == "testimonial" && showOnHomepage == true')
                    .defaultOrdering([{field: 'order', direction: 'asc'}]),
                ),
              S.listItem()
                .title('✅ Published')
                .schemaType('testimonial')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Published Testimonials')
                    .filter('_type == "testimonial" && status == "published"')
                    .defaultOrdering([{field: 'dateAdded', direction: 'desc'}]),
                ),
              S.listItem()
                .title('📝 Drafts')
                .schemaType('testimonial')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Draft Testimonials')
                    .filter('_type == "testimonial" && status == "draft"'),
                ),
              S.divider(),
              S.listItem()
                .title('⚠️ Needs Attention')
                .schemaType('testimonial')
                .icon(WarningOutlineIcon)
                .child(
                  S.documentTypeList('testimonial')
                    .title('Testimonials Needing Attention')
                    .filter(
                      '_type == "testimonial" && (!defined(photo) || !defined(quote) || !defined(category))',
                    ),
                ),
            ]),
        ),

      // Divider before raw schema access (for advanced users)
      S.divider(),

      // Raw schema types (for power users/developers)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['resource', 'category', 'story', 'testimonial'].includes(listItem.getId() || ''),
      ),
    ])
