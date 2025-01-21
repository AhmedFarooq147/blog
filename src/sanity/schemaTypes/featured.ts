
export const featured = {
    name: "featured",
    type: "document",
    title: "Featured Article",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Blog Image"
        },
        {
            name: "article",
            type: "string",
            title: "Article Name"
        },
        {
            name: "paragraph",
            type: "string",
            title: "Discription of Article"
        },
        {
            name: "button",
            type: "string",
            title: "Button"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            title: 'Blog Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]

}