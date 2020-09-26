//Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

//selecting the class that we want to select with the funcation we created and storred in variables.
let menuToggler = selectElement(".menu-toggle");
//let body = document.getElementsByTagName("body")[0];
//let body = selectElement("body");
let body = document.body;

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

// Scroll reveal

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
