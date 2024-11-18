// customerModel.js
import {
  getCustomerByName,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../db/db.js";

class Customer {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.id = null; // ID will be assigned later when added to DB
  }

  static findCustomer(name) {
    return getCustomerByName(name);
  }

  static createCustomer(name, address, phone) {
    const customer = new Customer(name, address, phone);
    addCustomer(customer); // ID will be generated and assigned here
    return customer;
  }

  static modifyCustomer(name, updatedCustomerData) {
    updateCustomer(name, updatedCustomerData);
  }

  static removeCustomer(name) {
    deleteCustomer(name);
  }
}

export default Customer;
