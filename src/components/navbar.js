import React from 'react';
import Searchbar from './searchbar';
import Menubar from './menubar';

export default function Navbar({onSearchTerm}){
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed top">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Menubar></Menubar>
    <Searchbar onSearchMovie={onSearchTerm}></Searchbar>
  </div>
</nav>

)}