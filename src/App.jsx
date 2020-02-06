import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./containers/Map";
import SearchByLocation from "./components/SearchByLocation";
import { Provider, useSelector } from "react-redux";
// const { store } = require("./index");

export default function App() {
  const store = useSelector((store) => store);
  console.log("store :", store);
  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>:)</h2>
      </div>
      <SearchByLocation />
      <Map id="map" />
    </div>
  );
}
