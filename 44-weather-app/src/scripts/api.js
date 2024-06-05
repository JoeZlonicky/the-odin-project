class MultiUnitValue {
  constructor(metric, imperial) {
    this.metric = metric;
    this.imperial = imperial;
  }
}

class QueryResult {
  constructor(data) {
    this.locationName = data?.location?.name;
    this.locationRegion = data?.location?.region;
    this.locationCountry = data?.location?.country;

    this.latitude = data?.location?.lat;
    this.longitude = data?.location?.lon;
    this.timeZone = data?.location?.tz_id;
    this.localTime = data?.location?.localtime;
    this.lastUpdated = data?.current?.last_updated;

    this.weather = data?.current?.condition?.text;
    this.weatherIcon = data?.current?.condition?.icon;

    this.temperature = new MultiUnitValue(data?.current?.temp_c, data?.current?.temp_f);
    this.feelsLike = new MultiUnitValue(data?.current?.feelslike_c, data?.current?.feelslike_f);

    this.windSpeed = new MultiUnitValue(data?.current?.wind_kph, data?.current?.wind_mph);
    this.windDirection = data?.current?.wind_dir;
    this.windDirectionDegrees = data?.current?.wind_degree;
    this.pressure = new MultiUnitValue(data?.current?.pressure_mb, data?.current?.pressure_in);

    this.precipitation = new MultiUnitValue(data?.current?.precip_mm, data?.current?.precip_in);
    this.humidity = `${data?.current?.humidity}%`;
    this.windChill = new MultiUnitValue(data?.current?.windchill_c, data?.current?.windchill_f);
    this.heatIndex = new MultiUnitValue(data?.current?.heatindex_c, data?.current?.heatindex_f);

    this.visibility = new MultiUnitValue(data?.current?.vis_km, data?.current?.vis_miles);
    this.uv = data?.current?.uv;
    this.gustSpeed = new MultiUnitValue(data?.current?.gust_kph, data?.current?.gust_mph);
  }
}

// Returns QueryResult or null if it failed
const query = async (key, location) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

  const response = await fetch(url, { mode: 'cors' });
  if (!response.ok) {
    return null;
  }

  const body = await response.json();
  return new QueryResult(body);
};

export { query };
