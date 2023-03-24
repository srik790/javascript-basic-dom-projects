const main = document.getElementById("main");
const btn = document.getElementById("btnSearch");

btn.addEventListener('click', getMovies);


async function getMovies() {

  let movie = document.getElementById("search").value

  const resp = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movie}`);
  const data = await resp.json();

  // movie aa gyi
  console.log(data);
  // yaha pe show karenge
  showMovies(data.results);

}

function showMovies(movies) {
  //clear main
  main.innerHTML = "";
  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    debugger;
    movieEl.innerHTML = `
       <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}"/>

        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span>${movie.vote_average}</span>
        </div>`;

    main.appendChild(movieEl)
  });

}