const APIKey = "c5a2aadd2ba954ccd8c6e99df9c362c9";

document.getElementById("checkDatesBtn").addEventListener("click", checkDates);
document.getElementById("cancelBtn").addEventListener("click", refresh);

function refresh() {
  window.location.reload();
}

const today = new Date();
let limit = moment().add(7, "days");

function getNumberOfDays(start, end) {
  const chunkyDate = new Date(start);
  const crispyDate = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24;
  const timeDiff = crispyDate.getTime() - chunkyDate.getTime();
  const dayDiff = Math.ceil(timeDiff / oneDay);
  return dayDiff;
}

function checkDates() {
  const startDate = today;
  const [year, month, day] = document
    .getElementById("inputDates1")
    .value.split("-")
    .map(Number);
  const endDate = new Date(year, month - 1, day);

  if (endDate > limit || endDate < startDate) {
    // TODO: inform the user it didn't work
    return;
  } else {
    const numOfDays = getNumberOfDays(startDate, endDate);
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
          return;
        }
      })
      .then((data) => {
        const longitude = data.coord.lon;
        const latitude = data.coord.lat;
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
            // variables for the current day weather
            const temp = data.current.temp;
            const clouds = data.current.clouds;
            const minTemp = data.daily[0].temp.min;
            const maxTemp = data.daily[0].temp.max;
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

            const cardIDs = [
              "cardOne",
              "cardTwo",
              "cardThree",
              "cardFour",
              "cardFive",
              "cardSix",
            ];

            for (let i = 0; i < numOfDays; i++) {
              document.getElementById(cardIDs[i]).classList.add("show");
            }
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
            var apiKey = "a0f73c1dd1msh74ec516011e5ba8p1a5333jsn70f964f2bb32";
            var URL1 =
              "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=" +
              city +
              "&lang=en_US&units=mi&appid=" +
              apiKey;

            fetch(URL1, {
              method: "GET",
              headers: {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key":
                  "a0f73c1dd1msh74ec516011e5ba8p1a5333jsn70f964f2bb32",
              },
            })
              .then((response) => {
                return response.json();
              })
              .catch((err) => {
              })
              .then((data) => {
                var lat =
                  data.data.Typeahead_autocomplete.results[0].detailsV2.geocode
                    .latitude;
                var lon =
                  data.data.Typeahead_autocomplete.results[0].detailsV2.geocode
                    .longitude;

                var date = today;

                var URL2 =
                  "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=" +
                  lat +
                  "&longitude=" +
                  lon +
                  "&lang=en_US&limit=5&adults=1&amenities=pool%2Cspa&rooms=1&currency=USD&checkin=" +
                  date +
                  "&nights=1&distance=10";


                fetch(URL2, {
                  method: "GET",
                  headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key":
                      "a0f73c1dd1msh74ec516011e5ba8p1a5333jsn70f964f2bb32",
                  },
                })
                  .then((response) => {
                    return response.json();
                  })
                  .catch((err) => {
                  })
                  .then((data) => {

                    for (let i = 0; i < data.data.length; i++) {
                      if (data.data[i].name !== undefined) {
                        var hotelPhoto = data.data[i].photo.images.medium.url;
                        var hotelName = data.data[i].name;
                        var hotelPrice = data.data[i].price;
                        var hotelRating = data.data[i].rating;

                        var card = `
                          <div class="hotel-list">
                          <div class="image">
                          <a class="img" Link href="${hotelPhoto}"><img src="${hotelPhoto}" alt="Photo of Hotel"></a>
                          </div>
                          <div class="text">
                          <h6 class="hotelName">Hotel Name: ${hotelName}<br></h6>
                          <span class="hotelPrice">Hotel Price Range: ${hotelPrice}<br></span>
                          <span class="hotelRating">Hotel Rating: ${hotelRating}<br></span>
                          </div>
                          </div>
                          `;

                        $(".hotel-info").append(card);
                      }
                    }
                  });
                var URL3 =
                  "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=" +
                  lon +
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
                    "x-rapidapi-key":
                      "910fdf912amshb0c25005d22a18bp176efajsncf775f14afc7",
                  },
                })
                  .then((response) => {
                    return response.json();
                  })
                  .catch((err) => {
                  })
                  .then((data) => {

                    for (let i = 0; i < data.data.length; i++) {
                      if (data.data[i] !== undefined) {
                        var attrName = data.data[i].name;
                        var webURL = data.data[i].web_url;
                        var attrPhoto = data.data[i].photo.images.small.url;

                        var card = `
                          <div id = "attrCard">
                       
                          <h6 class="attraction-name">${attrName}</h6>
                          
                          <a href="${webURL}"><img src="${attrPhoto}" width="200" height = "200" id = "attrPhoto"></a>
                          
                          </div>
                          `;

                        $(".attraction-info").append(card);
                      }
                    }
                  });

                var URL4 =
                  "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=" +
                  lat +
                  "&longitude=" +
                  lon +
                  "&1unit=mi&currency=USD&limit=5&lang=en_US";


                fetch(URL4, {
                  method: "GET",
                  headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key":
                      "a0f73c1dd1msh74ec516011e5ba8p1a5333jsn70f964f2bb32",
                  },
                })
                  .then((response) => {
                    return response.json();
                  })
                  .catch((err) => {
                  })
                  .then((data) => {

                    for (let i = 0; i < data.data.length; i++) {
                      if (data.data[i].name !== undefined) {
                        var restaurantName = data.data[i].name;
                        var restaurantPrice = data.data[i].price_level;
                        var restaurantRating = data.data[i].rating;
                        var restaurantWebsite = data.data[i].web_url;

                        var card = `
                          <div class="restaurant-list">
                          
                          <h6 class="restaurantName">Restaurant Name: ${restaurantName}</h6>
                          
                          <span class="restaurantPrice">Restaurant Price Range: ${restaurantPrice}</span>
                          <br>
                          <span class="restaurantRating">Restaurant Rating: ${restaurantRating}</span>
                          <br>
                          <a href="${restaurantWebsite}">Website</a>
                          
                          </div>
                          `;

                        $(".restaurant-info").append(card);
                      }
                    }
                  });
              });
          });
      });
  }
}
