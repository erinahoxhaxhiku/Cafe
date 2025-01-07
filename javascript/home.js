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


// per klient qiik dhe djale

const testimonials = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prevbtnn');
const nextBtn = document.querySelector('.nextbtnn');
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
nextBtn.addEventListener('click', () => {
    nextTestimonial();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
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








// Gallery


// Select all gallery images and lightbox elements
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Function to open the lightbox
function openLightbox(event) {
    lightbox.classList.remove('hidden');
    lightboxImg.src = event.target.src;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
}

// Add click event listeners to each gallery image
galleryImages.forEach((img) => {
    img.addEventListener('click', openLightbox);
});

// Add click event listener to the close button
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});






// Map


const mapImage = document.querySelector('.map img');

// Show tooltip on hover
mapImage.addEventListener('mouseover', () => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('map-tooltip');
    tooltip.textContent = "Welcome to Pristina!";
    document.body.appendChild(tooltip);

    mapImage.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    mapImage.addEventListener('mouseout', () => {
        tooltip.remove();
    });
});



// Footer


const footer = document.querySelector('.footer');
const toggleFooterButton = document.getElementById('toggleFooter');

toggleFooterButton.addEventListener('click', () => {
    footer.classList.toggle('hidden');
});

// Hightlight footer

const footerCols = document.querySelectorAll('.footer .col');

footerCols.forEach((col) => {
    col.addEventListener('mouseover', () => {
        col.style.backgroundColor = 'rgba(255, 140, 0, 0.2)';
    });

    col.addEventListener('mouseout', () => {
        col.style.backgroundColor = 'transparent';
    });
});



const openingHours = document.querySelector('.footer .col:nth-child(3) p:last-child');
const targetHour = 20; // 8 PM

function updateCountdown() {
    const now = new Date();
    let hours = targetHour - now.getHours();
    let minutes = 59 - now.getMinutes();
    let seconds = 59 - now.getSeconds();

    if (hours < 0) hours += 24;

    openingHours.textContent = `Opening in: ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);




const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const info = button.getAttribute('data-info');
        navigator.clipboard.writeText(info).then(() => {
            alert('Copied to clipboard!');
        });
    });
});


const toggleDarkMode = document.getElementById('toggleDarkMode');

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


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