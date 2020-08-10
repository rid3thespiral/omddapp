import React, { Component } from 'react';
import './App.css';
const APIKEY = '1328aa12';
const API_URL = 'http://www.omdbapi.com';

function fetchMovies(search = '=back to the future'){
  return fetch(API_URL+ '?apikey=' + APIKEY+'&s='+search).then(res => res.json());
};

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      movies : [],
      totalCount: 0
    }
  }

  componentDidMount(){
    fetchMovies().then(res => {
      this.setState({
        movies: res.Search
      })
    })
  }

  render(){
  return (
    <div className="App">
      <h1>My favourite movies</h1>
      <ul>
      {
        this.state.movies.map(movie => <li key={movie.imdbID}>{movie.Title}</li>)
      }
      </ul>
    </div>
  );
  }
}

export default App;
