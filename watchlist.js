document.addEventListener('DOMContentLoaded' , () => {
    let movies = JSON.parse(localStorage.getItem('watchlist'));
    let renderMovies = movieArray => {
        let movieHTML = movieArray.map(currentMovie => {
            return ( 
                `<div class="movie">
                <div class="card" style="width: 18rem;">
                    <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 id="title">${currentMovie.Title}</h5>
                    <h5 id="date">${currentMovie.Year}</h5>
                    <button href="#" class="btn btn-primary" onclick="saveToWatchList('${currentMovie.imdbID}')">Add!</button>
                    </div>
                </div>
            </div>`
            )
        });
        return movieHTML.join('')
    };
            let movieContainer = document.getElementById('movie-container');
            movieContainer.innerHTML = renderMovies(movies);
});
