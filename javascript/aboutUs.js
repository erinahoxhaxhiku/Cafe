// script1.js
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('.contactUs');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Thank you for your interest! We will get back to you soon.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const descriptionElement = document.querySelector('.description p');
    const newContent = "We are dedicated to providing the best dining experience. Join us for a delightful meal!";
    
    setTimeout(() => {
        descriptionElement.textContent = newContent;
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('header ul li a');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = 'chocolate';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = 'whitesmoke';
        });
    });
});
