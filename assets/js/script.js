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
