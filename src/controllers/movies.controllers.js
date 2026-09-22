const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).json({
      message: "Error obteniendo las películas",
      error: err.message,
    });
  }
};

const getMovieByID = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }
    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json({
      message: "Error obteniendo la película",
      error: err.message,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    return res.status(201).json(savedMovie);
  } catch (err) {
    return res.status(500).json({
      message: "Error creando la película",
      error: err.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res
        .status(404)
        .json({ message: "Película a borrar no encontrada" });
    }
    return res.status(200).json({ message: "Película borrada" });
  } catch (err) {
    return res.status(500).json({
      message: "Error borrando la película",
      error: err.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateMovie) {
      return res
        .status(404)
        .json({ message: "No se encuentra la película a actualizar" });
    }
    return res.status(200).json(updatedMovie);
  } catch (err) {
    return res.status(500).json({
      message: "Error actualizando la película",
      error: err.message,
    });
  }
};

module.exports = {
  getMovies,
  getMovieByID,
  createMovie,
  deleteMovie,
  updateMovie,
};
