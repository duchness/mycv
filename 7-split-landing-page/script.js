//assigning variables to each side container
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

//adding event listeners when hovering mouse and/or when mouse exits hover area
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
