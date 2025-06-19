document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Extract form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display a success message (this is a placeholder, actual implementation might involve server-side code)
        formResponse.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        formResponse.classList.remove('hidden');

        // Clear the form
        contactForm.reset();
    });
});
