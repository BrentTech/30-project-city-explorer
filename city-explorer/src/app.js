import React from "react";
import Header from "./components/header.js";
import Form from "./components/form.js"
import Map from "./components/map.js";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {}
    };
  }

  updateLocation = (location) => {
    this.setState({location})
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
        <Form updateLocation={this.updateLocation} />
        <Map location={this.state.location.formatted_query} longitude={this.state.location.longitude} source={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.location.latitude}%2c%20${this.state.location.longitude}zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA2I9BtNL8mycQZUqZwKflHOAn2GYtrgIU`} latitude={this.state.location.latitude} />
        </main>
      </React.Fragment>
    );
  }
}

const Page = (props) => {
  return(
    <div className="column-container">
    </div>
  )
}

const Column = (props) => {
  return (
    <section>
      <h3></h3>
      <ul>
        <li></li>
      </ul>
    </section>
  )
}

export default App;