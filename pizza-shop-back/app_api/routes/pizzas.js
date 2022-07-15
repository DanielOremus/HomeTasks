var express = require("express");
var router = express.Router();
const pizzasController = require("../controllers/pizzas"); // Підключення контролера

router.get("/", pizzasController.getList);
/* GET видалення книги за id. */
/* POST Створення нової книги. */
// Оновлення інформації про книгу після редагування
/* Відображення інформації про одну книгу */
module.exports = router;
