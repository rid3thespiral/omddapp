import React, { Component } from 'react';
import './App.css';
import VideoList from './components/movie_list';
import Navbar from './components/navbar'

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
    <React.Fragment>
      <Navbar></Navbar>
      
    <div className="container">
      <h1>My favourite movies</h1>
      <VideoList movies={this.state.movies}></VideoList>
    </div></React.Fragment>
  );
  }
}

export default App;
