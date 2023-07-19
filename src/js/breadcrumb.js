const breadcrumbElement = document.getElementById("breadcrumb");

// You would get the current page and the product category information from your routing or page context.
// In this example, they're hardcoded.
let currentPage = "Product List";
let currentProductCategory = "Tents";
let numberOfProducts = 24;

if (currentPage === "Home") {
  breadcrumbElement.style.display = "none";
} else if (currentPage === "Product List") {
  breadcrumbElement.style.display = "block";
  breadcrumbElement.innerText = `${currentProductCategory}->(${numberOfProducts} items)`;
} else if (currentPage === "Product Detail") {
  breadcrumbElement.style.display = "block";
  breadcrumbElement.innerText = `${currentProductCategory}`;
}
