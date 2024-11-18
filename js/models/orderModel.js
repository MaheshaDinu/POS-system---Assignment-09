class Order {
  constructor(id, customerId, items, discount, total, date) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.discount = discount;
    this.total = total;
    this.date = date;
  }
}

module.exports = Order;
