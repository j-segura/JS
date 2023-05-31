const container = document.querySelector('#container');
const btnPrevious = document.querySelector('#btn-previous');
const btnNext = document.querySelector('#btn-next');

let page = 1;

btnPrevious.addEventListener('click', () => {
    page > 1 ? page-- : page = 1;
    displayMovies();
    console.log(page);
});

btnNext.addEventListener('click', () => {
    page < 1000 ? page++ : page = 1000;
    displayMovies();
    console.log(page);
});

const displayMovies = async() => {

    try {
    
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=eac19d0af8b027bbe370265b2578c3f6`);

        // validate response http
        if(response.status === 200) {
            const data = await response.json();

            let movies = '';
            data.results.forEach(movie => {

                movies += `
                    <div class="movie-card">
                        <div class="img">
                            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="poster">
                        </div>
                        <p>${movie.title}</p>
                    </div>
                `

            });

            container.innerHTML = movies;
        }

    } catch {

        console.log('error');

    }

}

displayMovies();