import initialState from "./initialState";
import { ADD_CITY, DELETE_CITY } from "./action";

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        weather: [...state.weather, action.payload],
      };

    case DELETE_CITY:
      return {
        ...state,
        weather: state.weather.filter(
          (item) => item.city.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default weatherReducer;
