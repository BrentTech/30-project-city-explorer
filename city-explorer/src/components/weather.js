import React from 'react';

const Weather = props => {
  return (
    <section>
      <h3>Results from the Dark Sky API</h3>
      <ul>
        {props.weather.map((forecast, idx) =>  (
          <li key={`weather-${idx}`}>The forecast for {forecast.time} is: {forecast.forecast}</li>
        ))}
      </ul>
  </section>
  );
}

export default Weather;