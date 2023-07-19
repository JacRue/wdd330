// Function to fetch product data based on a search query
async function fetchProductData(query) {
  const response = await fetch(
    `http://localhost:5173/api/products/search?q=${query}`
  );

  if (!response.ok) {
    throw new Error("An error occurred while searching for products");
  }

  return await response.json();
}

// Function to render a list of products
function renderProductList(products) {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = ""; // Clear the product list

  products.forEach((product) => {
    // Create product element
    const productElement = document.createElement("div");
    productElement.className = "product";

    // Fill product element with product data
    productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;

    productList.appendChild(productElement);
  });
}

// Handle search form submission
const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = document.querySelector("#search-query").value;
  try {
    const products = await fetchProductData(query);
    renderProductList(products);
  } catch (error) {
    console.error(error);
    // Show an error message to the user
  }
});
