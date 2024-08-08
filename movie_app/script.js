const apiKey = "ca8a5afe2cd2dc6044c15dde0245ec3a";
let years = "2024";
const url = `
https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;

const urlPoster = `https://image.tmdb.org/t/p/w500/`;
const content = document.getElementById("content");
const dropdownEl = document.getElementById("years");

async function displayMovies(url) {
  const response = await fetch(url);
  const movies = await response.json();
  while(content.firstChild){
    content.removeChild(content.firstChild)
  }
  movies.results.forEach((data) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    const title = document.createElement("h2");
    const poster = document.createElement("img");

    poster.src = `${urlPoster}${data.poster_path}`;
    title.innerHTML = `${data.title.substring(0, 24)}`;

    content.appendChild(movieEl);
    movieEl.appendChild(title);
    movieEl.appendChild(poster);
  });
}

dropdownEl.addEventListener("change", () => {
  years = dropdownEl.value;
  const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;
  displayMovies(updateUrl);
});

displayMovies(url);
