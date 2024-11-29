// Get references to the hamburger menu and the slide-in menu
const hamburger = document.getElementById("hamburger");
const slideMenu = document.getElementById("slide");

// Add event listener to the hamburger icon
hamburger.addEventListener("click", function() {
  // Toggle the "open" class on the slide-in menu
  slideMenu.classList.toggle("open");
});
