function showSection(sectionId, link) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.classList.remove("active-link");
  });

  link.classList.add("active-link");
}
function updateDateTime() {
  const now = new Date();

  // Format date as 'Day, Month Date, Year'
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("current-date").textContent = now.toLocaleDateString(
    "en-US",
    options
  );

  // Format time as 'HH:MM:SS AM/PM'
  document.getElementById("current-time").textContent =
    now.toLocaleTimeString("en-US");
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();

//search edit delete item
const fakeItems = {
  "birthday cake": {
    name: "Birthday Cake",
    price: "Rs.1000",
    quantity: "200",
  },
  "doughnut ": {
    name: "Doughnut ",
    price: "Rs.200",
    quantity: "1000",
  },
};

// Function to search and display customer details
function searchItem() {
  const searchValue = document
    .getElementById("searchItemInput")
    .value.toLowerCase();
  const item = fakeItems[searchValue];

  if (item) {
    // Populate form with customer data
    document.getElementById("itemName").value = item.name;
    document.getElementById("itemPrice").value = item.price;
    document.getElementById("itemQuantity").value = item.quantity;

    // Show the form overlay
    document.getElementById("itemFormOverlay").style.display = "flex";
  } else {
    alert("Item not found.");
  }
}

// Function to close the item form overlay
function closeItemForm() {
  const formContainer = document.querySelector(".item-form-container");
  formContainer.style.animation = "slideDown 0.5s ease forwards";
  setTimeout(() => {
    document.getElementById("itemFormOverlay").style.display = "none";
    formContainer.style.animation = "slideUp 0.5s ease forwards";
  }, 500);
}

// Function to delete item (simulated)
function deleteItem() {
  alert("Item deleted (simulated).");
  closeItemForm();
}

// Function to edit customer details
function editItem() {
  // Enable input fields for editing
  document.getElementById("itemName").disabled = false;
  document.getElementById("itemPrice").disabled = false;
  document.getElementById("itemQuantity").disabled = false;

  // Change "Edit" button to "Save"
  const editButton = document.querySelector(".edit-btn");
  editButton.textContent = "Save";
  editButton.onclick = saveItem;
}

// Function to save updated customer details (simulated)
function saveItem() {
  alert("Item details saved (simulated).");
  document.getElementById("itemDetailsForm").reset();
  closeItemForm();
}

// Function to open the "Add New Item" form
function openItemForm() {
  document.getElementById("itemFormOverlay").style.display = "flex";
}

// Function to close the "Add New Item" form with a slide-down animation
function closeItemForm() {
  const formContainer = document.querySelector(".item-form-container");
  formContainer.style.animation = "slideDown 0.5s ease forwards";
  setTimeout(() => {
    document.getElementById("itemFormOverlay").style.display = "none";
    formContainer.style.animation = "slideUp 0.5s ease forwards";
  }, 500);
}

// Function to save the item (simulated) and close the form
function saveItem() {
  // Get values from the form
  const itemName = document.getElementById("itemNameInput").value;
  const itemPrice = document.getElementById("itemPriceInput").value;
  const itemQuantity = document.getElementById("itemQuantityInput").value;

  // Simulate saving the item data (could add it to a fakeItems object or display a message)
  console.log("Item Saved:", { itemName, itemPrice, itemQuantity });

  alert("Item saved!");

  // Clear form inputs after saving
  document.getElementById("itemForm").reset();
  closeItemForm(); // Close the form after saving
}

const fakeOrders = {
  "001": {
    id: "001",
    customerName: "Mahesha Dinu",
    date: "2023-10-31",
    total: "Rs.1500",
  },
};

// Show existing orders in the table
function showAllOrders() {
  const tableBody = document.getElementById("orderTableBody");
  tableBody.innerHTML = ""; // Clear the table

  Object.values(fakeOrders).forEach((order) => {
    const row = `<tr>
        <td>${order.id}</td>
        <td>${order.customerName}</td>
        <td>${order.date}</td>
        <td>${order.total}</td>
      </tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

// Search Order
function searchOrder() {
  const searchValue = document
    .getElementById("orderSearchInput")
    .value.toLowerCase();
  const order = Object.values(fakeOrders).find(
    (order) => order.customerName.toLowerCase() === searchValue
  );

  if (order) {
    document.getElementById("orderId").value = order.id;
    document.getElementById("orderCustomerName").value = order.customerName;
    document.getElementById("orderDate").value = order.date;
    document.getElementById("orderTotal").value = order.total;
    document.getElementById("orderFormOverlay").style.display = "flex";
  } else {
    alert("Order not found.");
  }
}

// Close Order Form
function closeOrderForm() {
  document.getElementById("orderFormOverlay").style.display = "none";
}

// Place New Order Form
function openOrderForm() {
  document.getElementById("newOrderFormOverlay").style.display = "flex";
}

function closeNewOrderForm() {
  document.getElementById("newOrderFormOverlay").style.display = "none";
}

// Save Order
function saveOrder() {
  const customerName = document.getElementById("newOrderCustomerName").value;
  const date = document.getElementById("newOrderDate").value;
  const total = document.getElementById("newOrderTotal").value;
  const orderId = Date.now().toString();

  fakeOrders[orderId] = { id: orderId, customerName, date, total };
  closeNewOrderForm();
  showAllOrders();
  alert("Order placed successfully!");
}

// Edit and Delete Order
function editOrder() {
  document.getElementById("orderCustomerName").disabled = false;
  document.getElementById("orderDate").disabled = false;
  document.getElementById("orderTotal").disabled = false;
}

function deleteOrder() {
  alert("Order deleted (simulated).");
  closeOrderForm();
}

// Initialize with all orders shown
showAllOrders();
