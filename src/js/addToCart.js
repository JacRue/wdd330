function addToCart(item) {
  // Get the current cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the item already exists in the cart
  let existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // If the item already exists, increment its quantity
    existingItem.quantity += 1;
  } else {
    // If the item doesn't exist, add it to the cart
    item.quantity = 1;
    cart.push(item);
  }

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}
