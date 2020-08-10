import React from 'react';
import MovieItem from './movie_item';

export default function movieList({movies}){
    return (
<ul>
      {
        movies.map(movie => <MovieItem movie={movie}/>)
      }
</ul>)

}
