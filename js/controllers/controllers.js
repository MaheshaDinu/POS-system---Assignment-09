// Controller for switching between sections
function showSection(sectionId, linkElement) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("active");

  // Change active link color
  const links = document.querySelectorAll(".sidebar a");
  links.forEach((link) => {
    link.classList.remove("active-link");
  });
  linkElement.classList.add("active-link");
}

// Customer actions
function searchCustomer() {
  const searchQuery = document.getElementById("searchCustomerInput").value;
  console.log("Searching for customer:", searchQuery);
}

function saveCustomer() {
  const customerName = document.getElementById("customerName").value;
  const customerAddress = document.getElementById("customerAddress").value;
  const customerPhone = document.getElementById("customerPhone").value;

  // Save customer logic
  console.log("Customer saved:", {
    customerName,
    customerAddress,
    customerPhone,
  });
}

function openForm() {
  document.getElementById("formOverlay").style.display = "block";
}

function closeForm() {
  document.getElementById("formOverlay").style.display = "none";
}
