import React, { useState, useEffect } from "react";
import axios from "axios";
import MaryListItem from "./MaryCompItem";

export default function MaryTest() {
  const [loading, setLoading] = useState(true);
  const [filteredState, setFilterState] = useState([]);

  useEffect(() => {
    axios.get("/api/locations").then((response) => {
      setLoading(false);
      setFilterState(response.data);
    });
  }, []);

  return (
    <div>
      {loading === true ? (
        <h5>TEssssting...</h5>
      ) : (
        <MaryListItem locations={filteredState} />
        /*
        <ul>
          {filteredState.map((locations) => (
            <MaryListItem key={locations} locations={locations} />
          ))}
        </ul>
        */
      )}
    </div>
  );
}
