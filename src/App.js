import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {movies} from './menu.json'
import MovieForm from './components/MovieForm';

class App extends Component {

  constructor(){
    super();
    this.state = {
      movies
    }
    this.hanndleNewMovie = this.hanndleNewMovie.bind(this);
  }

  hanndleNewMovie(movie){
    this.setState({
      movies : [...this.state.movies,movie]
    })
  }

  removeItem(index){
    if(window.confirm('estas eliminando esta monda')){
      this.setState({
        movies: this.state.movies.filter((e,i) => {
           return index !== i;
        })
      })
    }
  }
  render() {
     let menuSemana = this.state.movies.map((m,i) => {
      return(
          <div className="col-sm-4 mt-5" key={i}> 
            <div className="card"><div className="card-header">{m.title}</div>
            <div className="card-body"> description: {m.description}
              <br/><br/> Repart : {m.repart}
              </div></div>
              <button className="btn btn-danger" onClick={this.removeItem.bind(this,i)}> Eliminar </button>
          </div>
        );
    });

    return (
      <div className="App">
        <Navigation autor="Nicolás Laverde"/>
        <h1 className="display-1 h1-title"> Peliculas </h1>
        <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mt-5">
              <MovieForm addNewMovie={this.hanndleNewMovie}/>
            </div>
            {menuSemana}
          </div>
        </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
