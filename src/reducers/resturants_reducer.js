import {
  GET_RESTURANTS_BEGIN,
  GET_RESTURANTS_SUCCESS,
  GET_RESTURANTS_ERROR,
} from "../actions";

const resturants_reducer = (state, action) => {
  if (action.type === GET_RESTURANTS_BEGIN) {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }
  if (action.type === GET_RESTURANTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: false,
      resturant: action.payload,
    };
  }
  if (action.type === GET_RESTURANTS_ERROR) {
    return {
      ...state,
      loading: false,
      error: true,
    };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }
};
export default resturants_reducer;
