function updateWeather(response){
let temperatureElement = document.querySelector("#weather-degree");
let temperature = response.data.temperature.current;
temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city){
let apiKey = "312a98ffb2fdc23b3521b024dt925odb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}


function displayTemperature (event) {
event.preventDefault();

let searchInput = document.querySelector("#search-input");
let cityElement = document.querySelector("#weather-city");
cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value)
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayTemperature)

