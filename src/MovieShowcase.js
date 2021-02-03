import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    let count = 1
    return movieData.map(data => <MovieCard movieData = {data} key={count++}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

MovieShowcase.defaultProps = {
  title: 'unknown',
  IMDBRating: null,
  genres: 'No Genre(s) Found',
  poster: "default"
} 
