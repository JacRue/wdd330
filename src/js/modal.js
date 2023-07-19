// Get modal elements
const modal = document.getElementById("register-modal");
const closeButton = document.getElementById("close-modal");
const registerButton = document.getElementById("register-button");

// Check if the user has visited the site before
if (!localStorage.getItem("visitedBefore")) {
  // If not, show the modal and set the flag in localStorage
  modal.style.display = "block";
  localStorage.setItem("visitedBefore", "true");
}

// When the user clicks on the close button, close the modal
closeButton.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on the register button, close the modal and navigate to the registration page
registerButton.onclick = function () {
  modal.style.display = "none";
  // Navigate to the registration page
  window.location.href = "/register"; // Replace with your actual registration page URL
};
const quickViewButtons = document.querySelectorAll(".quick-view");
const productModal = document.getElementById("product-modal");
const closeModalButton = modal.querySelector(".close");

// Add event listeners to quick view buttons
quickViewButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productId = e.target.closest(".product-listing").dataset.productId;

    // Fetch product details from your API
    fetch(`http://localhost:5173/api/products/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        // Populate the modal with the product details
        document.getElementById("modal-product-name").innerText = product.name;
        document.getElementById("modal-product-description").innerText =
          product.description;

        // Display the modal
        modal.style.display = "block";
      });
  });
});

// When the user clicks on the close button, close the modal
closeModalButton.onclick = function () {
  modal.style.display = "none";
};
