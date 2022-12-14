const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2e1cef35";
const API_URL_SEARCH = "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=0f75ae98-6c50-4d48-b54a-fd55e0f96a41";

var search_input = document.getElementsById("search_input");
var card = document.getElementsByName("movie-card")[0];

document.getElementsByName("search")[0].addEventListener("click",function(){
	console.log(search_input.value);
	const quary = search_input.value;
	if(query){
		getMovies(API_URL+query);
	}
});
async function getMovies(url){
	const resp = await fetch(url);
	const respData = await resp.json();
	console.log(respData);
	showMovies(respData.search);
}

function showMovie(movies){
	card.innerHTML="";
	movies.forEach(async function(movie){
		const movieData = await fetch(API_URL_SERCH+movie.imdbID);
		const movieDataobj = await movieData.json();
		movie_display(movieDataobj);
	});
}

function movie_display(imovie){
	const movieElm = document.creatElement("div");
	movieElm.classlist.add("movie-card");
	movieElm.innerHTML=
	<div class="card">
	<img src= "${imovie.poster}" alt = "poster" width = "300px" height= "300px"/>
	<div class = "movie-description">
	<span class="movie-title"><br>Title</br><span class="value">${imovie.Tile}</span></span>
	<span class="movie-title"><br>Title</br><span class="value">${imovie.imdbRating}</span></span>
	<span class="movie-title"><br>Title</br><span class="value">${imovie.Director}</span></span>
	<span class="movie-title"><br>Title</br><span class="value">${imovie.Released}</span></span>
	<span class="movie-title"><br>Title</br><span class="value">${imovie.Genre}</span></span>
	</div>
	</div>
	;

	card.appendChild(movieElm);

}