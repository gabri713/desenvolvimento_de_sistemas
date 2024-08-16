// Hamburger menu selections

// scroll-to-top selection

// Hamburger menu functionality

// Theme switcher selection

// Close menu on nav menu clicks

// scroll to top functionality

// Theme switcher functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});