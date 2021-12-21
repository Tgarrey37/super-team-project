var searchFields = document.querySelector(".searchFields");
var checkDatesBtn = document.querySelector("#checkDatesBtn");
var weatherResults = document.querySelector("");


function hide(element) {
    element.style.display = "none";
}
function display(element) {
    element.style.display = "block";
}

checkDatesBtn.addEventListener("click", function() {
    hide(searchFields);
    // display(weatherResults);
})

// weatherResults.innerHTML = `
// <div class="card mx-auto mt-5" style="width: 18rem;">
//             <div class="card-body justify-content-center">
//                 <h5 class="card-title">${}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">Currently, it's ${}F.<br> Highs of ${}F.<br> Lows of ${}F.<br> Humidity is ${}%.<br> Wind speed of ${} MPH.<br> Uv is ${}</h6>
//                 <p class="card-text"> Weather conditions are described as: ${}</p>
//             </div>
//         </div>
// `