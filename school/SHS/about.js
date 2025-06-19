document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle visibility of additional information sections
    const toggleButtons = document.querySelectorAll('.toggle-info-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const infoSection = document.querySelector(`#${this.getAttribute('data-target')}`);
            if (infoSection) {
                infoSection.classList.toggle('hidden');
                this.textContent = infoSection.classList.contains('hidden') ? 'Show More' : 'Show Less';
            }
        });
    });

    // Dynamic loading of team member profiles (example with dummy data)
    const teamContainer = document.getElementById('team-container');
    if (teamContainer) {
        const teamMembers = [
            {
                name: 'John Doe',
                position: 'Principal',
                bio: 'John Doe has been leading our school with passion and dedication for over 10 years. His experience in education is unmatched.'
            },
            {
                name: 'Jane Smith',
                position: 'Vice Principal',
                bio: 'Jane Smith is our Vice Principal, known for her commitment to student success and innovative teaching methods.'
            }
            // Add more team members as needed
        ];

        teamContainer.innerHTML = teamMembers.map(member => `
            <div class="team-member">
                <h3>${member.name}</h3>
                <h4>${member.position}</h4>
                <p>${member.bio}</p>
            </div>
        `).join('');
    }
});
