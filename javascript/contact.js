// Wait for the DOM content to load before running any scripts
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");  // Assuming the form element is defined
    const submitButton = document.querySelector(".submit-btn");  // Submit button
  
    // Attach event listener to form submission
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();  // Prevent default form submission behavior
  
      // Get values from input fields
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Form validation
      if (!name || !email || !message) {
        alert("Please fill out all fields.");  // Show alert if any field is empty
        return;
      }
  
      // Email validation (simple check)
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Successful form submission (you can add real backend submission here)
      alert("Thank you for contacting us! Your message has been sent.");
      
      // Reset the form fields after submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
  });
  
  // Function to scroll to the top of the page (optional, could be linked to a button)
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Optional: Show confirmation message after form submission
  function showConfirmationMessage() {
    const form = document.querySelector(".second-part");
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Thank you for your message!";
    confirmationMessage.style.color = "green";
    form.appendChild(confirmationMessage);
  }
  
  // Optional: Add dynamic form field interaction (hover effects for inputs and textareas)
  const inputElements = document.querySelectorAll("input, textarea");
  
  inputElements.forEach(input => {
    input.addEventListener("focus", function () {
      input.style.border = "3px solid chocolate";  // Change border color on focus
    });
  
    input.addEventListener("blur", function () {
      input.style.border = "1px solid rgba(0, 0, 0, 0.5)";  // Reset border color when the focus is lost
    });
  });