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
        <li>{props.locations.zip_code}</li>
        <li>
          <strong>Store Id: </strong>
          {props.locations.store_id}
        </li>
        <li>
          <strong>Tel:</strong> {props.locations.tel}
        </li>
        <li>{props.locations.type}</li>

        <div>
          <br></br>
        </div>
      </div>
    </div>
  );
}
