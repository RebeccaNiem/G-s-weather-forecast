function refreshWeather(response) {
  let weatherTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-city-id");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");

  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  weatherTemperature.innerHTML = Math.round(temperature);
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

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", handleSearchSubmit);

citySearch("Amsterdam");
