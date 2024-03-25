function refreshWeather(response) {
  let weatherTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-city-id");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
  timeElement.innerHTML = formatDate(date);
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  weatherTemperature.innerHTML = Math.round(temperature);

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }

  return `${day} ${hours}:${minutes},`;
}

function citySearch(city) {
  let apiKey = "280o02ba0daf2b414a53ctfe4e6155a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input-id");

  citySearch(searchInput.value);
}

function getForecast(city) {
  apiKey = "280o02ba0daf2b414a53ctfe4e6155a2";
  apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(rsponse) {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
       <div class="weather-forecast">
       
              <div class="weather-forecast-date">${day}</div>
            
              <img 
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"  class="image"
                alt=""
                width="40"
               
              
              />
              <br/>
          

              <div class="weather-forecast-temperatures">
              <br />
              <br />
                <span class="weather-forecast-temperatures-max"> 18° </span>

                <span class="weather-forecast-temperatures-min"> 12°</span>
              </div>
            </div>
          </div>
        </div>
        `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", handleSearchSubmit);

citySearch("Amsterdam");
