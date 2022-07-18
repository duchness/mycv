//set grid
//set colors
//set number of squares
const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

//making the grid
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  //adding color and removing it
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  //applying color to square
  container.appendChild(square);
}

//choosing a random color and adding it a shadow/glare
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

//reassigning the empty value
function removeColor(element) {
  element.style.background = `#1d1d1d`;
  element.style.boxShadow = `0 0 2px #000`;
}

//function selecting a random color code from array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
