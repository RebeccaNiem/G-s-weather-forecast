function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input-id");
  let cityElement = document.querySelector("#weather-city-id");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", handleSearchSubmit);
