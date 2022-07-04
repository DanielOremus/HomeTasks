const PizzaModel = require("..models/pizza");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};
  PizzaModel.find(searchObj, function (err, pizzas) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });
    sendJSONResponse(res, 200, { success: true, data: pizzas });
  });
};
module.exports.addToCart = function (req, res, next) {
  let pizza = new PizzaModel({
    title: req.body.title,
    price: parseFloat(req.body.price),
    imgSrc: req.body.imgSrc,
    size: parseInt(req.body.size),
  });

  pizza.save(function (err, savedPizza) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild!" },
      });
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedPizza });
  });
};

module.exports.deleteFromCart = function (req, res) {
  PizzaModel.findByIdAndDelete(req.body.id, function (err) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Delete faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true });
  });
};

module.exports.getById = function (req, res) {
  //Пошук об"єкта-книги за id
  PizzaModel.findById(req.params.id, function (err, searchPizza) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Find book faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true, data: searchPizza });
  });
};
