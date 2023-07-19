import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

// this is how it would look if we listen for the submit on the form
document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  checkoutProcess.checkout(e.target);
});

// listening for click on the button
// document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
//   e.preventDefault();

//   checkoutProcess.checkout(document.forms['checkout']);
// });
// Show checkout form when the "Checkout" button is clicked
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.addEventListener("click", () => {
  const checkoutForm = document.querySelector("#checkout-form");
  checkoutForm.classList.remove("hide");
});

// Handle form submission
const checkoutForm = document.querySelector("#checkout-form");
checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(checkoutForm);
});
