const movie = {
    title: "movie",
    name: "Movie", 
    type: "document",
    fields: [
    {
        title: "title", 
        name: "title", 
        type: "string"
    }, 
    {
        title: "actor", 
        name: "Actor",
        type: "reference",
        to: [{type: "Actor"}]
    }
]
}

export default movie;