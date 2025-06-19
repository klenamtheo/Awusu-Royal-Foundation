document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const loginSection = document.getElementById('login');
    const studentName = document.getElementById('student-name');
    const notificationsList = document.getElementById('notifications-list');
    const assignmentsList = document.getElementById('assignments-list');
    const loginError = document.getElementById('login-error');
    
    // Dummy data
    const notifications = [
        'School reopens on September 1st.',
        'Parent-teacher meetings on August 25th.',
        'New library books available.'
    ];
    
    const assignments = [
        'Math homework due on August 20th.',
        'History project due on August 22nd.',
        'Science lab report due on August 30th.',
        'School fees payment'
    ];
    
    // Simulate login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        
        const studentId = document.getElementById('student-id').value;
        const password = document.getElementById('password').value;
        
        // Simple validation for demonstration
        if (studentId === '12345' && password === 'password') {
            loginSection.classList.add('hidden');
            dashboard.classList.remove('hidden');
            studentName.textContent = 'Doagbodzi Klenam'; // Replace with actual student name
            
            // Populate notifications and assignments
            notificationsList.innerHTML = notifications.map(notification => `<li>${notification}</li>`).join('');
            assignmentsList.innerHTML = assignments.map(assignment => `<li>${assignment}</li>`).join('');
        } else {
            loginError.textContent = 'Invalid Student ID or Password.';
        }
    });
});
