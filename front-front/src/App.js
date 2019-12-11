import React from "react";
import Router from "./Router";
import "./scss/App.scss";
import Nav from "./componentes/Auth/Nav";
// import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}
export default App;
