const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Створення схеми моделі
const pizzaScheme = new Schema({
  title: String,
  price: Number,
  imgSrc: String,
  size: Number,
});
//Створення моделі
const BookModel = mongoose.model("Book", bookScheme);
module.exports = BookModel;
