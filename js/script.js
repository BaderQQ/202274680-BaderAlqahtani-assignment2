
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

updateThemeButton();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);

  updateThemeButton();
});

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️ Light" : "🌙 Theme";
}

document.getElementById("year").textContent = new Date().getFullYear();


// Project Live Search
// Dynamic Content Requirement
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");

projectSearch.addEventListener("input", () => {
  const query = projectSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const matches = title.includes(query);

    if (matches) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  emptyState.hidden = visibleCount !== 0;
});


// Contact Form Validation
// Data Handling + Error Feedback
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();
  msg.textContent = "";
  msg.className = "form-message";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;

  if (name === "") {
  nameError.textContent = "Please enter your name.";
  isValid = false;
} else if (!isValidName(name)) {
  nameError.textContent = "Name should contain letters only.";
  isValid = false;
}

  if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  } else if (message.length < 10) {
    messageError.textContent = "Message should be at least 10 characters long.";
    isValid = false;
  }

  if (!isValid) {
    msg.textContent = "Please fix the highlighted errors and try again.";
    msg.classList.add("error");
    return;
  }

  msg.textContent = `Thanks, ${name}! Your message has been submitted successfully.`;
  msg.classList.add("success");
  form.reset();
});

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
}

function isValidEmail(email) {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
}
function isValidName(name) {
  const namePattern = /^[A-Za-z\s]+$/;
  return namePattern.test(name);
}


// Reveal Animation on Scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));