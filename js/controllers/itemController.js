const Item = require("../models/itemModel");

let items = [];

function addItem(name, price, quantity) {
  const newItem = new Item(Date.now(), name, price, quantity);
  items.push(newItem);
  return newItem;
}

function searchItem(query) {
  return items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

function checkItemQuantity(itemId, quantity) {
  const item = items.find((i) => i.id === itemId);
  return item && item.quantity >= quantity;
}

module.exports = {
  addItem,
  searchItem,
  checkItemQuantity,
};
