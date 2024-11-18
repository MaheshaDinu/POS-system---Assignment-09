// db.js
const customersDatabase = [];
let lastCustomerId = 0; // This will track the last used customer ID

function getCustomerByName(name) {
  return customersDatabase.find(
    (customer) => customer.name.toLowerCase() === name.toLowerCase()
  );
}

function addCustomer(customer) {
  // Increment customer ID before adding the customer
  lastCustomerId++;
  customer.id = `C${String(lastCustomerId).padStart(3, "0")}`; // Assign an ID like C001, C002, etc.
  customersDatabase.push(customer);
}

function updateCustomer(name, updatedCustomer) {
  const index = customersDatabase.findIndex(
    (customer) => customer.name.toLowerCase() === name.toLowerCase()
  );
  if (index !== -1) {
    customersDatabase[index] = {
      ...customersDatabase[index],
      ...updatedCustomer,
    };
  }
}

function deleteCustomer(name) {
  const index = customersDatabase.findIndex(
    (customer) => customer.name.toLowerCase() === name.toLowerCase()
  );
  if (index !== -1) {
    customersDatabase.splice(index, 1);
  }
}

export { getCustomerByName, addCustomer, updateCustomer, deleteCustomer };
