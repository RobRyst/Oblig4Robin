const actor = {
    title: "actor", 
    name: "Actor", 
    type: "document", 
    fields: [
    {
        title: "FullName", 
        name: "title",
        type: "string",
        desctiption: "Skuespillerens fulle navn"
    },
    {
        title: "Slug", 
        name: "slug",
        type: "slug",
        desctiption: "Dette er actors unike URL",
        validation: (Rule) => Rule.required(), 
            options: {
                source: "title", 
                maxLength: 96,
            }
    }
    ]
}

export default actor;