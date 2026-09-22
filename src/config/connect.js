const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/movies");
    console.log("Conectado con la base de datos de MongoDB");
  } catch (error) {
    console.error("Fallo al conectarse a MongoDB", error.message);
  }
};

module.exports = connectDB;
