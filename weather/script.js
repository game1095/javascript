const form = document.getElementById("form");
const search = document.getElementById("search");

let city = "Alaska";
const apiKey = "efdd3491e75fb58ded247222e3fbed40";

function setData() {
  showWeather();
}

async function showWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    showDataToUI(data);
  } catch (error) {
    console.log(error);
  }
}

function showDataToUI(data) {
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const weather = document.getElementById("weather");
  const status = document.getElementById("status");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  city.innerText = data.name;
  state.innerText = data.sys.country;
  weather.children[0].innerHTML =
    calculate(parseInt(data.main.temp)) + " C&deg";
  weather.children[1].innerHTML =
    "Min: " +
    calculate(parseInt(data.main.temp_min)) +
    " C&deg;" +
    " Max: " +
    calculate(parseInt(data.main.temp_max)) +
    " C&deg;";
  status.innerText = "Status: " + data.weather[0].main;
  humidity.innerText = "Humidity: " + data.main.humidity;
  wind.innerHTML = "Wind Speed: " + data.wind.speed;

  console.log(data)
}

function calculate(kelvin) {
  return kelvin - 273;
}

function callDataAPI(event){
  event.preventDefault();
  city = search.value
  showWeather();
}

form.addEventListener("submit" , callDataAPI)
setData();
