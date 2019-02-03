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
        </main>
      </React.Fragment>
    );
  }
}




export default App;