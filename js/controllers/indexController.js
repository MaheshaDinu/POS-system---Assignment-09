const { addCustomer, searchCustomer } = require("./customerController");
const { addItem, searchItem } = require("./itemController");
const { placeOrder, searchOrder } = require("./orderController");

module.exports = {
  addCustomer,
  searchCustomer,
  addItem,
  searchItem,
  placeOrder,
  searchOrder,
};
