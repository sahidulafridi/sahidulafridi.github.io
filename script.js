// POPUP
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closeBtn = document.querySelector(".closeBtn");

popupBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// DARK MODE TOGGLE
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  darkToggle.textContent =
    document.body.classList.contains("dark")
      ? "Light Mode"
      : "Dark Mode";
});

// RANDOM QUOTE GENERATOR
const quoteBtn = document.getElementById("quoteBtn");
const message = document.getElementById("message");

const quotes = [
  "Believe in yourself!",
  "Do something today your future self will thank you for.",
  "Little progress each day adds up to big results.",
  "Dream it. Wish it. Do it.",
  "Stay focused, stay strong.",
  "Work hard in silence, let success make the noise.",
  "Everything you can imagine is real.",
];

quoteBtn.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  message.textContent = randomQuote;

  // Add animation effect
  message.style.transform = "scale(1.2)";
  setTimeout(() => {
    message.style.transform = "scale(1)";
  }, 200);
});

