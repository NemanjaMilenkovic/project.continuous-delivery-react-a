import React, { useEffect, useState, Profiler } from "react";
import axios from "axios";
import MaryTest from "./MaryComp";
import "../index.css";
import RenderResults from "./RenderRes";

export default function MaryListItem(props) {
  /*console.log(
    props.locations.map((obj) => {
      return obj;
    })
  );
  */

  const [selectedCityNames, setCityNames] = useState([]);
  const [highways, setHighways] = useState([]);
  //WORK IN PROGRESS
  const [selectedVal, setVal] = useState("");
  const [whatevs, setWhatevs] = useState([]);
  //WIP END

  let cities = [];
  let cityNames = [];

  function citiesFilter() {
    cityNames = cities.map((obj) => {
      return obj.city;
    });
  }

  let allHighwayNames = props.locations.map((obj) => {
    return obj.highway;
  });

  allHighwayNames.sort();

  let allCityNames = props.locations.map((obj) => {
    return obj.city;
  });

  allCityNames.sort();

  function cityByState(name) {
    props.locations.map((obj) => {
      if (obj.state === name) {
        //console.log(obj);
        cities.push(obj);
        return obj;
      }
    });
  }

  //IMPORTANT CODE
  const cityByState2 = (name) => {
    const resultsArr = [];
    props.locations.map((obj) => {
      if (obj.state === name) {
        resultsArr.push(obj.city);
      }
    });

    allCityNames = resultsArr;
    return allCityNames;
  };

  //IMPORTANT CODE

  console.log("state", selectedCityNames);

  const highwayByCity = (name) => {
    const resultsArr = [];
    props.locations.map((obj) => {
      if (obj.city === name) {
        resultsArr.push(obj.highway);
      }
    });
    allHighwayNames = resultsArr;
    return allHighwayNames;
  };

  //selectedWhatevs
  let selectedWhatevs = "";

  const selectionFunc = (name) => {
    const resultsArr = [];
    props.locations.map((obj) => {
      if (obj.state === name) {
        console.log("You selected a State");
        resultsArr.push(obj);
      }
      if (obj.city === name) {
        console.log("You selected a City");
        resultsArr.push(obj);
      }
      if (obj.highway === name) {
        console.log("You selected a Highway");
        resultsArr.push(obj);
      }
    });

    console.log("Results", resultsArr);
    selectedWhatevs = resultsArr;
    return resultsArr;
  };

  return (
    /*
    <div>
      <div className="id-name-state">
        <li>{props.locations.id}</li>
        <li>{props.locations.name}</li>
        <li>{props.locations.state}</li>
      </div>
      <div></div>
      <div className="city-highway-exit">
        <li>{props.locations.city}</li>
        <li>{props.locations.highway}</li>
        <li>{props.locations.exit_number}</li>
      </div>
    </div>
    */

    <div className="Filter">
      <h4>Search stops by location.</h4>

      <select
        className="select"
        onBlur={(e) => {
          cities = [];
          cityByState(e.target.value);
          //console.log("cities", cities);
          //most important line of code here:
          //alter allCityNames with cityByState2
          cityByState2(e.target.value);
          //then setCityNames STATE to allCityNames
          setCityNames(allCityNames);
          setVal(e.target.value);
          selectionFunc(e.target.value);
          setWhatevs(selectedWhatevs);
        }}
      >
        <option value="default">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>

      <select
        className="select"
        onBlur={(e) => {
          //second most important line of code...find city's highways
          highwayByCity(e.target.value);
          //console.log(allHighwayNames);
          //then set the highway state to match that
          setHighways(allHighwayNames);
          setVal(e.target.value);
          selectionFunc(e.target.value);
        }}
      >
        <option value="City">City</option>
        {selectedCityNames.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>

      <select
        className="select"
        onBlur={(e) => {
          setVal(e.target.value);
          selectionFunc(e.target.value);
        }}
      >
        <option value="Highway">Highway</option>
        {highways.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>
      <div>Test Section</div>
      <div>You selected: {selectedVal}</div>
      <div>
        <ul>
          Results:
          {whatevs.map((val, key) => {
            return <RenderResults key={val} locations={val} />;
          })}
        </ul>
      </div>
    </div>
  );
}
