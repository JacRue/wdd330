// Cart items are represented by divs with the class 'cart-item'
const cartItems = document.querySelectorAll(".cart-item");

cartItems.forEach((item) => {
  // Add the X (or icon)
  const removeItem = document.createElement("span");
  removeItem.className = "remove-item";
  removeItem.dataset.id = item.dataset.id; // Assuming each cart item has a data-id attribute
  removeItem.textContent = "X";
  item.appendChild(removeItem);

  // Add a click listener to the X (or icon)
  removeItem.addEventListener("click", (event) => {
    // Get the id of the item to be removed
    const id = event.target.dataset.id;

    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Remove the item from the cart
    cart = cart.filter((item) => item.id !== id); // Assuming each item in the cart has an id property

    // Save the cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render the cart
    renderCart();
  });
});
