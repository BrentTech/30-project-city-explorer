import React from "react";
import superagent from "superagent";
import Map from "./map.js"
import Weather from "./weather.js"
import Yelp from "./yelp.js"
import Meetups from "./meetup.js"
import Movies from "./movies.js"
import Trails from "./trails.js"

class Form extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        mapClassName: 'hide',
        divClassName: 'column-container hide',
        location : {},
        weather : [],
        movies: [],
        yelp: [],
        meetups: [],
        trails: []
      }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const url = 'https://city-explorer-backend.herokuapp.com'
    let location = await superagent.get(`${url}/location?data=${e.target.inputsearch.value}`);
    this.setState({location: location.body})
    // console.log('location = ', this.state.location)
    let weather = await superagent.get(`${url}/weather`)
      .query({data: this.state.location});
    this.setState({ weather: weather.body });
    
    let movies = await superagent.get(`${url}/movies`)
      .query({data: this.state.location});
    this.setState({ movies: movies.body });
    
    let yelp = await superagent.get(`${url}/yelp`)
      .query({data: this.state.location});
    this.setState({ yelp: yelp.body });
    
    let meetups = await superagent.get(`${url}/meetups`)
      .query({data: this.state.location});
    this.setState({ meetups: meetups.body });
    
    let trails = await superagent.get(`${url}/trails`)
      .query({data: this.state.location});
    this.setState({ trails: trails.body });
    this.setState({mapClassName: ''});
    this.setState({divClassName: 'column-container'});
    };

  render() {
    return (
      <>
      <Forms handleSubmit={this.handleSubmit} />
          <Map location={this.state.location} className={this.state.mapClassName}/> 
          <div className={this.state.divClassName}>
          <Weather weather={this.state.weather} />
          <Yelp yelp={this.state.yelp} />
          <Meetups meetups={this.state.meetups} />
          <Movies movies={this.state.movies} />
          <Trails trails={this.state.trails} />
          </div>
      </>
    );
  }
};

const Forms = props => {
  return (
  <form id="search-form" onSubmit={props.handleSubmit}>
    <label htmlFor="search">Search for a location</label>
    <input type="text" name="search" id="inputsearch" placeholder="Enter a location here" />
    <button>Explore!</button>
  </form>
  )
}
  
  export default Form;
