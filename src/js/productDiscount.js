// Products are represented by divs with the class 'product'
const products = document.querySelectorAll(".product");

products.forEach((product) => {
  const originalPrice = parseFloat(product.dataset.originalPrice);
  const currentPrice = parseFloat(product.dataset.currentPrice);

  // Calculate the discount percentage
  const discount = ((originalPrice - currentPrice) / originalPrice) * 100;

  // If there's a discount, add a badge
  if (discount > 0) {
    const discountBadge = document.createElement("div");
    discountBadge.className = "discount-badge";
    discountBadge.textContent = `${Math.round(discount)}% OFF`;

    product.appendChild(discountBadge);
  }
});
