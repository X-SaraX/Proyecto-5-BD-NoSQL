const express = require("express");

const {
  getMovies,
  getMovieByID,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/movies.controllers");

const router = express.Router();

//-------Routes--------
router.get("/", getMovies);
router.get("/:id", getMovieByID);

router.post("/", createMovie);

router.delete("/:id", deleteMovie);

router.put("/:id", updateMovie);

module.exports = router;
