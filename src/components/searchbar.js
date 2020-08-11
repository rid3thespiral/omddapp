import React, {Component} from 'react';

//controlled Component to handle the text and the click on the button

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: 'la dolce vita'
        }
    }
    SearchChange = (evt) => {
        this.setState({term: evt.target.value})
        
    }
    render(){
    return(
    <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" 
    onChange={this.SearchChange} 
    type="search" value={this.state.term} placeholder="Search" 
    aria-label="Search"/>
    <button onClick = {(evt)=> { evt.preventDefault(); this.props.onSearchMovie(this.state.term)}} className="btn btn-outline-success my-2 my-sm-0" 
    type="submit">Search</button>
  </form>)
}}