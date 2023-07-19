// Class 'cart-icon' add to cart buttons have the class 'add-to-cart'
const cartIcon = document.querySelector(".cart-icon");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Add the animation class to the cart icon
    cartIcon.classList.add("animate");

    // Remove the animation class after the animation completes (0.5s)
    setTimeout(() => {
      cartIcon.classList.remove("animate");
    }, 500);
  });
});
