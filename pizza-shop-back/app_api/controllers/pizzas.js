const PizzaModel = require("../models/pizza");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  let searchObj = {};
  if (req.query.searchParams) {
    searchObj = { title: req.query.searchParams };
  }
  PizzaModel.find(searchObj, function (err, pizzas) {
    if (err) {
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });
    }
    sendJSONResponse(res, 200, { success: true, data: pizzas });
  });
};
