// Get all product images
const productImages = document.querySelectorAll(".product-image");

function updateProductImages() {
  productImages.forEach((img) => {
    if (window.innerWidth >= 1200) {
      img.src = "large.jpg";
    } else if (window.innerWidth >= 800) {
      img.src = "medium.jpg";
    } else {
      img.src = "small.jpg";
    }
  });
}

// Update product images when the window is resized
window.addEventListener("resize", updateProductImages);

// Update product images when the page loads
updateProductImages();
