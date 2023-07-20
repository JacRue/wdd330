document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the email address from the input field
    let email = document.getElementById("newsletter-email").value;

    // Send a POST request to your server with the email address
    fetch(`http://server-nodejs.cit.byui.edu:3000/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for signing up for our newsletter!");
          // Clear the input field
          document.getElementById("newsletter-email").value = "";
        } else {
          alert("There was an error. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
