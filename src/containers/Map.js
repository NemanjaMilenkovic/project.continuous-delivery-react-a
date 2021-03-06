import { connect } from "react-redux";
import Map from "../components/Map";
import { getLocations, getCities } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => {
      const res = getLocations();
      dispatch(res);
    },
    getCities: () => {
      const res = getCities();
      dispatch(res);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    cities: state.cities, // not sure
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
