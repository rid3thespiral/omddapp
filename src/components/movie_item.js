import React from 'react';

export default function movieItem({movie}){
    return (
        <div class="card" key={movie.imdbID}>
  <img class="card-img-top" src={movie.Poster} />
  <div class="card-body">
    <h5 class="card-title">{movie.Title}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 )
}