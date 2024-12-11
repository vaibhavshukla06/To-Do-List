document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Form submit handler
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to the server

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation for required fields
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.classList.add('error');
        } else if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.classList.add('error');
        } else {
            formMessage.textContent = "Thank you for your message. We will get back to you soon!";
            formMessage.classList.remove('error');
            formMessage.classList.add('success');

            // Clear the form fields
            contactForm.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
