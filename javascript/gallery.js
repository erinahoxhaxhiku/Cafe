// Lightbox Image Modal
const images = document.querySelectorAll('.final-part img');  // Select all gallery images
const modal = document.createElement('div');  // Create modal element
modal.classList.add('modal');  // Add class for styling
document.body.appendChild(modal);  // Append modal to body

const modalImg = document.createElement('img');  // Create an image element to display the clicked image
modal.appendChild(modalImg);  // Append to modal

const closeModal = document.createElement('span');  // Create a close button
closeModal.textContent = "×";
closeModal.classList.add('close-modal');
modal.appendChild(closeModal);

// Open the modal when an image is clicked
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;  // Set modal image source to clicked image
    });
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';  // Hide modal
});

// Close modal when clicked outside of the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';  // Hide modal
    }
});

// Smooth scroll for links (if you have anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Email validation before subscribing
document.querySelector('.subscribe').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for subscribing!");
        document.getElementById('email').value = '';  // Clear email input after submission
    }
});

// Simple email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


