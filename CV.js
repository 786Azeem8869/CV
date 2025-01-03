document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Button
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        // Toggle dark mode class on the body
        document.body.classList.toggle('dark-mode');

        // Get the current icon
        const icon = darkModeToggle.querySelector('i');

        // Toggle between moon and sun icons
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    // Attach event listener for dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default behavior
            e.preventDefault();

            // Get the target section ID
            const targetId = link.getAttribute('href').substring(1); // Remove the `#`
            const targetElement = document.getElementById(targetId);

            // Scroll to the target section
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed nav bar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
