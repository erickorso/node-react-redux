/*
** user controller
*/ 
const MovieService = require("../services/MovieService");

class MovieController {
  getMovies = (req, res) => {
    return MovieService.allmovies(req, res);
  };

  getMoviesByYear = (req, res) => {
    return MovieService.moviesByYear(req, res);
  };
}

module.exports = new MovieController();