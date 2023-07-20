document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value;
    commentInput.value = ""; // Clear the input field

    // `productId` is the id of the current product
    const productId = "123"; // Replace with actual product id

    const commentData = {
      productId: productId,
      comment: comment,
    };

    // Send the comment data to the server
    fetch("http://server-nodejs.cit.byui.edu:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the new comment to the comments container
        const commentsContainer = document.getElementById("comments-container");
        const commentElement = document.createElement("p");
        commentElement.textContent = data.comment; // Assuming the server response includes the comment
        commentsContainer.appendChild(commentElement);
      })
      .catch((error) => console.error("Error:", error));
  });

// Load comments when the page is loaded
window.addEventListener("load", function () {
  // `productId` is the id of the current product
  const productId = "123"; // Replace with actual product id

  // Get the comments for this product from the server
  fetch(baseURL + `api/comments?productId=${productId}`)
    .then((response) => response.json())
    .then((data) => {
      // Add each comment to the comments container
      const commentsContainer = document.getElementById("comments-container");
      data.forEach((comment) => {
        const commentElement = document.createElement("p");
        commentElement.textContent = comment; // Assuming each comment is a string
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch((error) => console.error("Error:", error));
});
