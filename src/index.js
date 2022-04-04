import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ResturantsProvider } from "./context/resturants_context";
import { FilterProvider } from "./context/filter_context";

ReactDOM.render(
  <ResturantsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ResturantsProvider>,
  document.getElementById("root")
);
