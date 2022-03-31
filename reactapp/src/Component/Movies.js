import { useState, useEffect } from "react"
import { getMovies } from "../Utils/movieService"

const Movies = ({title, actor}) => {
    //For å hente ut info til Sanity
    const [movies, setMovies] = useState([])

    const getData = async () => {
        //Fremtidig for å kunne hente ut actor fra movieservice fra Utils
        const movie = await getMovies([])
        setMovies();
        console.log(movie);
    }

    useEffect(() => {
        getMovies();
    }, [])
    

    return(    
    <>
        {movies?.length > 0 ? <p>{JSON.stringify(movies)}</p> : null}
        <button type = "button" onClick={getData}>Vis filmer</button>
        </>
    )

}

export default Movies;