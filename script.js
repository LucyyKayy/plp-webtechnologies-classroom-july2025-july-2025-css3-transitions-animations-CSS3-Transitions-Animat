// Part 2: Functions with parameters, return values, and scope

// Global scope variable
let animationCount = 0;

// Function with parameter + return
function incrementCount(by) {
  animationCount += by;
  return animationCount;
}

// Function to trigger animation
function triggerAnimation(element) {
  element.classList.remove("animate"); // reset
  void element.offsetWidth; // hack to restart animation
  element.classList.add("animate");
  console.log("Animation count:", incrementCount(1));
}

// DOM elements
const animatedBox = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Event listeners
animateBtn.addEventListener("click", () => {
  triggerAnimation(animatedBox);
});

toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
