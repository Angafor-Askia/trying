// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Example: Code for a Contact Form
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Add your form submission logic here (e.g., using AJAX)
    // 1. Get form data (name, email, message)
    // 2. Send the data to your server
    // 3. Handle response and provide feedback to the user

    // For now, let's just display a simple alert
    alert('Thank you for your message! We will get back to you soon.');
});

