function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!name || !phoneNumber || !email) {
        alert("Please fill in all required fields.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Reservation successful!");
    document.getElementById('reservationForm').reset(); // Reset form after submission
}

  
