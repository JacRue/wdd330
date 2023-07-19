// Product data you get from your API
const product = {
  mainImageUrl: "main-image.jpg",
  extraImages: ["extra-image-1.jpg", "extra-image-2.jpg", "extra-image-3.jpg"],
};

// Get the carousel elements
const carouselImagesDiv = document.getElementById("carousel-images");
const carouselIndicatorsDiv = document.getElementById("carousel-indicators");
const prevButton = document.getElementById("carousel-prev");
const nextButton = document.getElementById("carousel-next");

// Generate the carousel images
const images = [product.mainImageUrl, ...product.extraImages];
images.forEach((imageUrl, index) => {
  // Create a new img element for the carousel image
  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("carousel-image");
  if (index !== 0) img.style.display = "none";
  carouselImagesDiv.appendChild(img);

  // Create a new div element for the carousel indicator
  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  if (index === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => navigateToImage(index));
  carouselIndicatorsDiv.appendChild(indicator);
});

let currentImageIndex = 0;
const navigateToImage = (index) => {
  // Hide the current image and remove the active class from its indicator
  carouselImagesDiv.children[currentImageIndex].style.display = "none";
  carouselIndicatorsDiv.children[currentImageIndex].classList.remove("active");

  // Show the new image and add the active class to its indicator
  currentImageIndex = index;
  carouselImagesDiv.children[currentImageIndex].style.display = "block";
  carouselIndicatorsDiv.children[currentImageIndex].classList.add("active");
};

// Navigate to the previous image when the prev button is clicked
prevButton.addEventListener("click", () => {
  let newIndex = currentImageIndex - 1;
  if (newIndex < 0) newIndex = images.length - 1;
  navigateToImage(newIndex);
});

// Navigate to the next image when the next button is clicked
nextButton.addEventListener("click", () => {
  let newIndex = currentImageIndex + 1;
  if (newIndex >= images.length) newIndex = 0;
  navigateToImage(newIndex);
});
