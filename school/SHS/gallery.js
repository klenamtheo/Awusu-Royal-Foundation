document.addEventListener('DOMContentLoaded', function() {
    // Sample image data
    const images = [
        { src: 'images/event1.jpg', category: 'events', caption: 'Event 1' },
        { src: 'images/activity1.jpg', category: 'activities', caption: 'Activity 1' },
        { src: 'images/achievement1.jpg', category: 'achievements', caption: 'Achievement 1' },
        // Add more images as needed
    ];

    // Function to render images based on filter
    function renderImages(filter = 'all') {
        const galleryGrid = document.querySelector('.gallery-grid');
        galleryGrid.innerHTML = images
            .filter(image => filter === 'all' || image.category === filter)
            .map(image => `
                <img src="${image.src}" alt="${image.caption}" data-caption="${image.caption}" class="gallery-image" data-src="${image.src}">
            `).join('');
    }

    // Initialize gallery with all images
    renderImages();

    // Filter images based on button click
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            renderImages(filter);
        });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    document.querySelector('.gallery-grid').addEventListener('click', function(event) {
        if (event.target.classList.contains('gallery-image')) {
            lightbox.style.display = 'block';
            lightboxImg.src = event.target.getAttribute('data-src');
            caption.textContent = event.target.getAttribute('data-caption');
        }
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside of the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
