import React from "react";
import Header from "./components/header.js";
import Form from "./components/form.js";
import Map from "./components/map.js";
import superagent from "superagent";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
        <Form updateLocation={this.updateLocation} />
        {/* <Page /> */}
        {/* <Map location={this.state.location.formatted_query} longitude={this.state.location.longitude}  latitude={this.state.location.latitude} /> */}
        </main>
      </React.Fragment>
    );
  }
}



export default App;