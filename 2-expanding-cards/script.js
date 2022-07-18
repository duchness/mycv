//create a variable that selects all the divs with the class panel
//this creates an array of all the panels, inside the variable, in this case 0 to 4 (5 in total)
const panels = document.querySelectorAll(".panel");

//loops through each of the panel, and with an arrow function it tells when we click on it, it removes the .active class, and adds the same .active class when we click on a different one
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

//function to remove the .active class
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
