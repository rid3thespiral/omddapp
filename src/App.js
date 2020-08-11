import React, { Component } from 'react';
import './App.css';
import VideoList from './components/movie_list';
import Navbar from './components/navbar'

const APIKEY = '1328aa12';
const API_URL = 'http://www.omdbapi.com';

function fetchMovies(search = ''){
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
  searchMovies = (term = '')=>{
    if(term.length < 3){
      return
    }
    fetchMovies(term).then(res => {
      this.setState({
        movies: res.Search,
        totalCount : res.TotalResults
      })
    })
  }

  componentDidMount(){
    this.searchMovies('back to the future')
  }

  render(){
  return (
    <React.Fragment>
      <Navbar onSearchTerm = {this.searchMovies}></Navbar>
      
    <div className="container">
      <h1>My favourite movies</h1>
      <VideoList movies={this.state.movies}></VideoList>
    </div></React.Fragment>
  );
  }
}

export default App;
