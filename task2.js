const apiKey = '827d0358';
const searchButton = document.getElementById('search-button');
const filmInput = document.getElementById('film-input');
const filmInfo = document.getElementById('film-info');
const filmPoster = document.getElementById('film-poster');
const filmTitle = document.getElementById('film-title');
const filmYear = document.getElementById('film-year');
const filmGenre = document.getElementById('film-genre');
const filmRuntime = document.getElementById('film-runtime');
const filmDirector = document.getElementById('film-director');
const filmActors = document.getElementById('film-actors');
const filmRating = document.getElementById('film-rating');
const filmPlot = document.getElementById('film-plot');
const trailerLink = document.getElementById('trailer-link');

async function searchFilm() {
    const filmName = filmInput.value.trim();
    if (!filmName) {
        alert('Iltimos film nomini kiriting!');
        return;
    }
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${filmName}&apikey=${[apiKey]}`);
        const data = await response.json();

        filmPoster.src = data.Poster !== 'img' ? data.Poster : 'https://via.placeholder.com/300x450?text=No+Image';
        filmTitle.textContent = data.Title;
        filmYear.textContent = data.Year;
        filmGenre.textContent = data.Genre;
        filmRuntime.textContent = data.Runtime;
        filmDirector.textContent = data.Director;
        filmActors.textContent = data.Actors;
        filmRating.textContent = data.imdbRating;
        filmPlot.textContent = data.Plot;

        trailerLink.href = `https://www.youtube.com/results?search_query=${filmName}+trailer`;
    } catch (error) {
        console.log(error);
    }
}

searchButton.addEventListener('click', searchFilm);