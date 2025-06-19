document.addEventListener('DOMContentLoaded', function() {
    // Toggle additional information sections
    const toggleButtons = document.querySelectorAll('.toggle-info-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const infoSection = document.getElementById(targetId);
            if (infoSection) {
                infoSection.classList.toggle('hidden');
                this.textContent = infoSection.classList.contains('hidden') ? 'Show More' : 'Show Less';
            }
        });
    });

    // Search functionality for courses
    const searchInput = document.getElementById('course-search');
    const courseList = document.getElementById('course-list');
    const courses = [
        
        'Literature: Analysis and Critique of Classic and Modern Work',
                'History: World and Local History Perspectives',
                'Fine Arts Painting', 
                'Sculpture', 
                'Art History',
                'Home Economics'
    ];

    // Display initial course list
    courseList.innerHTML = courses.map(course => `<li>${course}</li>`).join('');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredCourses = courses.filter(course => course.toLowerCase().includes(query));
        courseList.innerHTML = filteredCourses.map(course => `<li>${course}</li>`).join('');
    });

    // Dynamic loading of faculty members (example with dummy data)
    const facultyContainer = document.getElementById('faculty-list');
    const facultyMembers = [
        {
            name: 'Dr. Ernest',
            position: 'Head of Science Department',
            photo: 'face.png'
        },
        {
            name: 'Mr. Robert Smith',
            position: 'Arts Teacher',
            photo: 'faculty2.jpg'
        }
        // Add more faculty members as needed
    ];

    facultyContainer.innerHTML = facultyMembers.map(member => `
        <div class="faculty-member">
            <img src="${member.photo}" alt="${member.name}" width="100">
            <h3>${member.name}</h3>
            <p>${member.position}</p>
        </div>
    `).join('');
});
