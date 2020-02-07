import React from "react";

export default function RenderResults(props) {
  console.log(props.locations);
  return (
    <div>
      <div className="id-name-state">
        <li>{props.locations.id}</li>
        <li>{props.locations.name}</li>
        <li>{props.locations.state}</li>
        <li>{props.locations.city}</li>
        <li>{props.locations.store_id}</li>
        <li>{props.locations.tel}</li>
        <li>{props.locations.type}</li>
        <li>{props.locations.zip_code}</li>
        <div></div>
      </div>
    </div>
  );
}
