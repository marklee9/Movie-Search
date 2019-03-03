import React, { Component } from 'react';
import * as MovieActions from './movie_api';
import MovieIndexItem from './movieIndexItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: "",
      movies: [],
    };
  }

  // life cycle methods
  componentDidMount() {
    this.handleFetch("spider-man");
  }

  // Other functions
  handleUpdate() {
    let { query } = this.state;
    return e => {
      this.setState({query : e.target.value});
      if (query) this.handleFetch(query);
    }
  }

  handleFetch(query) {
    MovieActions.searchMovies(query)
      .then(movies => {
        if (movies) this.setState({movies})}
      )
  }

  // rendering
  mapMovies() {
    return this.state.movies.map((movie, i) => {
      let { title, release_date, vote_average, poster_path, overview } = movie;
      return (
        <MovieIndexItem key={i} title={title} date={release_date} vote={vote_average} poster={poster_path} overview={overview}></MovieIndexItem>
      )
    })
  }

  searchBar() {
    return (
      <div className="searchBar">
        <div className="searchInput">
          <input type="text" onChange={this.handleUpdate()} autoFocus/>
        </div>
        <div className="sortBy">
          <div>Title</div>
          <div>Release Year</div>
          <div>Rating</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        {this.searchBar()}
        {this.mapMovies()}
      </div>
    );
  }
}

export default App;