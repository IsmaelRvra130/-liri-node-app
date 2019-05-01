# -liri-node-app

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.

How does the LIRI-bot work? Liri is a command line Node application that takes in four commands:


 *spotify-this-song.<br>
 *concert-this.<br>
 *movies-this.<br>
 *do-what-it-says.<br>
 
   <li> The spotify-this-song command works by taking the song provided by the user input, and returning back the artist name,song name,album that song is from, and a preview link with a clip of the song. Once the search is executed the command line will log the information into your terminal and log it into a file named "log.txt". Activate command by using: node .\liri.js spotify-this-song "(argument)"
    
 </li>


After loading, enter node -liri.js, plus one of these commands: (concert-this, spotify-this-song, movie-this, do-what-it-says), followed by the band, song, movie, or command. 
