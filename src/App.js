import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global";

import "./App.css";
import Home from "./pages/Home/Home";
import Auth from "./pages/Login/Auth";
import News from "./pages/News/News";
import Weather from "./pages/Weather/Weather";
import Profile from "./pages/Profile/Profile";

const App = () => {
  useEffect(() => {
    localStorage.setItem("jwt-token", false);
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Auth} />
          <Route path="/news" component={News} />
          <Route path="/home" exact component={Home} />
          <AuthRoute path="/weather" component={<Weather />} />
          <AuthRoute path="/profile" component={<Profile />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;

const AuthRoute = ({ path, component, exact }) => {
  if (!JSON.parse(localStorage.getItem("jwt-token")))
    return <Redirect to={"/login"} />;

  return (
    <Route path={path} exact={exact}>
      {component}
    </Route>
  );
};
