window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

/* Typing Effect */

var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "Python Programmer",
    "UI Designer",
    "Creative Coder"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

/* Dark Mode */

const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
};