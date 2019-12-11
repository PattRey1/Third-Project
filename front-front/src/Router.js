import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./componentes/Auth/Login";
import Signup from "./componentes/Auth/Signup";
import Blog from "./views/Blog";
import Eroteca from "./views/Eroteca";
import Event from "./views/Event";
import Home from "./views/Home";
import Article from "./views/Article";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/blog">
        <Article />
      </Route>
      <Route exact path="/eroteca">
        <Eroteca />
      </Route>
      <Route exact path="/event">
        <Event />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
