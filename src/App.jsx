import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./containers/Map";
<<<<<<< HEAD
import SearchByLocation from "./components/SearchByLocation";
import { Provider, useSelector } from "react-redux";
// const { store } = require("./index");
=======
//import SearchByLocation from "./components/SearchByLocation";
import MaryTest from "./components/MaryComp";
>>>>>>> 5b9c41b1bbef2e882c34416a3296583e67b8ae3a

export default function App() {
  //

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>:)</h2>
      </div>

      <Map id="map" />
      <MaryTest />
    </div>
  );
}
