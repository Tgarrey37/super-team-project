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
          //   const dailyMin = data.daily.temp.min;
          //   const description = data.main.description;
          console.log("The temperature in " + city + " is currently " + temp);
          console.log(
            "The percentage of cloudiness in " + city + " is " + clouds
          );
          //   console.log(dailyMin);
          //   console.log(description);
        });
    });
}


fetch("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="+inputCity+"&lang=en_US&units=mi", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "3c1946e328mshd9fa0bbc159f712p1befbbjsn7dcdf270cc76"
	}
})
.then(response => {
	console.log(response);
  return response.json();
})
.catch(err => {
	console.error(err);
});



//$(document).ready(function() {
  //$("#checkDatesBtn").on("click", function(){

    //var cityName = $("#inputCity").val().trim();
    //var URL1 = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="+&lang=en_US&units=mi";

    //var URL2 = "https://travel-advisor.p.rapidapi.com/locations/search?query="+cityName+"&limit=30&offset=0&units=mi&location_id=1&currency=USD&sort=relevance&lang=en_US"


    //fetch(URL1)
      //.then(function(response) {
      //  return response.json();
      //}).then(function(data) {
      //  console.log(data);

      //})
    
  //})

//})
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
