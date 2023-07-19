// Cart icon has the class 'cart-icon'
const cartIcon = document.querySelector(".cart-icon");

// This function updates the superscript
function updateSuperscript() {
  // Remove the existing superscript, if there is one
  const existingSuperscript = cartIcon.querySelector(".superscript");
  if (existingSuperscript) {
    cartIcon.removeChild(existingSuperscript);
  }

  // If there are items in the cart, add a new superscript
  if (cart.length > 0) {
    const superscript = document.createElement("div");
    superscript.className = "superscript";
    superscript.textContent = cart.length; // Assuming cart is an array
    cartIcon.appendChild(superscript);
  }
}

// Call updateSuperscript whenever an item is added to the cart
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Add your code here to add the item to the cart, then...
    updateSuperscript();
  });
});
