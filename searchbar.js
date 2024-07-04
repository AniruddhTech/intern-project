
const searchInput = document.getElementById('searchQuery');

// Listen for keydown event on the search input field
searchInput.addEventListener('keydown', function(event) {
    // Check if Enter key was pressed
    if (event.key === 'Enter') {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the search query
        const searchQuery = searchInput.value.trim();

        // Redirect to the specified URL if the search query is not empty
        if (searchQuery !== '') {
            // Redirect to the specified URL
            window.location.href = 'https://wa.link/at5ion';
        }
    }
});