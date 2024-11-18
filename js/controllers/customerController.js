// customerController.js
import Customer from "../models/customerModel";

function searchCustomer() {
  const searchValue = document
    .getElementById("searchCustomerInput")
    .value.toLowerCase();
  const customer = Customer.findCustomer(searchValue);

  if (customer) {
    // Populate form with customer data, including customer ID
    document.getElementById("customerId").value = customer.id;
    document.getElementById("customerName").value = customer.name;
    document.getElementById("customerAddress").value = customer.address;
    document.getElementById("customerPhone").value = customer.phone;

    // Show the form overlay
    document.getElementById("customerFormOverlay").style.display = "flex";
  } else {
    alert("Customer not found.");
  }
}

function saveCustomer() {
  const name = document.getElementById("customerName").value;
  const address = document.getElementById("customerAddress").value;
  const phone = document.getElementById("customerPhone").value;

  if (name && address && phone) {
    const customer = Customer.createCustomer(name, address, phone);
    alert(`Customer saved with ID: ${customer.id}`);
    closeForm();
  } else {
    alert("Please fill out all fields.");
  }
}

function deleteCustomer() {
  const name = document.getElementById("customerName").value;
  Customer.removeCustomer(name);
  alert("Customer deleted.");
  closeCustomerForm();
}

function editCustomer() {
  // Enable input fields for editing
  document.getElementById("customerName").disabled = false;
  document.getElementById("customerAddress").disabled = false;
  document.getElementById("customerPhone").disabled = false;

  // Change "Edit" button to "Save"
  const editButton = document.querySelector(".edit-btn");
  editButton.textContent = "Save";
  editButton.onclick = saveUpdatedCustomer;
}

function saveUpdatedCustomer() {
  const name = document.getElementById("customerName").value;
  const updatedData = {
    address: document.getElementById("customerAddress").value,
    phone: document.getElementById("customerPhone").value,
  };

  Customer.modifyCustomer(name, updatedData);
  alert("Customer details saved!");
  closeCustomerForm();
}

function closeCustomerForm() {
  const formContainer = document.querySelector(".customer-form-container");
  formContainer.style.animation = "slideDown 0.5s ease forwards";
  setTimeout(() => {
    document.getElementById("customerFormOverlay").style.display = "none";
    formContainer.style.animation = "slideUp 0.5s ease forwards";
  }, 500);
}

function closeForm() {
  const formContainer = document.querySelector(".form-container");
  formContainer.style.animation = "slideDown 0.5s ease forwards";
  setTimeout(() => {
    document.getElementById("formOverlay").style.display = "none";
    formContainer.style.animation = "slideUp 0.5s ease forwards";
  }, 500);
}

export {
  searchCustomer,
  saveCustomer,
  deleteCustomer,
  editCustomer,
  saveUpdatedCustomer,
};
