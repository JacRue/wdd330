import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId);

// Products stored in a variable named products

function sortProducts(products, sortBy) {
  if (sortBy === "name") {
    return products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "price") {
    return products.sort((a, b) => a.price - b.price);
  } else {
    return products;
  }
}
const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", () => {
  const sortedProducts = sortProducts(products, sortSelect.value);
  renderProductList(sortedProducts); // assuming you have a function to render the product list
});
