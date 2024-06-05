const idMapping = {
  city: 'city-value',
  region: 'region-value',
  temperature: 'temperature-value',
  weather: 'weather-value',
  weatherIcon: 'weather-icon',
  feelsLike: 'feels-like-value',
  wind: 'wind-value',
  gusts: 'gusts-value',
  windChill: 'wind-chill-value',
  pressure: 'pressure-value',
  uv: 'uv-value',
  heatIndex: 'heat-index-value',
  precipitation: 'precipitation-value',
  humidity: 'humidity-value',
  visibility: 'visibility-value',
  geo: 'geo-value',
  localTime: 'local-time-value',
  lastUpdated: 'last-updated-value',
};

class UnitSystem {
  constructor(temperature, windSpeed, pressure, precipitation, distance) {
    this.temperature = temperature;
    this.windSpeed = windSpeed;
    this.pressure = pressure;
    this.precipitation = precipitation;
    this.distance = distance;
  }

  formatTemperature(value) {
    return `${Math.round(value)}°${this.temperature}`;
  }

  formatWindSpeed(value) {
    return `${Math.round(value)}${this.windSpeed}`;
  }

  formatPressure(value) {
    return `${Math.round(value)}${this.pressure}`;
  }

  formatPrecipitation(value) {
    return `${value}${this.precipitation}`;
  }

  formatDistance(value) {
    return `${value}${this.distance}`;
  }
}

const contentContainer = document.querySelector('.content-container');

let elements = {};
Object.entries(idMapping).forEach(([key, value]) => {
  const element = contentContainer.querySelector(`.${value}`);
  elements[key] = element;
});

const metricSystem = new UnitSystem('C', 'km/h', 'mb', 'mm', 'km');
const imperialSystem = new UnitSystem('F', 'miles/h', 'inHg', 'in', 'miles');

const displayData = (queryResult, isMetric) => {
  const unitSystem = isMetric ? metricSystem : imperialSystem;
  const getUnitValue = (multiUnitValue) => {
    return isMetric ? multiUnitValue.metric : multiUnitValue.imperial;
  };

  elements.city.textContent = queryResult.locationName;
  elements.region.textContent = `${queryResult.locationRegion}, ${queryResult.locationCountry}`;
  elements.temperature.textContent = unitSystem.formatTemperature(getUnitValue(queryResult.temperature));
  elements.weather.textContent = queryResult.weather;
  elements.weatherIcon.src = queryResult.weatherIcon;
  elements.feelsLike.textContent = unitSystem.formatTemperature(getUnitValue(queryResult.feelsLike));
  elements.wind.textContent = unitSystem.formatWindSpeed(getUnitValue(queryResult.windSpeed));
  elements.wind.textContent += ` @ ${queryResult.windDirectionDegrees}° (${queryResult.windDirection})`;

  elements.gusts.textContent = unitSystem.formatWindSpeed(getUnitValue(queryResult.gustSpeed));
  elements.windChill.textContent = unitSystem.formatTemperature(getUnitValue(queryResult.windChill));
  elements.pressure.textContent = unitSystem.formatPressure(getUnitValue(queryResult.pressure));
  elements.uv.textContent = queryResult.uv;
  elements.heatIndex.textContent = unitSystem.formatTemperature(getUnitValue(queryResult.heatIndex));
  elements.precipitation.textContent = unitSystem.formatPrecipitation(getUnitValue(queryResult.precipitation));
  elements.humidity.textContent = queryResult.humidity;
  elements.visibility.textContent = unitSystem.formatDistance(getUnitValue(queryResult.visibility));
  elements.geo.textContent = `${queryResult.latitude} / ${queryResult.longitude}`;
  elements.localTime.textContent = queryResult.localTime;
  elements.lastUpdated.textContent = queryResult.lastUpdated;
};

export default displayData;
