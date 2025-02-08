// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Track link clicks
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Send data to Google Analytics (replace with your tracking code)
        gtag('event', 'click', {
            'event_category': 'Product Link',
            'event_label': this.href
        });
    });
});
