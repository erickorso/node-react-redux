var express = require('express');
var router = express.Router();
const MovieController = require("../controllers/MovieController");

router.get('/', (req, res)  => MovieController.getMovies(req, res))

router.get("/:year", (req, res) => MovieController.getMoviesByYear(req, res));

module.exports = router;
