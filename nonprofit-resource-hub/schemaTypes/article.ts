import { defineType, defineField } from 'sanity'

export const article = defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
        defineField({ name: 'body', type: 'array', title: 'Body', of: [{ type: 'block' }] }),
        defineField({ name: 'author', type: 'string', title: 'Author' }),
        defineField({ name: 'date', type: 'datetime', title: 'Publish Date' }),
        defineField({ name: 'readTime', type: 'number', title: 'Read Time (minutes)' }),
        defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
        defineField({ name: 'category', type: 'reference', to: [{ type: 'category' }] }),
        defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
        defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
        defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description' }),
        defineField({ name: 'ogImage', type: 'image', title: 'OG Image' }),
    ],
})
