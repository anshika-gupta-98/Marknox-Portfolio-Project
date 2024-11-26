// Find all links
const links = document.querySelectorAll('a');

// When a link is clicked
links.forEach(function(link) {
  link.onclick = function(event) {
    // If the link is for a section on the same page
    if (link.getAttribute('href').startsWith('#')) {
      // Stop the page from jumping
      event.preventDefault();

      // Scroll smoothly to the section
      const section = document.querySelector(link.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
});
