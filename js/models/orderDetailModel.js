class OrderDetail {
  constructor(orderId, itemId, quantity, price) {
    this.orderId = orderId;
    this.itemId = itemId;
    this.quantity = quantity;
    this.price = price;
  }
}

module.exports = OrderDetail;
