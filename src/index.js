import { clearContent, displayWeather } from './page';

console.log('hi');
const apiKey = 'a06bf523144a4ec7b8970917232305';

function filterData(data) {
  // current condition
  const condition = data.current.condition.text;
  const feelTemp = data.current.feelslike_c;
  const {humidity} = data.current;
  const precip = data.current.precip_mm;
  const pressure = data.current.pressure_mb;
  const temp = data.current.temp_c;
  const uvIndex = data.current.uv;
  const visibility = data.current.vis_km;
  const windDegree = data.current.wind_degree;
  const windDir = data.current.wind_dir;
  const windVel = data.current.wind_kph;
  const day = data.current.is_day;
  // current location
  const {country} = data.location;
  const {name} = data.location;

  return {
    condition,
    feelTemp,
    humidity,
    precip,
    pressure,
    temp,
    uvIndex,
    visibility,
    windDegree,
    windDir,
    windVel,
    day,
    country,
    name,
  };
}

async function getWeather(location) {
  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
      { mode: 'cors' }
    );
    const weatherData = await weather.json();
    const requestData = filterData(weatherData);
    return requestData;
  } catch (error) {
    console.log(error);
    const content = document.getElementById('content');
    clearContent(content);
  }
  return null;
}

function listerner() {
  const myForm = document.getElementById('myForm');
  const content = document.getElementById('content');
  myForm.addEventListener('submit', (event) => {
    clearContent(content);
    const location = document.querySelector('.location').value;
    const loading = document.createElement('img');
    loading.src = '../resources/my-loader.svg';
    loading.classList.add('loading');
    content.appendChild(loading);
    console.log(location);
    const weather = getWeather(location);
    weather.then((result) => {
      if (result) {
        console.log(result);
        displayWeather(result);
      }
    });
    event.preventDefault();
  });
}

listerner();
