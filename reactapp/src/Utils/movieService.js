import client from "./client";

const movieFields = 
`
title, 
"slug": slug.current,
"Actor" : Actor -> title
`;

const actorFields = 
`
title,
name,
"slug": slug.current,
`

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "Movie"]{${movieFields}}`)
    return data;
};

export const getActors = async () => {
    const data = await client.fetch(`*[_type == "Actor"]${actorFields}`)
    return data;
}