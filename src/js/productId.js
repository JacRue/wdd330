// Function to get product ID from URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("product");
}

// Function to fetch product data
async function fetchProductData(productId) {
  const response = await fetch(
    `http://localhost:5173/api/products/${productId}`
  );

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return await response.json();
}

// Function to render product page
async function renderProductPage() {
  const productId = getProductIdFromUrl();

  try {
    const product = await fetchProductData(productId);

    // Code to render product data goes here
    // Make sure the "Add to cart" button is visible
  } catch (error) {
    // Handle error
    console.error(error);

    const errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.textContent = "Product not found";

    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(errorMessage);

    // Hide the "Add to cart" button
    const addToCartButton = document.querySelector(".add-to-cart");
    if (addToCartButton) {
      addToCartButton.style.display = "none";
    }
  }
}

renderProductPage();
