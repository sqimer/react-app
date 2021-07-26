import initialState from "./initialState";
import { FETCH_NEWS, ADD_NEWS, SHOW_CITY } from "./action";

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case ADD_NEWS:
      return {
        ...state,
        profileNews: [...state.profileNews, action.payload],
      };

      case SHOW_CITY:
        return {
          ...state,
          coordCity: [action.payload],
        }; 
    default:
      return state;
  }
};

export default newsReducer;
