const productId = document.querySelector(".product-detail").dataset.productId;
const discountFlagElement = document.getElementById("discount-flag");

// Fetch product details from your API
fetch(`http://server-nodejs.cit.byui.edu:3000/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    // Check if the product is discounted
    if (product.discount > 0) {
      // If it is, display the discount flag
      discountFlagElement.classList.add("discount-flag");
      discountFlagElement.innerText = `Discounted by $${product.discount}`;
    }
  });
