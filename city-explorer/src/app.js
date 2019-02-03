import React from "react";
import Header from "./components/header.js";
import Form from "./components/form.js";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
        <Form />
        </main>
      </React.Fragment>
    );
  }
}



export default App;