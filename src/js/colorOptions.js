// Product data you get from the API
const product = {
  colors: [
    { name: "Red", swatchImageUrl: "red-swatch.jpg" },
    { name: "Blue", swatchImageUrl: "blue-swatch.jpg" },
    // Add more colors as needed
  ],
};

// Get the color options div
const colorOptionsDiv = document.getElementById("product-color-options");

// Generate the color options
product.colors.forEach((color, index) => {
  // Create a new div for the color option
  const colorOptionDiv = document.createElement("div");
  colorOptionDiv.classList.add("color-option");

  // Set the background image to the swatch image
  colorOptionDiv.style.backgroundImage = `url(${color.swatchImageUrl})`;

  // Add a click event listener to the color option
  colorOptionDiv.addEventListener("click", () => {
    // Remove the 'selected' class from all color options
    document.querySelectorAll(".color-option").forEach((el) => {
      el.classList.remove("selected");
    });

    // Add the 'selected' class to the clicked color option
    colorOptionDiv.classList.add("selected");

    // Set the selected color in your product data or elsewhere as needed
    product.selectedColor = color.name;
  });

  // Append the color option to the color options div
  colorOptionsDiv.appendChild(colorOptionDiv);
});

// Select the first color by default
colorOptionsDiv.firstChild.click();
