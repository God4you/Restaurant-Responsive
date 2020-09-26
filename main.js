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
