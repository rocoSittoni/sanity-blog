import { defineField, defineType } from "sanity"

export default defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                  type: 'string',
                },
            ],
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                  type: 'string',
                },
            ],
        }),
        defineField({
            name: 'launchDate',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'comments',
            title: 'Comments',
            type: 'boolean',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        }),
    ]
})