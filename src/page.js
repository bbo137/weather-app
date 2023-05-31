function clearContent(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function displayWeather(data) {
  const targetElement = document.getElementById('content');

  clearContent(targetElement);
  // main info: temp, location, condition/status
  const mainInfo = document.createElement('div');
  mainInfo.classList.add('main-info');

  const img = document.createElement('div');
  const city = document.createElement('div');
  const condition = document.createElement('div');
  const temp = document.createElement('div');

  city.textContent = data.name;
  condition.textContent = data.condition;
  temp.textContent = data.temp;
  temp.textContent += 'º';

  mainInfo.append(img, city, condition, temp);

  // secondary info: especifics, wind, visibility, uv, pressure
  const secondaryInfo = document.createElement('div');
  secondaryInfo.classList.add('secondary-info');

  img.classList.add('img');
  /* img.classList.add(data.condition.replace(/\s+/g, '').toLowerCase()); */
  data.condition
    .toLowerCase()
    .split(' ')
    .forEach((feature) => {
      img.classList.add(feature);
    });
  const day = data.day ? 'day' : 'night';
  img.classList.add(day);

  const humidity = `${data.humidity} %`;
  const feelTemp = `${data.feelTemp} ºC`;
  const precip = `${data.precip} %`;
  const visibility = `${data.visibility} km`;
  const pressure = `${data.pressure} hPa`;
  const { uvIndex } = data;
  const wind = `${data.windVel} km/h ${data.windDegree}º ${data.windDir}`;

  const metaData = [
    'Humidity',
    'Percieved temperature',
    'Chance of precipitation',
    'Visibility',
    'Pressure',
    'UV index',
    'Wind',
  ];
  const values = [
    humidity,
    feelTemp,
    precip,
    visibility,
    pressure,
    uvIndex,
    wind,
  ];

  values.forEach((value, index) => {
    const div = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span1.classList.add('title');
    span2.classList.add('value');

    const hr = document.createElement('hr');
    hr.classList.add('rounded');

    div.classList.add('info');
    span1.textContent = metaData[index];
    span2.textContent = value;
    div.append(span1, span2);
    secondaryInfo.appendChild(hr);
    secondaryInfo.appendChild(div);
  });

  targetElement.appendChild(mainInfo);
  targetElement.appendChild(secondaryInfo);
}

export { clearContent, displayWeather };
