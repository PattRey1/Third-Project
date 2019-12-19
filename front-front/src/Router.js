import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./componentes/Auth/Login";
import Signup from "./componentes/Auth/Signup";
import Blog from "./views/Blog";
import Eroteca from "./views/Eroteca";
import Event from "./views/Event";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Article from "./views/Article";
import CreateEvent from "./views/CreateEvent";
import CreatePost from "./views/CreatePost";

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/articulo">
      <Article />
    </Route>
    <Route path="/eroteca">
      <Eroteca />
    </Route>
    <Route path="/event">
      <Event />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/creaevento">
      <CreateEvent />
    </Route>
    <Route path="/creapost">
      <CreatePost />
    </Route>
  </Switch>
);

export default Router;
