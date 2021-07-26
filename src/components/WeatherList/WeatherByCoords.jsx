import React from "react";
import { Wrap } from "./weatherList.style";
import WeatherItem from "./WeatherItem/WeatherItem";

const WeatherByCoords = ({ weatherByCoords }) => {
  return (
    <Wrap>
      {weatherByCoords.map((item) => (
        <WeatherItem key={item.city.id} weatherData={item} />
      ))}
    </Wrap>
  );
};

export default WeatherByCoords;