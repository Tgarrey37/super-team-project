// var data = ;

var searchFields = document.querySelector(".searchFields");
var checkDatesBtn = document.querySelector("#checkDatesBtn");
var weatherResults = document.querySelector(".weatherResults");
var inputDates = document.querySelector("#inputDates");
var cancelBtn = document.querySelector("#cancelBtn");

function hide(element) {
  element.style.display = "none";
}
function display(element) {
  element.style.display = "block";
}

checkDatesBtn.addEventListener("click", function () {
  hide(searchFields);
  hide(inputDates);
  // hide(checkDatesBtn);
  // hide(cancelBtn);
  display(weatherResults);
});

// weatherResults.innerHTML = `
