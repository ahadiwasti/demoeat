import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactPage, LandingPage, ErrorPage } from "./pages/eatapp.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/resturant" component={ContactPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
