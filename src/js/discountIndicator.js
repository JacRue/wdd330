// Product detail is represented by a div with the class 'product-detail'
const productDetail = document.querySelector(".product-detail");

const originalPrice = parseFloat(productDetail.dataset.originalPrice);
const currentPrice = parseFloat(productDetail.dataset.currentPrice);

// Calculate the discount amount
const discount = originalPrice - currentPrice;

// If there's a discount, add the indicator
if (discount > 0) {
  const discountIndicator = document.createElement("div");
  discountIndicator.className = "discount-indicator";
  discountIndicator.textContent = `Save $${discount.toFixed(2)}!`;

  productDetail.appendChild(discountIndicator);
}
