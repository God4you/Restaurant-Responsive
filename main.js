//Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

//selecting the class that we want to select with the funcation we created and storred in variables.
let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventlistener("click", function () {
  body.classList.toggle("open");
});
