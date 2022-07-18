//assigning a value to the variable toggle with the button class faq-toggle
const toggle = document.querySelectorAll(".faq-toggle");

//opening or closing the active div
toggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
