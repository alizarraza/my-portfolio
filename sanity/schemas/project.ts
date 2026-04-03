import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name:  'project',
  title: 'Project',
  type:  'document',
  fields: [
    defineField({ name: 'title',       title: 'Title',           type: 'string',  validation: R => R.required() }),
    defineField({ name: 'slug',        title: 'Slug',            type: 'slug',    options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'order',       title: 'Order',           type: 'number',  validation: R => R.required() }),
    defineField({ name: 'featured',    title: 'Featured',        type: 'boolean', initialValue: false }),
    defineField({ name: 'year',        title: 'Year',            type: 'string'  }),
    defineField({ name: 'category',    title: 'Category',        type: 'string'  }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3, validation: R => R.required() }),
    defineField({ name: 'longDesc',    title: 'Long Description', type: 'text',  rows: 6 }),
    defineField({
      name: 'tags', title: 'Tags', type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'coverImage', title: 'Cover Image', type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
      validation: R => R.required(),
    }),
    defineField({
      name: 'images', title: 'Additional Images', type: 'array',
      of: [{
        type: 'image', options: { hotspot: true },
        fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
      }],
    }),
    defineField({ name: 'videoUrl',   title: 'Video URL (Vimeo/YouTube)', type: 'url' }),
    defineField({ name: 'liveUrl',    title: 'Live URL',                  type: 'url' }),
    defineField({ name: 'githubUrl',  title: 'GitHub URL',               type: 'url' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select:   { title: 'title', subtitle: 'category', media: 'coverImage' },
    prepare: ({ title, subtitle, media }) => ({ title, subtitle, media }),
  },
})
