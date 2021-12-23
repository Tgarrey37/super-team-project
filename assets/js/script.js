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
searchDisplay();
checkDatesBtn.addEventListener("click", function () {
  hide(searchFields);
  hide(inputDates);
  //checkDates();
  // hide(cancelBtn);

  var search = {
    city: inputCity.value.toUpperCase(),
    date: inputDates.value,
  };
  display(weatherResults);
  storage.push(search);
  localStorage.setItem("cityInfo", JSON.stringify(storage));
  searchDisplay();
});
function searchDisplay() {
  document.getElementById("recentSearches").innerHTML = "";
  for (var i = 0; i < storage.length; i++) {
    var li = document.createElement("li");
    li.textContent = `${storage[i].city} ${storage[i].date}`;
    document.getElementById("recentSearches").append(li);
  }
}
