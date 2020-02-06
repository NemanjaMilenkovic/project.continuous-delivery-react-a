import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./containers/Map";
import SearchByLocation from "./components/SearchByLocation";

export default function App() {
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
