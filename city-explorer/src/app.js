import React from "react";
import Header from "./components/header.js";
import Form from "./components/form.js";
import Map from "./components/map.js";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {}
    };
  }

  updateLocation(location) {
    this.setState({location})
    console.log('new state', this.state.location)
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form updateLocation={this.updateLocation} />
        <Map location={this.state.location} />
        <main>
        </main>
      </React.Fragment>
    );
  }
}

export default App;