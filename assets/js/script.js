const APIKey = "c5a2aadd2ba954ccd8c6e99df9c362c9";

document.getElementById("checkDatesBtn").addEventListener("click", checkDates);

function checkDates() {
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
        console.log(response.json);
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
    });
}

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
