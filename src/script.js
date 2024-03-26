function updateWeather(response){
let temperatureElement = document.querySelector("#weather-degree");
let temperature = response.data.temperature.current;

let cityElement = document.querySelector("#weather-city");

let descriptionElement = document.querySelector("#description");

let humidityElement = document.querySelector("#humidity");

let windElement = document.querySelector("#wind");

let timeElement = document.querySelector("#time");

let date = new Date(response.data.time * 1000);

let iconElement = document.querySelector("#weather-icon");


cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML = `${response.data.wind.speed}km/h`;
timeElement.innerHTML = formatDate(date);
temperatureElement.innerHTML = Math.round(temperature);
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

displayForecast(response.data.city);
}


function formatDate(date) {
let minutes = date.getMinutes();
let hours = date.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
let day = days[date.getDay()];
  
if (minutes < 10) {
minutes = `0${minutes}`;
}
  
return `${day} ${hours}:${minutes}, `;
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
searchFormElement.addEventListener("submit", displayTemperature);

function displayForecast(city){
let apiKey = "312a98ffb2fdc23b3521b024dt925odb";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
axios(apiUrl).then(getForecast);
}

function getForecast(response){
console.log(response.data);

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];
let forecastHtml = "";

days.forEach(function(day) {
forecastHtml = forecastHtml + `<div class="forecasts">
<div class="forecast-day">${day}</div>
<div class="forecast-icon">⛈️</div>
<div class="forecast-temperatures">
<div class="forecast-temperature">
<strong>15º</strong>
</div>
<div class="forecast-temperature">9º</div>
</div>
</div>`;
}); 

let forecastElement = document.querySelector("#forecast"); 
forecastElement.innerHTML = forecastHtml;
}

searchCity("Calgary");



