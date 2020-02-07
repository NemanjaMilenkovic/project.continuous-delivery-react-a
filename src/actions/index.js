import { getMarkers, getInputs } from "../utils";

export function getLocations(selectedState, selectedCity) {
  return async (dispatch) => {
    const locations = await getMarkers(selectedState, selectedCity);
    dispatch(setLocations(locations));
  };
}

export function getLocations2() {
  console.log("here-get locations 2");
  return async (dispatch) => {
    const cities = await getMarkers();
    dispatch(setCities(cities));
  };
}

export function getCities() {
  return async (dispatch) => {
    const cities = await getInputs();
    dispatch(setCities(cities));
  };
}

export function setCities(cities) {
  console.log("called!");
  return {
    type: "SET_CITIES",
    cities,
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}
