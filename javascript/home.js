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