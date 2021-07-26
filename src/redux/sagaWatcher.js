import { call, put, takeEvery, all } from "@redux-saga/core/effects";
import { API_KEY } from "../config";
import {
  REQUEST_NEWS,
  REQUEST_CITY,
  FETCH_NEWS,
  ADD_CITY,
  REQUEST_WEATHER,
  SHOW_CITY,
} from "./action";

export function* sagaWatcher() {
  yield all([
    takeEvery(REQUEST_NEWS, sagaWorker),
    takeEvery(REQUEST_CITY, sagaAddCity),
    takeEvery(REQUEST_WEATHER, sagaGetByCoords),
  ]);
}

// News
function* sagaWorker() {
  try {
    const payload = yield call(fetchNews);
    yield put({ type: FETCH_NEWS, payload });
  } catch (e) {
    put(alert(`Error: ${e}`));
  }
}

async function fetchNews() {
  const result = await fetch(
    "http://newsapi.org/v2/top-headlines?country=gb&apiKey=1779fe95e9d94bc883adb6f2719dc022"
  );
  return result.json();
}

// Weather
function* sagaAddCity(city) {
  try {
    const payload = yield call(fetchWeather, city);
    yield put({ type: ADD_CITY, payload });
  } catch (error) {
    alert(error);
  }
}

async function fetchWeather({ payload }) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${payload.city}`
  );
  return result.json();
}

// Get By Coords
function* sagaGetByCoords() {
  try {
    const payload = yield call(getCurrentPosition);
    yield put({ type: SHOW_CITY, payload });
  } catch (error) {
    alert(error);
  }
}

function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve([position.coords.latitude, position.coords.longitude]);
    });
  }).then(res => getCoordinates(res[0], res[1]))
  
}

async function getCoordinates(lat, lon) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lat=${lat}&lon=${lon}`
  )
  return result.json();
}
