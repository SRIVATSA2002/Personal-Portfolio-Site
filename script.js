document.addEventListener("DOMContentLoaded", () => {

  /* Contact button safe handler */
  const contactBtn = document.getElementById("contactBtn");
  const contactSection = document.getElementById("contact");

  if (contactBtn && contactSection) {
    contactBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* Scroll reveal animation */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(section => observer.observe(section));

  /* Dark mode toggle */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

/* Skill bar animation */
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const level = bar.getAttribute("data-level");
          bar.style.width = level + "%";
        });
        skillObserver.disconnect();
      }
    });
  },
  { threshold: 0.4 }
);

skillObserver.observe(skillSection);

/* Navbar active section highlight */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

});
