//Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

//selecting the class that we want to select with the funcation we created and storred in variables.
const menuToggler = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggler.addEventlistener("click", function () {
  body.classList.toggle("open");
});
