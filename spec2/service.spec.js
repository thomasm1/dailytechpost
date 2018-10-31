// Technique  
describe('omdb service', function () {
    var movieData = { "Search": [{ "Title": "Guardians of the Galaxy Vol. 2", "Year": "2017", "Rated": "PG-13", "Released": "05 May 2017", "Runtime": "136 min", "Genre": "Action, Adventure, Comedy", "Director": "James Gunn", "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)", "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "Plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.7/10" }, { "Source": "Rotten Tomatoes", "Value": "83%" }, { "Source": "Metacritic", "Value": "67/100" }], "Metascore": "67", "imdbRating": "7.7", "imdbVotes": "408,619", "imdbID": "tt3896198", "Type": "movie", "DVD": "22 Aug 2017", "BoxOffice": "$389,804,217", "Production": "Walt Disney Pictures", "Website": "https://marvel.com/guardians", "Response": "True" }] }

    var movieDataById = { "Title": "Guardians of the Galaxy Vol. 2", "Year": "2017", "Rated": "PG-13", "Released": "05 May 2017", "Runtime": "136 min", "Genre": "Action, Adventure, Comedy", "Director": "James Gunn", "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)", "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "Plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.7/10" }, { "Source": "Rotten Tomatoes", "Value": "83%" }, { "Source": "Metacritic", "Value": "67/100" }], "Metascore": "67", "imdbRating": "7.7", "imdbVotes": "408,619", "imdbID": "tt3896198", "Type": "movie", "DVD": "22 Aug 2017", "BoxOffice": "$389,804,217", "Production": "Walt Disney Pictures", "Website": "https://marvel.com/guardians", "Response": "True" }
    var omdbApi = {};

    beforeEach(module('omdb'));
    beforeEach(inject(function (_omdbApi_) {  // name clash of variable and callback argument, ..underscore wrapping is solution!!
        omdbApi = _omdbApi_;
    }));

    it('should return search movie data', function () {   //FIRST UNIT TEST
        /*
                angular.mock.module({      // not function argument technique ..(object)
                      'omdbApi': {
                          search: function(query) {
                              return movieData;
                          }
                  }
              });
              */
        //
        console.log(movieData);
        console.log(angular.mock.dump(movieData));
        dump(angular.mock.dump(movieData));  // or.. Karma's dump console.log
        
        expect(omdbApi.search('Guardians of the Galaxy Vol. 2')).toEqual(movieData);
    });

    it('should return movie id', function () {
        //   angular.mock.module('omdb');  // moved up to beforeEach 
        expect(omdbApi.find('tt3896198')).toEqual(movieDataById);

    });

});
