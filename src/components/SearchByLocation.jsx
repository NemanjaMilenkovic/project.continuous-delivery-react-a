/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { useSelector, useDispatch } from "react-redux";
import { getLocations } from "../actions";
import { usStates } from "../usStates";

export default function ComboBox() {
  const [selectedState, updateState] = useState("");
  const [selectedCity, updateCity] = useState("");
  const [selectedHighway, updateHighway] = useState("");
  const [allCities, setCities] = useState([]);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  function populateCities() {
    const el = store.locations.filter((elem) => {
      if (elem.city) {
        return { name: elem.city };
      }
    });
    setCities([...allCities, ...el]);
  }

  function populateHighway() {
    const el = store.locations.filter((elem) => {
      if (elem.highway) {
        updateHighway(elem.highway);
      }
    });
  }

  useEffect(() => {
    dispatch(getLocations(selectedState));
    updateCity("");
    setCities([]); // this is where cities should be emptied - after the new state is selected
  }, [selectedState]);

  useEffect(() => {
    populateCities();
  }, [store]);

  useEffect(() => {
    dispatch(getLocations(selectedState, selectedCity));
    populateHighway();
  }, [selectedCity]);

  console.log("All????>>>>>>>>", selectedHighway);
  return (
    <div>
      <Autocomplete
        id="select-state"
        style={{ width: 300, display: "inline-block", margin: "1em" }}
        options={usStates}
        getOptionLabel={(state) => {
          if (state.name) {
            updateState(state.abbr);
          }
          return state.name;
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
        options={allCities}
        getOptionLabel={(allCities) => {
          if (allCities.city) {
            updateCity(allCities.city);
          }
          return allCities.city;
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
          const matches = match(option.city, inputValue);
          const parts = parse(option.city, matches);

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
        options={[selectedHighway]}
        getOptionLabel={(selectedHighway) => {
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
          const matches = match(option, inputValue);
          const parts = parse(option, matches);
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
