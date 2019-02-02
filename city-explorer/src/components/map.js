import React from 'react';
const dotenv = require('dotenv');


const Map = (props) => {
  return (
    <div>
      <img id="map" className="" src={props.source} alt="Map of search query" />
      <h2 className="query-placeholder">Here are the results for {props.location}</h2>
      <section className="error-"></section>
    </div>
    )
}

export default Map;
