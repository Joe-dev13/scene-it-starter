document.addEventListener('DOMContentLoaded' , () => {
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
        document.getElementById('search-form').addEventListener('submit', function(e){
            e.preventDefault();
            let movieContainer = document.getElementById('movie-container');
            movieContainer.innerHTML = renderMovies(movieData);
    });
});
const saveToWatchList = imdbID => {
    let movie = movieData.find(currentMovie => {
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist == null){
        watchlist = []
    };
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
};

