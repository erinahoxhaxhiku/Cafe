// JavaScript to dynamically create the submit button and handle the form submission

// Function to create and add the submit button
function createSubmitButton() {
    // Create the button element
    const submitButton = document.createElement("button");
    submitButton.id = "submitBtn";
    submitButton.textContent = "Submit";

    // Add an event listener to the button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the form from submitting in the traditional way

        // Call form validation
        validateForm();
    });

    // Append the button to the form
    const form = document.getElementById("contactForm");
    form.appendChild(submitButton);
}

// Function to validate the form
function validateForm() {
    // Clear previous error messages
    document.getElementById("errorMessages").textContent = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Store error messages
    let errorMessages = [];

    // Validate the Full Name field
    if (!name) {
        errorMessages.push("Full Name is required.");
    }

    // Validate the Email Address field
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate the Message field
    if (!message) {
        errorMessages.push("Message is required.");
    }

    // Display errors if any, otherwise show success message
    if (errorMessages.length > 0) {
        document.getElementById("errorMessages").textContent = errorMessages.join(" ");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();  // Reset the form
    }
}

// Call the function to create the submit button when the page loads
window.onload = function() {
    createSubmitButton();
};