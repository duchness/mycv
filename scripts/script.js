const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
});
