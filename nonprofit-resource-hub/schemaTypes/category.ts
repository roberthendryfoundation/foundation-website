import {defineType, defineField} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    defineField({name: 'icon', type: 'string', title: 'Icon'}),
  ],
})
