import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  const cart = getLocalStorage("so-cart") || [];
  const updatedCart = [...cart, product];
  setLocalStorage("so-cart", updatedCart); 
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// added by team 5 , import Param.
import { findProductById } from "./productData.mjs";
import { setLocalStorage, getParam } from "./utils.mjs";

const productId = getParam("product");

console.log(findProductById(productId));