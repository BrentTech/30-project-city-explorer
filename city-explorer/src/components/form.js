import React from "react";
import superagent from "superagent";
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const url = 'https://city-explorer-backend.herokuapp.com'
    let data = await superagent.get(`${url}/location?data=${e.target.inputsearch.value}`);
    
    this.props.updateLocation(data.body);
    };


  render() {
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search for a location</label>
        <input type="text" name="search" id="inputsearch" placeholder="Enter a location here" />
        <button>Explore!</button>
      </form>
    );
  }
};

export default Form;
