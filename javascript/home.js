document.addEventListener('DOMContentLoaded', function () {
    const images = [
        '../image/atmosphere.jpg',
        '../image/croissant.jpg',
        '../image/atmosphere2.jpg',
        '../image/tavolina.jpg'
    ];

    let currentIndex = 0; // Starting index for background images

    // Function to change background image
    function changeBackgroundImage() {
        const secondPart = document.querySelector('.second-part');
        if (secondPart) {
            secondPart.style.backgroundImage = `url(${images[currentIndex]})`;
        }
    }

    // Change background every 5 seconds
    setInterval(changeBackgroundImage, 5000);

    // Event listener for "Next" button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % images.length;
            changeBackgroundImage();
        });
    }

    // Event listener for "Previous" button
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            changeBackgroundImage();
        });
    }

    console.log('JavaScript is running!');
});


<<<<<<< Updated upstream
=======
// perfoto2

function toggleDetails(boxElement) {
    const details = boxElement.querySelector('.details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}

// Dropdown

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
// per klient qiik dhe djale

const testimonials = document.querySelectorAll('.six-part .row');
const prevBtnn = document.getElementById('prevBtnn');
const nextBtnn = document.getElementById('nextBtnn');
let currentIndex = 0;
let autoSlideInterval;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

// Function to move to the next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

// Function to move to the previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Restart auto-slide
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Event listeners for buttons
nextBtnn.addEventListener('click', () => {
    nextTestimonial();
    resetAutoSlide();
});

prevBtnn.addEventListener('click', () => {
    prevTestimonial();
    resetAutoSlide();
});

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
}

// Initial setup
showTestimonial(currentIndex);
startAutoSlide();


// JavaScript for sliding testimonials
// const testimonials = document.querySelectorAll('.six-part .row');
// let currentIndex = 0;

// // Function to show the next testimonial
// function showNextTestimonial() {
//     testimonials.forEach((testimonial, index) => {
//         testimonial.classList.remove('active');
//         if (index === currentIndex) {
//             testimonial.classList.add('active');
//         }
//     });

//     // Update index
//     currentIndex = (currentIndex + 1) % testimonials.length;
// }

// // Initial display
// showNextTestimonial();

// // Rotate testimonials every 5 seconds
// setInterval(showNextTestimonial, 5000);



>>>>>>> Stashed changes

// Per email

// Initialize EmailJS
emailjs.init('o1-R-n9W4JAhUbjsP'); // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// Event listener for Subscribe button
document.getElementById('subscribeBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (email) {
        // Sending email using EmailJS
        emailjs.send('service_sw9ysan', 'template_ctoy04b', {
            user_email: email,
        })
            .then(function (response) {
                alert('Thank you for subscribing! Your email has been sent.');
            })
            .catch(function (error) {
                console.error('Failed to send email:', error);
                alert('There was an error sending your email. Please try again.');
            });
    } else {
        alert('Please enter a valid email address.');
    }
});

// emailjs.init('o1-R-n9W4JAhUbjsP'); // Replace with your Public Key
// emailjs.send('service_sw9ysan', 'template_ctoy04b', {
//     user_email: email, // This is the email entered by the user
// });