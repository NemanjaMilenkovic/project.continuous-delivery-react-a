/* eslint-disable no-use-before-define */

// - getOptionLabel is updating the state 3 times
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { Provider, useSelector } from "react-redux";

export default function ComboBox() {
  const [selectedState, updateState] = useState("");
  const [selectedCity, updateCity] = useState("");
  const [selectedHighway, updateHighway] = useState("");
  const [allCities, setCities] = useState([]);
  const [allAbbr, setAbbr] = useState("");

  // function getSelectedState() {
  //   return selectedState;
  // }

  let cities = [];

  const store = useSelector((store) => store);

  useEffect(() => {
    async function populateCities(state) {
      state = "AL";
      const cities = await store.locations.filter((el) => {
        /*
        if (el.state === state) {
          cities.push({ city: el.city });
        }*/
        return el.state === state;
      });
      console.log("Selected cities", cities);
      setCities(cities);
      return cities;
    }
    const cityUpdate = populateCities();
    setCities(cityUpdate);
  }, []);

  // function populateCities(state) {
  //   cities = store.locations.filter((el) => {
  //     if (el.state === state) {
  //       return { name: el.city };
  //     }
  //   });
  //   console.log("Selected cities", cities);
  //   // setCities(cities);
  //   return cities;
  // }

  return (
    <div>
      <div className="cities-list">
        <ul>
          {cities.map((city, index) => {
            return (
              <div key={index}>
                Ahhh<li key={index}>{city}</li>
              </div>
            );
          })}
        </ul>
      </div>

      <Autocomplete
        id="select-state"
        style={{ width: 300, display: "inline-block", margin: "1em" }}
        options={usStates}
        getOptionLabel={(state) => {
          if (state.name) {
            updateState(state.abbr);
            // populateCities(state.abbr);
          }
          return selectedState;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match(option.name, inputValue);

          const parts = parse(option.name, matches);

          return (
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}
      />
      <Autocomplete
        id="select-city"
        disabled={!selectedState}
        style={{ width: 300, display: "inline-block", margin: "1em" }}
        options={cities}
        getOptionLabel={(cities) => {
          // if (city.city) {
          //   updateCity(city.city);
          // }
          return cities.name;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);

          return (
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}
      />
      <Autocomplete
        id="select-highway"
        disabled={!selectedCity}
        style={{ width: 300, display: "inline-block", margin: "1em" }}
        options={usStates}
        getOptionLabel={(highway) => {
          if (highway.name) {
            updateHighway(highway.name);
          }
          return selectedHighway;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Highway"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);
          return (
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}
const usStates = [
  {
    abbr: "AL",
    name: "Alabama",
    capital: "Montgomery",
    lat: "32.361538",
    long: "-86.279118",
  },
  {
    abbr: "AK",
    name: "Alaska",
    capital: "Juneau",
    lat: "58.301935",
    long: "-134.419740",
  },
  {
    abbr: "AZ",
    name: "Arizona",
    capital: "Phoenix",
    lat: "33.448457",
    long: "-112.073844",
  },
  {
    abbr: "AR",
    name: "Arkansas",
    capital: "Little Rock",
    lat: "34.736009",
    long: "-92.331122",
  },
  {
    abbr: "CA",
    name: "California",
    capital: "Sacramento",
    lat: "38.555605",
    long: "-121.468926",
  },
  {
    abbr: "CO",
    name: "Colorado",
    capital: "Denver",
    lat: "39.7391667",
    long: "-104.984167",
  },
  {
    abbr: "CT",
    name: "Connecticut",
    capital: "Hartford",
    lat: "41.767",
    long: "-72.677",
  },
  {
    abbr: "DE",
    name: "Delaware",
    capital: "Dover",
    lat: "39.161921",
    long: "-75.526755",
  },
  {
    abbr: "FL",
    name: "Florida",
    capital: "Tallahassee",
    lat: "30.4518",
    long: "-84.27277",
  },
  {
    abbr: "GA",
    name: "Georgia",
    capital: "Atlanta",
    lat: "33.76",
    long: "-84.39",
  },
  {
    abbr: "HI",
    name: "Hawaii",
    capital: "Honolulu",
    lat: "21.30895",
    long: "-157.826182",
  },
  {
    abbr: "ID",
    name: "Idaho",
    capital: "Boise",
    lat: "43.613739",
    long: "-116.237651",
  },
  {
    abbr: "IL",
    name: "Illinois",
    capital: "Springfield",
    lat: "39.783250",
    long: "-89.650373",
  },
  {
    abbr: "IN",
    name: "Indiana",
    capital: "Indianapolis",
    lat: "39.790942",
    long: "-86.147685",
  },
  {
    abbr: "IA",
    name: "Iowa",
    capital: "Des Moines",
    lat: "41.590939",
    long: "-93.620866",
  },
  {
    abbr: "KS",
    name: "Kansas",
    capital: "Topeka",
    lat: "39.04",
    long: "-95.69",
  },
  {
    abbr: "KY",
    name: "Kentucky",
    capital: "Frankfort",
    lat: "38.197274",
    long: "-84.86311",
  },
  {
    abbr: "LA",
    name: "Louisiana",
    capital: "Baton Rouge",
    lat: "30.45809",
    long: "-91.140229",
  },
  {
    abbr: "ME",
    name: "Maine",
    capital: "Augusta",
    lat: "44.323535",
    long: "-69.765261",
  },
  {
    abbr: "MD",
    name: "Maryland",
    capital: "Annapolis",
    lat: "38.972945",
    long: "-76.501157",
  },
  {
    abbr: "MA",
    name: "Massachusetts",
    capital: "Boston",
    lat: "42.2352",
    long: "-71.0275",
  },
  {
    abbr: "MI",
    name: "Michigan",
    capital: "Lansing",
    lat: "42.7335",
    long: "-84.5467",
  },
  {
    abbr: "MN",
    name: "Minnesota",
    capital: "Saint Paul",
    lat: "44.95",
    long: "-93.094",
  },
  {
    abbr: "MS",
    name: "Mississippi",
    capital: "Jackson",
    lat: "32.320",
    long: "-90.207",
  },
  {
    abbr: "MO",
    name: "Missouri",
    capital: "Jefferson City",
    lat: "38.572954",
    long: "-92.189283",
  },
  {
    abbr: "MT",
    name: "Montana",
    capital: "Helana",
    lat: "46.595805",
    long: "-112.027031",
  },
  {
    abbr: "NE",
    name: "Nebraska",
    capital: "Lincoln",
    lat: "40.809868",
    long: "-96.675345",
  },
  {
    abbr: "NV",
    name: "Nevada",
    capital: "Carson City",
    lat: "39.160949",
    long: "-119.753877",
  },
  {
    abbr: "NH",
    name: "New Hampshire",
    capital: "Concord",
    lat: "43.220093",
    long: "-71.549127",
  },
  {
    abbr: "NJ",
    name: "New Jersey",
    capital: "Trenton",
    lat: "40.221741",
    long: "-74.756138",
  },
  {
    abbr: "NM",
    name: "New Mexico",
    capital: "Santa Fe",
    lat: "35.667231",
    long: "-105.964575",
  },
  {
    abbr: "NY",
    name: "New York",
    capital: "Albany",
    lat: "42.659829",
    long: "-73.781339",
  },
  {
    abbr: "NC",
    name: "North Carolina",
    capital: "Raleigh",
    lat: "35.771",
    long: "-78.638",
  },
  {
    abbr: "ND",
    name: "North Dakota",
    capital: "Bismarck",
    lat: "48.813343",
    long: "-100.779004",
  },
  {
    abbr: "OH",
    name: "Ohio",
    capital: "Columbus",
    lat: "39.962245",
    long: "-83.000647",
  },
  {
    abbr: "OK",
    name: "Oklahoma",
    capital: "Oklahoma City",
    lat: "35.482309",
    long: "-97.534994",
  },
  {
    abbr: "OR",
    name: "Oregon",
    capital: "Salem",
    lat: "44.931109",
    long: "-123.029159",
  },
  {
    abbr: "PA",
    name: "Pennsylvania",
    capital: "Harrisburg",
    lat: "40.269789",
    long: "-76.875613",
  },
  {
    abbr: "RI",
    name: "Rhode Island",
    capital: "Providence",
    lat: "41.82355",
    long: "-71.422132",
  },
  {
    abbr: "SC",
    name: "South Carolina",
    capital: "Columbia",
    lat: "34.000",
    long: "-81.035",
  },
  {
    abbr: "SD",
    name: "South Dakota",
    capital: "Pierre",
    lat: "44.367966",
    long: "-100.336378",
  },
  {
    abbr: "TN",
    name: "Tennessee",
    capital: "Nashville",
    lat: "36.165",
    long: "-86.784",
  },
  {
    abbr: "TX",
    name: "Texas",
    capital: "Austin",
    lat: "30.266667",
    long: "-97.75",
  },
  {
    abbr: "UT",
    name: "Utah",
    capital: "Salt Lake City",
    lat: "40.7547",
    long: "-111.892622",
  },
  {
    abbr: "VT",
    name: "Vermont",
    capital: "Montpelier",
    lat: "44.26639",
    long: "-72.57194",
  },
  {
    abbr: "VA",
    name: "Virginia",
    capital: "Richmond",
    lat: "37.54",
    long: "-77.46",
  },
  {
    abbr: "WA",
    name: "Washington",
    capital: "Olympia",
    lat: "47.042418",
    long: "-122.893077",
  },
  {
    abbr: "WV",
    name: "West Virginia",
    capital: "Charleston",
    lat: "38.349497",
    long: "-81.633294",
  },
  {
    abbr: "WI",
    name: "Wisconsin",
    capital: "Madison",
    lat: "43.074722",
    long: "-89.384444",
  },
  {
    abbr: "WY",
    name: "Wyoming",
    capital: "Cheyenne",
    lat: "41.145548",
    long: "-104.802042",
  },
];
