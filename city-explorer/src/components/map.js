import React from 'react';
const dotenv = require('dotenv');


const Map = (props) => {
  return (
    <div>
      <img id="map" className="hide" src={"https://maps.googleapis.com/maps/api/staticmap?center="+props.latitude+"%2c%20"+props.longitude+"&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk"} alt="Map of search query" />
      <h2 className="query-placeholder">Here are the results for {props.location}</h2>
      <section className="error-"></section>
    </div>
    )
}

export default Map;
