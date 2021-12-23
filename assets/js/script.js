// var data = ;

var searchFields = document.querySelector(".searchFields");
var checkDatesBtn = document.querySelector("#checkDatesBtn");
var weatherResults = document.querySelector(".weatherResults");
var inputDates = document.querySelector("#inputDates");
var cancelBtn = document.querySelector("#cancelBtn");
var storage = JSON.parse(localStorage.getItem("cityInfo")) || [];

var city = document.getElementById("inputCity").value;

function hide(element) {
  element.style.display = "none";
}
function display(element) {
  element.style.display = "block";
}

checkDatesBtn.addEventListener("click", function () {
  hide(searchFields);
  hide(inputDates);
  //checkDates();
  // hide(cancelBtn);

  var search = {
    city: inputCity.value,
    date: inputDates.value,
  };
  display(weatherResults);
  storage.push(search);
  localStorage.setItem("cityInfo", JSON.stringify(storage));
  document.getElementById("recentSearches").innerHTML =
    localStorage.getItem("cityInfo");
});

// hide(checkDatesBtn);
// hide(cancelBtn);
// display(weatherResults);
// localStorage.setItem("cityInfo", JSON.stringify(inputCity.value));
// document.getElementById("recentSearches").innerHTML =
//   localStorage.getItem("cityInfo");

// localStorage.setItem("inputDates", JSON.stringify(inputDates.value));
// document.getElementById("recentSearches").innerHTML =
//   localStorage.getItem("inputDates");

// document.getElementById("inputCity").innerHTML = localStorage.getItem(city);
// JSON.parse(localStorage.getItem(city));

// weatherResults.innerHTML = `
