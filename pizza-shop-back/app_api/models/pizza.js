const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Створення схеми моделі
const pizzaScheme = new Schema({
  title: String,
  price: Number,
  imgSrc: String,
  description: String,
});
//Створення моделі
const PizzaModel = mongoose.model("Pizza", pizzaScheme);
module.exports = PizzaModel;
