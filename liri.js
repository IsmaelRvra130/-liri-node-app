//Require from file dotenv inside of node_modules.
require("dotenv").config();

//variables & required files for Liri bot app.
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var request = require('request');
var inquirer = require('inquirer');
var moment = require ('moment');
var spotify = new Spotify(keys.spotify);

//Grabs user input.
var command = process.argv[2]

//.splice so that program reads more then 2 words in search.
var search = process.argv.splice(3).join(" ");

//calling the switch/case logic.
RunLiri(command, search)

//Switch/case through Liri options.
function RunLiri(com, input){
    switch(com){
        case "concert-this":
            concertThis(input);
            break;
        
        case "spotify-this-song":
            spotifyThis(input);
            break;

        case "movie-this":
            movie(input);
            break;

        case "do-what-it-says":
            doIt();
            break;
    }
        
}



// Search bands in town for artist-logic.
function concertThis(value) {
    // ** BONUS **logging into file "log.txt"
    fs.appendFile("log.txt","concert-this," + value + ",",function (error){
        if (error) {
            console.log(error);
        }
    });

    var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(function(response){
            var dateTime = moment(response.data[0].datetime).format("dddd MMMM Do, YYYY");
            var artistData = [
                "*************************************",
                "Band Name: "  + value + "." ,
                "Venue Name: " + response.data[0].venue.name,
                "Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ". " + response.data[0].venue.country,
                "Date: " + dateTime,
                "Performing Line-up: " + response.data[0].lineup,
                "*************************************"
            ];
            //logging concert-this search data.
            console.log(artistData);
    })
     
}

    // Spotify logic.
function spotifyThis(value) {
     // ** BONUS **logging into file "log.txt".
    fs.appendFile("log.txt", "spotify-this-song," + value + ",",function(error) {
        if (error) {
            console.log(error);
        }
    })
    //default song "The sign, Ace of Base".
    if (!search) {
        search = "The sign, Ace of Base"
    };

    spotify.search({ type: "track", query: value, limit: 2 }, function(err, data) {
        if (err) {
          return console.log("Error: " + err);
        }
        var name = data.tracks.items[0].name;
        var artist = data.tracks.items[0].artists[0].name;
        var album = data.tracks.items[0].album.name;
        var preview = data.tracks.items[0].preview_url;
        var songData = [
            "******************************",
            "Artist Name: " + artist,
            "Song Name: " + name,
            "Album: " + album,
            "Preview link: " + preview,
            "******************************"
        ];
        //logging the search response.
      console.log(songData); 
     
      });
}

//Movie-this logiv
function movie(value) {
    // ** BONUS **logging into file "log.txt"
    fs.appendFile("log.txt", "movie-this," + value + ",",function(error) {
        if (error) {
            console.log(error);
        }
    })

    var queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=a4b34622";
    axios.get(queryUrl).then(function(response) {
            var movieData = [
            "*************************************",
            "Movie title: " + response.data.Title,
            "Released: " + response.data.Year,
            "IMDB Rating: " + response.data.imdbRating,
            "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
            "Produced in: " + response.data.Country,
            "Language(s): " + response.data.Language,
            "Plot: " + response.data.Plot,
            "Actors: " + response.data.Actors,
            "***************************************"
            ];
            // logging the movie-this search data.
        console.log(movieData);
        
    });
}
// Do-what-it-says logic
function doIt() {
    //logs the text from "random.txt" file.
    fs.readFile("random.txt", "utf8",function(error,data) {
        if (error) {
            return console.log(error);
        } else {
            var array = data.split(',');
            console.log(array);
            command = array[0];
            input = array[1];
        }
    });
}
