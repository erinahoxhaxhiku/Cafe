// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.querySelectorAll('.hidden');
  
//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target); // Stop observing after animation
//         }
//       });
//     }, {
//       threshold: 0.1, // Trigger when 10% of the element is visible
//     });
  
//     elements.forEach(element => {
//       observer.observe(element);
//     });
//   });
  
//   document.addEventListener("DOMContentLoaded", () => {
//     document.body.classList.add("fade-in"); 
//   });
  
 

// document.querySelectorAll('.fourth-part .row .col img').forEach(img => {
//     let tooltipTimeout;
//     const tooltip = document.createElement('div');
//     tooltip.classList.add('tooltip'); 
//     document.body.appendChild(tooltip); 
  
//     img.addEventListener('mouseenter', function() {
//       tooltip.textContent = img.getAttribute('data-tooltip'); 
  
      
//       tooltipTimeout = setTimeout(() => {
//         tooltip.style.visibility = 'visible';
//         tooltip.style.opacity = '1'; 
//         const rect = img.getBoundingClientRect();
//         tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px'; 
//         tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px'; 
//       }, 300); 
//     });
  
//     img.addEventListener('mouseleave', function() {
//       clearTimeout(tooltipTimeout); 
      
//       setTimeout(() => {
//         tooltip.style.visibility = 'hidden'; 
//       }, 300); 
//     });
//   });
  
  