import React, { Component } from 'react';
import './App.css';
const APIKEY = '1328aa12';
const API_URL = 'http://www.omdbapi.com';

class App extends Component{
  componentDidMount(){
    fetch(API_URL+ '?apikey=' + APIKEY+'&s=back to the future').then(res => res.json())
    .then(apiResult => console.log(apiResult));
  }
  render(){
  return (
    <div className="App">
      <h1>My favourite movies</h1>
    </div>
  );
  }
}

export default App;
