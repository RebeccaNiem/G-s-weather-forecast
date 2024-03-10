function refreshWeather(response) {
  let weatherTemperature = document.querySelector("#temperature");
  weatherTemperature.innerHTML = response.data.temperature.current;
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
  let cityElement = document.querySelector("#weather-city-id");
  cityElement.innerHTML = searchInput.value;
  citySearch(searchInput.value);
}

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", handleSearchSubmit);
