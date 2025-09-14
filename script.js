/* ================================
   Part 2: JavaScript Functions
   ================================ */

// Global scope variable
let animationCount = 0;

// Function with parameter + return value
function incrementCount(by) {
  animationCount += by;
  return animationCount; // returns updated value
}

// Function to trigger animation on an element
function triggerAnimation(element) {
  element.classList.remove("animate"); // reset animation if already applied
  void element.offsetWidth; // hack to restart CSS animation
  element.classList.add("animate");
  
  // Log updated count using function with parameter
  console.log("Animation triggered:", incrementCount(1));
}

/* ================================
   Part 3: Combining CSS + JS
   ================================ */

// Get DOM elements
const animatedBox = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Event listener to animate the box when button is clicked
animateBtn.addEventListener("click", () => {
  triggerAnimation(animatedBox);
});

// Event listener to toggle modal visibility
toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// Event listener to close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
