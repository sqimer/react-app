import React, { useEffect, useState } from "react";
import { Wrap } from "./weather.style";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar";
import WeatherList from "../../components/WeatherList/WeatherList";
import WeatherByCoords from "../../components/WeatherList/WeatherByCoords";
import { requestCity, requestByCoord } from "../../redux/action";

const Weather = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const weatherList = useSelector((item) => item.weatherReducer.weather);
  const weatherByCoords = useSelector(item => item.newsReducer.coordCity);

  const findCity = (e) => {
    e.preventDefault();
    dispatch(
      requestCity({
        city: value,
      })
    );
    setValue("");
  };

  useEffect(() => {
    dispatch(requestByCoord())
  }, [dispatch]);

  return (
    <Wrap>
      <Navbar />
      <h1>Прогноз погоды</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Введите название города"
      />
      <button onClick={findCity}>Найти</button>
      <WeatherByCoords weatherByCoords={weatherByCoords} />
      <WeatherList weather={weatherList} />
    </Wrap>
  );
};

export default Weather;
