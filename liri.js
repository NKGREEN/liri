//commands for Spotify
require("dotenv").config();
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "ca60c0ef949c400fb1418145d4fa4037",
  secret: "e2dae6fe0bbf461aa4cfaafc15ab5375"
});
 

console.log(process.argv[2])
var command=process.argv[2]
if (command=="spotify-this-song") {

  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log("Album Name: " + data.tracks.items[0].album.name); 
  
  console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name);
  
  console.log("Track: " + data.tracks.items[0].name);
  
  console.log("Spotify Preview: " + data.tracks.items[0].external_urls.spotify)
  
  });
}

//commands for OMDB
function Movie(){
	var movieData = process.argv[3];

	request("http://www.omdbapi.com") {

	  		// console.log(response); // Print the data
	  		console.log("Title: " + JSON.parse(body).Title);
	  		console.log("Release Date: " + JSON.parse(body).Released);
	  		console.log("IMDB Rating: "+ JSON.parse(body).imdbRating);
	  		console.log("Country: " + JSON.parse(body).Country);
	  		console.log("Language: " + JSON.parse(body).Language);
	  		console.log("Plot: " + JSON.parse(body).Plot);
	  		console.log("Actors: " + JSON.parse(body).Actors);
	  		console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
	  		console.log("Rotten Tomatoes URL: "+ JSON.parse(body).tomatoURL);
	  		console.log("\n");

});
};

//commands for Bands in Town
function Bands(){
  var bandsData=process.argv[2]

  request("http://www.artists")
  console.log("Venue Name" + )
  console.log("Venue Location" + )
  console.log("Date of Event" + )
}



function doCommand(){
	fs.readFile('random.txt', "utf8", function(error, data){
		console.log(data);
	})
};
