document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const loginSection = document.getElementById('login');
    const teacherName = document.getElementById('teacher-name');
    const scheduleList = document.getElementById('schedule-list');
    const notificationsList = document.getElementById('notifications-list');
    const loginError = document.getElementById('login-error');
    
    // Dummy data
    const schedule = [
        'Math: 9:00 AM - 10:00 AM',
        'History: 10:15 AM - 11:15 AM',
        'Science: 11:30 AM - 12:30 PM'
    ];
    
    const notifications = [
        'Parent-teacher meetings scheduled for August 25th.',
        'New grading policy updates available.',
        'Reminder: Submit grades by August 20th.'
    ];
    
    // Simulate login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        
        const teacherId = document.getElementById('teacher-id').value;
        const password = document.getElementById('password').value;
        
        // Simple validation for demonstration
        if (teacherId === '67890' && password === 'password') {
            loginSection.classList.add('hidden');
            dashboard.classList.remove('hidden');
            teacherName.textContent = 'Jane Smith'; // Replace with actual teacher name
            
            // Populate schedule and notifications
            scheduleList.innerHTML = schedule.map(item => `<li>${item}</li>`).join('');
            notificationsList.innerHTML = notifications.map(item => `<li>${item}</li>`).join('');
        } else {
            loginError.textContent = 'Invalid Teacher ID or Password.';
        }
    });

    // Update profile button (for demonstration purposes)
    document.getElementById('update-profile').addEventListener('click', function() {
        alert('Profile update functionality is not implemented yet.');
    });
});
