// const x = document.querySelector('#search1');

// var form = document.getElementById("myForm");

// function handleForm(event) {
//     event.preventDefault();
// }

// form.addEventListener('submit', handleForm);

// x.addEventListener('keypress', function(e) {
//     if (e.keyCode == 13)
//         console.log(x.value);
// })

const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

results(apiUrl);

function results(url) {
    fetch(url)

    .then(res => {
        return res.json();
    }).then(display);

}

const main = document.querySelector("main");


function display(event) {

    main.innerText = " ";
//     console.log(event);
//     console.log(event.results);

    event.results.forEach(element => {
//         console.log(element);

        const movieEL = document.createElement('div');
        movieEL.classList.add('movie');

        movieEL.innerHTML = `   
            <img src="${IMGPATH + element.poster_path}" alt=" ">
            <div class="movie-info">
                <h3>${element.title}</h3>
                <span class=${byaverage(element.vote_average)}>${element.vote_average}</span>
            </div> 
            <div class="overview">
                <h3>Overview:</h3>
                ${element.overview}
            </div>
            `;

        main.appendChild(movieEL);

        function byaverage(vote) {
            if (vote >= 8)
                return 'green';

            else if (vote >= 5)
                return 'orange';

            else
                return 'red';

        }


    });

}

var form = document.getElementById("myForm");
var search = document.getElementById("search1")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        results(SEARCHAPI + searchTerm);

        search.value = "";
    }
});
