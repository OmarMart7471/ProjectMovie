let popularList = []
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=70968caa42a13c9b67fe98774078ed87&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) => popularList=data.results );

export {popularList}