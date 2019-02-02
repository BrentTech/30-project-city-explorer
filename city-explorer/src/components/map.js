import React from 'react';
const dotenv = require('dotenv');


const Map = (props) => {
  return (
    <>
      <img id="map" className="hide" src={"https://maps.googleapis.com/maps/api/staticmap?center="+this.props.location.latitude+"%2c%20"+this.props.location.longitude+"&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk"} alt="Map of search query" />
      <h2 className="query-placeholder">Here are the results for {this.props.location.formatted_query}</h2>
    </>
    )
}

export default Map;
