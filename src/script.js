function displayTemperature (event) {
event.preventDefault();

let searchInput = document.querySelector("#search-input");
let cityElement = document.querySelector("#weather-city");
cityElement.innerHTML = searchInput.value;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayTemperature)

let apiKey = "312a98ffb2fdc23b3521b024dt925odb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;