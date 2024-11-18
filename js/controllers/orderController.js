const Order = require("../models/orderModel");
const OrderDetail = require("../models/orderDetailModel");
const { checkItemQuantity } = require("./itemController");

let orders = [];
let orderDetails = [];

function placeOrder(customerId, itemList, discount = 0) {
  const orderId = `ORD-${Date.now()}`;
  const total = calculateTotal(itemList, discount);
  const date = new Date().toLocaleString();

  const order = new Order(orderId, customerId, itemList, discount, total, date);
  orders.push(order);

  itemList.forEach((item) => {
    if (checkItemQuantity(item.id, item.quantity)) {
      const orderDetail = new OrderDetail(
        orderId,
        item.id,
        item.quantity,
        item.price
      );
      orderDetails.push(orderDetail);
    }
  });

  return order;
}

function calculateTotal(itemList, discount) {
  let total = 0;
  itemList.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total - total * (discount / 100);
}

function searchOrder(orderId) {
  return orders.find((order) => order.id === orderId);
}

module.exports = {
  placeOrder,
  searchOrder,
};
