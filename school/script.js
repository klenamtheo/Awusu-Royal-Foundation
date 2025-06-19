document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation checks
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
