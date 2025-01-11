document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  