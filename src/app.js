function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let currentDateELement = document.querySelector("#data-top .currentDay");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let h1 = document.querySelector("h1 .locate");
  h1.innerHTML = `${searchInput.value}`;

  let units = "metric";
  let apiKey = "of6086btc007ee99f30aa4475293c94d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temparatureElement = document.querySelector(".temperature_today");
  let temperatura = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1 .locate");
  cityElement.innerHTML = response.data.city;
  temparatureElement.innerHTML = `${temperatura}°C`;
}
