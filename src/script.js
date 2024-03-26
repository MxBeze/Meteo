function updateWeather(response){
let temperatureElement = document.querySelector("#weather-degree");
let temperature = response.data.temperature.current;

let cityElement = document.querySelector("#weather-city");

let descriptionElement = document.querySelector("#description");

let humidityElement = document.querySelector("#humidity");

let windElement = document.querySelector("#wind");

let timeElement = document.querySelector("#time");

let iconElement = document.querySelector("#weather-icon");


cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed}km/h`;
timeElement.innerHTML = formatDate();
temperatureElement.innerHTML = Math.round(temperature);
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(){
let currentDate = new Date();
let currentDay = currentDate.toLocaleString("en-UK", { weekday: "long" });
let currentTime = currentDate.toLocaleString("en-UK", {
hour: "numeric",
minute: "numeric",
hour12: false,
});

return `${currentDay} ${currentTime}, `;
}

function searchCity(city){
let apiKey = "312a98ffb2fdc23b3521b024dt925odb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}


function displayTemperature (event) {
event.preventDefault();

let searchInput = document.querySelector("#search-input");

searchCity(searchInput.value)
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayTemperature)

searchCity("Vancouver");