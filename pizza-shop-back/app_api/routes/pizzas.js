var express = require("express");
var router = express.Router();
const pizzasController = require("../controllers/pizzas"); // Підключення контролера
/* GET список книг. */
router.get("/list", pizzasController.getList);
/* GET видалення книги за id. */
router.delete("/list", pizzasController.deleteFromCart);
/* POST Створення нової книги. */
router.post("/list", pizzasController.addToCart);
// Оновлення інформації про книгу після редагування
/* Відображення інформації про одну книгу */
router.get("/list/:id", booksController.getById);

module.exports = router;
