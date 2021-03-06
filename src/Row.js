import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
 

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //we need a Snippet of code which runs on a specific condition/varaiable
    useEffect(() =>{
        //make a reques when this particular row loads. useEffect allows the row to run once when the row loads
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick =(movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                
            })
            .catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>
            <div className="row__posters">
                {/* several row_poster */}
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        onClick = {() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        // If the the row is large use poster_path, otherwise iser the backdrop image.
                        // remember to change this when youre done
                       
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.poster_path
                        }`} 
                        alt={movie.name}
                        title={movie.name}
                     />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
            
        </div>
    )
}

export default Row