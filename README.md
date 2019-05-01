# -liri-node-app

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.

How does the LIRI-bot work? Liri is a command line Node application that takes in four commands:


 *spotify-this-song.<br>
 *concert-this.<br>
 *movies-this.<br>
 *do-what-it-says.<br>
 
<li> The "spotify-this-song" command works by taking the song provided by the user input, and returning back the artist name,song name,album that song is from, and a preview link with a clip of the song. Once the search is executed the command line will log the information into your terminal and log it into a file named "log.txt".

        **Activate command by using: node .\liri.js spotify-this-song "(argument)"      
</li><br>

<li> The "concert-this" command works similar to the spotify-this, by taking the name of the band or music group as an argument and will displays the groups next concert date, along the name of the venue,date of the show,and the performing line up that will be playing with the band. Once this command is executed, the return information will be logged into your terminal, and into "log.txt" file.

        **Activate command by using: node .\liri.js concert-this "argument".
<h3><b>Demonstartion</b></h3>
<a href>https://github.com/IsmaelRvra130/-liri-node-app/blob/master/concert-this%20gif.gif</a>

</li><br>
  <li>The "movie-this" command works by taking the movie name input by the user as an argument and returning back the movie title,release date,IMDB rating,Rotten Tomatoes rating,origin of country produced,available languages,a short plot, and the actors starring in the movie. Once the command is executed, the returned information will be logged into your terminal, and into "log.txt" file.

        **Activate command by using: node .\liri.js movie-this "argument"
</li><br>

<li>The "do-what-it-says" command takes the information from the "random.txt" file, and is read by Liri and logged into the terminal with the command given for the argument referenced in the document.

     **Activate this command by using: node .\liri.js do-what-it-says
</li>
<h4>Technologies Utilized</h4>
<li>NodeJS</li>
<li>JavaScript</li>
<li>Spotify API</li>
<li>Bands in town API</li>
<li>OMDB API</li>
<li>NPM dotenv</li>
<li>NPM axios</li>
<li>NPM moment</li>
<li>NodeJS</li>

