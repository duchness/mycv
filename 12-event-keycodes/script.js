//variable to insert inner html to index
const insert = document.getElementById("insert");

//event lisenter when pressing a key, and changing the html code
window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});
