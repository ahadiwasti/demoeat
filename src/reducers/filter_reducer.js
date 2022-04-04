import {
  LOAD_RESTURANTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  GET_SINGLE_RESTURANT_BEGIN,
  GET_SINGLE_RESTURANT_SUCCESS,
  GET_SINGLE_RESTURANT_ERROR,
} from "../actions";

import { getdatedtimes } from "../utils/helpers";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_RESTURANTS) {
    return {
      ...state,
      loading: false,
      error: false,
      all_solts: action.payload,
      // filtered_solts: [...action.payload]
    };
  }
  if (action.type === UPDATE_FILTERS) {
    if (action.payload.name === "Date") {
      let times = getdatedtimes(state.all_solts, action.payload.value);
      console.log(times);
      return {
        ...state,
        loading: false,
        error: false,
        time_slots: times,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        loading: false,
        error: false,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    }
  }
  if (action.type === GET_SINGLE_RESTURANT_BEGIN) {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }
  if (action.type === GET_SINGLE_RESTURANT_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: false,
      available_slots: action.payload,
    };
  }
  if (action.type === GET_SINGLE_RESTURANT_ERROR) {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      loading: false,
      error: false,
      selectedDate: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
