// Theme Toggle Button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check and set saved theme on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
