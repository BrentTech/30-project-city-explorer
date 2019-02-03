import React from 'react';

const Movies = props => {
  return (
    <section>
      <h3>Results from the Movie DB API</h3>
      <ul>
        {props.movies.map((movie, idx) =>  (
          <li key={`movies-${idx}`}>
            <p><span>{movie.title}</span> was released on {movie.released_on}. Out of {movie.total_votes} total votes, {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity}.</p>
            {/* <img src={movie.image_url}></img> */}
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
  </section>
  );
}

export default Movies;