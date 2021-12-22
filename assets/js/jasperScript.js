const APIKey = "c5a2aadd2ba954ccd8c6e99df9c362c9";
const today = new Date();
console.log(today)
let limit = moment().add(7, 'days');
console.log(limit)
document.getElementById("checkDatesBtn").addEventListener("click", checkDates);

function checkDates() {
  if(inputDates > limit){
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
        });
    });
}}

// fetch(“https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km”, {
// 	“method”: “GET”,
// 	“headers”: {
// 		“x-rapidapi-host”: “travel-advisor.p.rapidapi.com”,
// 		“x-rapidapi-key”: “ac0e3c3af6msh7dd67cc95fdd673p1586bbjsn29d733c732e2"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
