import { getMarkers, getInputs } from "../utils";

export function getLocations() {
  return async (dispatch) => {
    const locations = await getMarkers();
    dispatch(setLocations(locations));
  };
}

export function getCities() {
  return async (dispatch) => {
    const cities = await getInputs();
    dispatch(setCities(cities));
  };
}

function setCities(cities) {
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
