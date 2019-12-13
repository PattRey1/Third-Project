import React from "react";
import Router from "./Router";
import "./scss/App.scss";
import Nav from "./componentes/common/Nav";
import Footer from "./componentes/common/Footer";
// import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}
export default App;
