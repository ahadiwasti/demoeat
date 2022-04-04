import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/resturants_reducer";
import { resturants_url as url } from "../utils/constants";
import {
  GET_RESTURANTS_BEGIN,
  GET_RESTURANTS_SUCCESS,
  GET_RESTURANTS_ERROR,
} from "../actions";

const initialState = {
  loading: false,
  error: false,
  resturant: {},
};

const ResturantsContext = React.createContext();

export const ResturantsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchResturants = async (url) => {
    try {
      dispatch({ type: GET_RESTURANTS_BEGIN });
      const response = await axios.get(url);
      dispatch({ type: GET_RESTURANTS_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: GET_RESTURANTS_ERROR, payload: error });
    }
  };

  useEffect(() => {
    fetchResturants(url);
  }, []);

  return (
    <ResturantsContext.Provider value={{ ...state }}>
      {children}
    </ResturantsContext.Provider>
  );
};
// make sure use
export const useResturantsContext = () => {
  return useContext(ResturantsContext);
};
