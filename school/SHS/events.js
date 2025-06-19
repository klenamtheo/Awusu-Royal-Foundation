document.addEventListener('DOMContentLoaded', function() {
    // Sample data for news and events
    const newsArticles = [
        { title: 'School Wins Science Fair', date: '2024-08-01', content: 'Our students won first place at the regional science fair. Congratulations to our talented students!' },
        { title: 'New Library Opening', date: '2024-07-20', content: 'The new library will be officially opened next week with a grand ceremony. Join us to celebrate!' }
        // More news articles can be added here
    ];

    const events = [
        { title: 'Parent-Teacher Meeting', date: '2024-09-15', time: '10:00 AM', location: 'School Auditorium', description: 'An important meeting for all parents to discuss their children’s progress.' },
        { title: 'Annual Sports Day', date: '2024-09-25', time: '8:00 AM', location: 'School Grounds', description: 'A day of fun and competition with various sports activities. Don’t miss it!' }
        // More events can be added here
    ];

    // Function to render news articles
    function renderNews() {
        const newsList = document.getElementById('news-list');
        newsList.innerHTML = newsArticles.map(article => `
            <div class="news-item">
                <h3>${article.title}</h3>
                <p><strong>Date:</strong> ${article.date}</p>
                <p>${article.content}</p>
                <button class="toggle-details-button">Read More</button>
                <div class="news-details hidden">
                    <!-- More detailed information can be added here -->
                </div>
            </div>
        `).join('');
    }

    // Function to render events
    function renderEvents() {
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = events.map(event => `
            <div class="event-item">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <button class="toggle-details-button">More Info</button>
                <div class="event-details hidden">
                    <!-- More detailed information can be added here -->
                </div>
            </div>
        `).join('');
    }

    // Search functionality for news
    const newsSearchInput = document.getElementById('news-search');
    newsSearchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredNews = newsArticles.filter(article =>
            article.title.toLowerCase().includes(query) || article.content.toLowerCase().includes(query)
        );
        renderNews(filteredNews);
    });

    // Search functionality for events
    const eventsSearchInput = document.getElementById('events-search');
    eventsSearchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredEvents = events.filter(event =>
            event.title.toLowerCase().includes(query) || event.description.toLowerCase().includes(query)
        );
        renderEvents(filteredEvents);
    });

    // Initialize page content
    renderNews();
    renderEvents();

    // Toggle functionality for more details
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('toggle-details-button')) {
            const detailsDiv = event.target.nextElementSibling;
            if (detailsDiv) {
                detailsDiv.classList.toggle('hidden');
                event.target.textContent = detailsDiv.classList.contains('hidden') ? 'Read More' : 'Show Less';
            }
        }
    });
});
