import React from "react";
import ReactDOM from "react-dom";
import './design/index.css';
import App from './app';
import { BrowserRouter } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);