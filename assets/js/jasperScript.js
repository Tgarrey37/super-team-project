const APIKey = "c5a2aadd2ba954ccd8c6e99df9c362c9";

document.getElementById("checkDatesBtn").addEventListener("click", checkDates);

const today = new Date();
console.log(today);
let limit = moment().add(7, "days");
console.log(limit);
// document.getElementById("checkDatesBtn").addEventListener("click", checkDates);

function checkDates() {
  if (inputDates > limit) {
    return;
  } else {
    const city = document.getElementById("inputCity").value;
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      APIKey;

    fetch(queryURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Didn't reach");
          return;
        }
      })
      .then((data) => {
        console.log(data);
        const longitude = data.coord.lon;
        const latitude = data.coord.lat;
        console.log("longitude of " + city + " is " + longitude);
        console.log("latitude of " + city + " is " + latitude);
        var nextQuery =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&units=imperial&appid=" +
          APIKey;
        fetch(nextQuery)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return;
            }
          })
          .then((data) => {
            console.log(data);

            // variables for the current day weather
            const temp = data.current.temp;
            const clouds = data.current.clouds;
            const minTemp = data.daily[0].temp.min;
            const maxTemp = data.daily[0].temp.max;
            console.log("The temperature in " + city + " is currently " + temp);
            console.log(
              "The percentage of cloudiness in " + city + " is " + clouds
            );
            document.getElementById("today").textContent = `Today's Forecast: 
            `;
            document.getElementById("currentTemp").textContent =
              `The current temperature is ` + data.current.temp + `F`;
            document.getElementById("maxTemp").textContent =
              `Highs of ` + data.daily[0].temp.max + `F today.`;
            document.getElementById("lowTemp").textContent =
              `Lows of ` + data.daily[0].temp.min + `F today.`;
            document.getElementById("humidity").textContent =
              `Humidity is ` + data.current.humidity + `%`;
            document.getElementById("description").textContent =
              `Weather today is described as: ` +
              data.current.weather[0].description;
            //   console.log(dailyMin);
            //   console.log(description);

            // forecast for second day
            document.getElementById("descrTomorrow").textContent =
              "The weather will be " + data.daily[1].weather[0].description;
            document.getElementById("lowTomorrow").textContent =
              "Low of " + data.daily[1].temp.min;
            document.getElementById("highTomorrow").textContent =
              "High of " + data.daily[1].temp.max;

            // forecast for third day
            document.getElementById("descrThird").textContent =
              "The weather will be " + data.daily[2].weather[0].description;
            document.getElementById("lowThird").textContent =
              "Low of " + data.daily[2].temp.min;
            document.getElementById("highThird").textContent =
              "High of " + data.daily[2].temp.max;

            // forecast for fourth day
            document.getElementById("descrFourth").textContent =
              "The weather will be " + data.daily[3].weather[0].description;
            document.getElementById("lowFourth").textContent =
              "Low of " + data.daily[3].temp.min;
            document.getElementById("highFourth").textContent =
              "High of " + data.daily[3].temp.max;

            // forecast for fifth day
            document.getElementById("descrFifth").textContent =
              "The weather will be " + data.daily[4].weather[0].description;
            document.getElementById("lowFifth").textContent =
              "Low of " + data.daily[4].temp.min;
            document.getElementById("highFifth").textContent =
              "High of " + data.daily[4].temp.max;

            // forecast for sixth day
            document.getElementById("descrSixth").textContent =
              "The weather will be " + data.daily[5].weather[0].description;
            document.getElementById("lowSixth").textContent =
              "Low of " + data.daily[5].temp.min;
            document.getElementById("highSixth").textContent =
              "High of " + data.daily[5].temp.max;

            // forecast for seventh day
            document.getElementById("descrSeventh").textContent =
              "The weather will be " + data.daily[6].weather[0].description;
            document.getElementById("lowSeventh").textContent =
              "Low of " + data.daily[6].temp.min;
            document.getElementById("highSeventh").textContent =
              "High of " + data.daily[6].temp.max;

            // Hotel Data
            var apiKey = "f9353ff5c9msh3262f753f10f289p1db0d9jsn74eabeef79d2a";
            var URL1 = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="
            +city+
            "&lang=en_US&units=mi&appid="
            +apiKeyj;

            fetch(URL1, {
              method: "GET",
              headers: {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key":
                  "f9353ff5c9msh3262f753f10f289p1db0d9jsn74eabeef79d2",
              },
            })
              .then((response) => {
                console.log(response);
                console.log(response.json);
                return response.json();
              })
              .catch((err) => {
                console.error(err);
              })
              .then((data) => {
                console.log(data);
                var lat =
                  data.data.Typeahead_autocomplete.results[0].detailsV2.geocode
                    .latitude;
                var lon =
                  data.data.Typeahead_autocomplete.results[0].detailsV2.geocode
                    .longitude;

                console.log(lat);
                console.log(lon);

                var date = document.getElementById("inputDates").value;
                console.log(date);

                var URL2 =
                  "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude="
                  +lat+
                  "&longitude="
                  +lon+
                  "&lang=en_US&limit=5&adults=1&amenities=pool%2Cspa&rooms=1&currency=USD&checkin="
                  +date+
                  "&nights=1&distance=10"

                console.log(URL2);

                fetch(URL2, {
                  method: "GET",
                  headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key":
                      "f9353ff5c9msh3262f753f10f289p1db0d9jsn74eabeef79d2",
                  },
                })
                  .then((response) => {
                    console.log(response.json);
                    return response.json();
                  })
                  .catch((err) => {
                    console.error(err);
                  })
                  .then((data) => {
                    console.log(data);

                    for (let i = 0; i < data.data.length; i++) {
           
                      if (data.data[i].name !== undefined) {
                        var hotelPhoto = data.data[i].photo.images.small.url;
                        console.log(hotelPhoto);
                        var hotelName = data.data[i].name;
                        console.log("Hotel Name: " + hotelName);
                        var hotelPrice = data.data[i].price;
                        console.log("Hotel Price Range: " + hotelPrice);
                        var hotelRating = data.data[i].rating;
                        console.log("Hotel Rating: " + hotelRating);

                        var card = `
                          <div class="hotel-list">
                          <a class="img" Link href="${hotelPhoto}"><img src="${hotelPhoto}" alt="Photo of Hotel"></a>
                          <h6 class="hotelName">Hotel Name: ${hotelName}</h6>
                          <span class="hotelPrice">Hotel Price Range: ${hotelPrice}</span>
                          <span class="hotelRating">Hotel Rating: ${hotelRating}</span>
                          </div>
                          `

                          $(".hotel-info").append(card);
                      }
                
             

                    };
                  });
                  var URL3 = 
                  "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude="
                  + lon +
                  "&latitude=" +
                  lat +
                  "&lunit=mi&currency=USD&limit=5&lang=en_US";
                  console.log(URL3);

                 fetch(URL3, {
                   method: "GET",
                   headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    // "x-rapidapi-key":
                    //   "3c1946e328mshd9fa0bbc159f712p1befbbjsn7dcdf270cc76",
                    "x-rapidapi-key": "910fdf912amshb0c25005d22a18bp176efajsncf775f14afc7",
                   },
                 })
                 .then((response) => {
                   console.log(response.json);
                   return response.json();
                 })
                 .catch((err) => {
                   console.log(err);
                 })
                 .then((data) => {
                   console.log(data)

                   for (let i = 0; i < data.data.length; i++) {
                     if (data.data[i] !== undefined) {
                       var attrName = data.data[i].name;
                       console.log(attrName);
                       var webURL = data.data[i].web_url;
                       console.log(webURL);
                       var attrPhoto = data.data[i].photo.images.small.url;
                       console.log(attrPhoto);


                       var card = `
                       <div id = "attrCard">
                       
                          <h6 class="attraction-name">${attrName}</h6>
                          
                          <a href="${webURL}"><img src="${attrPhoto}" width="200" height = "200" id = "attrPhoto"></a>
                          
                          </div>
                          `
                          
                          $(".attraction-info").append(card);
                          
                     }
                     
                   }
                 })


















































                 var URL4 =
                 "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=" +
                 lat +
                 "&longitude=" +
                 lon +
                 "&1unit=mi&currency=USD&limit=5&lang=en_US";
               
               console.log(URL4);
               
               fetch(URL4, {
                 method: "GET",
                 headers: {
                   "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                   "x-rapidapi-key": "ac0e3c3af6msh7dd67cc95fdd673p1586bbjsn29d733c732e2",
                 },
               })
                 .then((response) => {
                   console.log(response.json);
                   return response.json();
                 })
                 .catch((err) => {
                   console.error(err);
                 })
                 .then((data) => {
                   console.log(data);
               
                   for (let i = 0; i < data.data.length; i++) {
                     if (data.data[i].name !== undefined) {
                       var restaurantName = data.data[i].name;
                       console.log("Restaurant Name: " + restaurantName);
                       var restaurantPrice = data.data[i].price_level;
                       console.log("Restaurant Price Range: " + restaurantPrice);
                       var restaurantRating = data.data[i].raw_ranking;
                       console.log("Restaurant Rating: " + restaurantRating);


                       var card= `
                       <div class="restaurant-list">
                          
                          <h6 class="restaurantName">Restaurant Name: ${restaurantName}</h6>
                          <span class="restaurantPrice">Restaurant Price Range: ${restaurantPrice}</span>
                          <span class="restaurantRating">Restaurant Rating: ${restaurantRating}</span>
                          </div>
                          `

                      $(".restaurant-info").append(card);
                      console.log(card);

    
                  
              };
            };
          });
        }
          
    


      ,)})})}}
