import React from "react";
import { useDispatch } from "react-redux";
import { deleteCity } from "../../../redux/action";
import {
  Wrap,
  WeatherIcon,
  WeatherInfo,
  WeatherBlock,
  Temp,
  Humidity,
  Pressure,
  Wind,
  Delete,
} from "./weatherItem.style";

const WeatherItem = ({ weatherData }) => {
  const dispatch = useDispatch();
  
  return (
    <Wrap>
      <WeatherIcon>
        <h2>{weatherData.city.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`}
          alt="icon"
          style={{ width: "60px" }}
        />
      </WeatherIcon>
      <WeatherInfo>
        <WeatherBlock>
          <Temp>{(weatherData.list[0].main.temp - 273.15).toFixed(0)}°C</Temp>
        </WeatherBlock>
        <WeatherBlock>
          <p>Влажность:</p>
          <Humidity>{weatherData.list[0].main.humidity}%</Humidity>
        </WeatherBlock>
        <WeatherBlock>
          <p>Давление:</p>
          <Pressure>{weatherData.list[0].main.pressure}мм</Pressure>
        </WeatherBlock>
        <WeatherBlock>
          <p>Ветер:</p>
          <Wind>{weatherData.list[0].wind.speed}м/с</Wind>
        </WeatherBlock>
      </WeatherInfo>
      <Delete>
        <button onClick={() => dispatch(deleteCity(weatherData.city.id))}>X</button>
      </Delete>
    </Wrap>
  );
};

export default WeatherItem;

// {weather}
