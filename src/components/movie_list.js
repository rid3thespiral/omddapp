import React from 'react';

export default function movieList({movies}){
    return (
<ul>
      {
        movies.map(movie => <li key={movie.imdbID}>{movie.Title}</li>)
      }
</ul>)
}
