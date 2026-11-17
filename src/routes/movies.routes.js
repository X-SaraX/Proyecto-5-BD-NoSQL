
const express = require("express");

const {
  getMovies,
  getMovieByID,
  getMoviesByTitle,
  getMoviesByGenre,
  getMoviesByYear,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/movies.controllers");

const router = express.Router();

//-------Routes--------

// Obtener todas las películas
router.get("/", getMovies);


router.get("/title/:title", getMoviesByTitle);
router.get("/genre/:genre", getMoviesByGenre);
router.get("/year/:year", getMoviesByYear);


router.get("/:id", getMovieByID);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

module.exports = router;

