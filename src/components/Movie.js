import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function setVoteColor(num) {
    if(num >= 8) {
        return "green";
    }else if(num >= 6) {
        return "orange";
    }else {
        return "red";
    }
}

function Movie({title, poster_path, overview, vote_average}) {
    return(
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`num ${setVoteColor(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;