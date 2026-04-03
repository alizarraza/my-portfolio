import { defineType, defineField } from 'sanity'

export const experienceSchema = defineType({
  name:  'experience',
  title: 'Experience',
  type:  'document',
  fields: [
    defineField({ name: 'role',    title: 'Role',    type: 'string', validation: R => R.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string', validation: R => R.required() }),
    defineField({ name: 'period',  title: 'Period',  type: 'string', validation: R => R.required() }),
    defineField({ name: 'current', title: 'Current Role?', type: 'boolean', initialValue: false }),
    defineField({ name: 'desc',    title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'tags',    title: 'Tech Tags',   type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'order',   title: 'Order',       type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'role', subtitle: 'company' },
  },
})

export const skillSchema = defineType({
  name:  'skill',
  title: 'Skill',
  type:  'document',
  fields: [
    defineField({ name: 'name',     title: 'Name',     type: 'string', validation: R => R.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: {
        list: [
          { title: 'Frontend',  value: 'frontend' },
          { title: 'Mobile',    value: 'mobile'   },
          { title: 'CMS',       value: 'cms'      },
          { title: 'Tools',     value: 'tools'    },
        ],
      },
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category' },
  },
})
