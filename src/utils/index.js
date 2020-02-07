import axios from "axios";
// import ComboBox, { getSelectedState } from "../components/SearchByLocation";

export async function getMarkers(selectedState, selectedCity) {
  // console.log("ComboBox.selectedState :", ComboBox.getSelectedState());
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing

  const markers = locations.map((l) => {
    if (!selectedCity && l.state === selectedState) {
      return {
        city: l.city,
        state: l.state,
        highway: l.highway,
        position: {
          lat: l.latitude,
          lng: l.longitude,
        },
        key: l.name,
        defaultAnimation: 2,
      };
    }
    if (l.state === selectedState && selectedCity === l.city) {
      return {
        city: l.city,
        state: l.state,
        highway: l.highway,
        position: {
          lat: l.latitude,
          lng: l.longitude,
        },
        key: l.name,
        defaultAnimation: 2,
      };
    }
    return [];
  });
  return markers;
}

export async function getInputs() {
  const { data: locations } = await axios.get("/api/locations");
  const citiesAndHighways = locations.map((l) => {
    return {
      city: l.city,
      highway: l.highway,
    };
  });
  return citiesAndHighways;
}
