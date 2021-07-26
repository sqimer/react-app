export const FETCH_NEWS = "FETCH_NEWS";
export const REQUEST_NEWS = "REQUEST_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const REQUEST_CITY = "REQUEST_CITY";
export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";
export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const SHOW_CITY = "SHOW_CITY";

const addNews = (profileNews) => {
  return {
    type: ADD_NEWS,
    payload: profileNews,
  };
};

const requestNews = () => {
  return {
    type: REQUEST_NEWS,
  };
};

const requestCity = (city) => {
  return {
    type: REQUEST_CITY,
    payload: city
  };
};

const deleteCity = (cityId) => {
  return {
    type: DELETE_CITY,
    payload: cityId,
  };
};

const requestByCoord = () => {
  return {
    type: REQUEST_WEATHER,
  };
};

export { requestNews, addNews, requestCity, deleteCity, requestByCoord };
