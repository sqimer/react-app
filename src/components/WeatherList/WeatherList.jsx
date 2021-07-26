import React from "react";
import { Wrap } from "./weatherList.style";
import WeatherItem from "./WeatherItem/WeatherItem";

const WeatherList = ({ weather }) => {
  return (
    <Wrap>
      {weather.map((item) => (
        <WeatherItem key={item.city.id} weatherData={item} />
      ))}
    </Wrap>
  );
};

export default WeatherList;