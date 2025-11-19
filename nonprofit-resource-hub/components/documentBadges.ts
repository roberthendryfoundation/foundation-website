import {DocumentBadgeDescription} from 'sanity'

export function getDocumentBadges(document: any): DocumentBadgeDescription[] {
  const badges: DocumentBadgeDescription[] = []

  // Status badge
  if (document.status) {
    const statusColors: Record<string, DocumentBadgeDescription['color']> = {
      published: 'success',
      draft: 'warning',
      archived: 'neutral',
    }

    badges.push({
      label:
        document.status === 'published'
          ? '✅ Published'
          : document.status === 'draft'
            ? '📝 Draft'
            : '📦 Archived',
      color: statusColors[document.status] || 'neutral',
      title: `Status: ${document.status}`,
    })
  }

  // Featured badge
  if (document.featured) {
    badges.push({
      label: '⭐ Featured',
      color: 'warning',
      title: 'This item is featured',
    })
  }

  // Missing required fields badge
  if (document._type === 'resource') {
    const missingFields: string[] = []
    if (!document.category) missingFields.push('category')
    if (!document.description) missingFields.push('description')
    // Note: thumbnail is optional, so we don't check for it

    if (missingFields.length > 0) {
      badges.push({
        label: `⚠️ Missing ${missingFields.length}`,
        color: 'critical',
        title: `Missing: ${missingFields.join(', ')}`,
      })
    }
  }

  return badges
}
