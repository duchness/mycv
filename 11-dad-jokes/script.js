//assigning variables to index id's
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

//event for when clicking to generate a joke
jokeBtn.addEventListener("click", generateJoke);

//function to generate a joke
generateJoke();

//one way to fetch using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

//another way to fetch using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
