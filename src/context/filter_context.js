import React, { useEffect, useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_RESTURANTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  GET_SINGLE_RESTURANT_BEGIN,
  GET_SINGLE_RESTURANT_SUCCESS,
  GET_SINGLE_RESTURANT_ERROR,
} from "../actions";
import { useResturantsContext } from "./resturants_context";
import { resturants_single_url as url } from "../utils/constants";

const initialState = {
  filtered_solts: [],
  time_slots: [],
  loading: false,
  error: false,
  available_slots: [],
  selectedDate: "",
  all_solts: [],
  filters: {
    Pax: 2,
    Date: "DEFAULT",
    Time: "DEFAULT",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { resturant } = useResturantsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_RESTURANTS, payload: resturant });
  }, [resturant]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // filters[e.target.name]= e.target.value
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const selectDate = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e });

    // e.preventDefault();
    // let value = e.target.value;
    // console.log(value);
  };
  const callFilters = async (e) => {
    e.preventDefault();
    try {
      if (
        state.filters.Date !== "DEFAULT" &&
        state.filters.Time !== "DEFAULT"
      ) {
        dispatch({ type: GET_SINGLE_RESTURANT_BEGIN });
        const response = await axios.get(
          url +
            "desired_time_and_date=" +
            state.filters.Date +
            "T" +
            state.filters.Time +
            "&covers=" +
            state.filters.Pax
        );
        dispatch({
          type: GET_SINGLE_RESTURANT_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_RESTURANT_ERROR, payload: error });
    }
  };
  return (
    <FilterContext.Provider
      value={{ ...state, updateFilters, callFilters, selectDate }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
