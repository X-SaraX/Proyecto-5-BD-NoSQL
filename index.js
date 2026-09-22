const express = require("express");
const connectDB = require("./src/config/connect");
const moviesRouter = require("./src/routes/movies.routes");
const server = express();
const mongoose = require("mongoose");

server.use(express.json());

connectDB();

const PORT = 3000;

// -----RUTAS-------
server.use("/api/movies", moviesRouter);
server.use((req, res) => {
  return res.status(404).json({ error: "Route not found" });
});

//Levantamos el servidor
server.listen(PORT, () => {
  console.log("En escucha ");
});
