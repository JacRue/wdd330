document
  .getElementById("add-to-wishlist")
  .addEventListener("click", function (event) {
    // `product` an object that contains the product details
    const product = {
      id: "123", // Replace with actual product id
      name: "Product name", // Replace with actual product name
      price: 100, // Replace with actual product price
      // add other product details if necessary
    };

    // Get wishlist from local storage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if product is already in the wishlist
    if (!wishlist.some((item) => item.id === product.id)) {
      // Add product to wishlist
      wishlist.push(product);
    }

    // Update wishlist in local storage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });

// `user` an object that contains the current user's details
const userId = user.id; // Replace with actual user id

// Get user's wishlist from local storage
let wishlist = JSON.parse(localStorage.getItem(`wishlist-${userId}`)) || [];

// ...

// Update user's wishlist in local storage
localStorage.setItem(`wishlist-${userId}`, JSON.stringify(wishlist));
