import { key } from './key';

export const getMovie = () => {
  return fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}`)
    .then((res) => res.json());
}

export const searchMovies = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
    .then(res => res.json())
    .then(data => data.results);
}

export const searchMovie = (movieId) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${key}&language=en-US`)
    .then(res => res.json());
}