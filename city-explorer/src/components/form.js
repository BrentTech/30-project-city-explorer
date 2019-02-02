import React from "react";
import superagent from "superagent";

class Form extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
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
 
    let weather = await superagent.get(`${url}/weather`)
      .query({data: this.state.location});
      this.setState({ weather: weather.body });
      // console.log('weather:', this.state.weather)

      let movies = await superagent.get(`${url}/movies`)
      .query({data: this.state.location});
      this.setState({ movies: movies.body });
      // // console.log('movies:', this.state.movies)

      let yelp = await superagent.get(`${url}/yelp`)
      .query({data: this.state.location});
      this.setState({ yelp: yelp.body });
      // // console.log('yelp:', this.state.yelp)

      let meetups = await superagent.get(`${url}/meetups`)
      .query({data: this.state.location});
      this.setState({ meetups: meetups.body });
      // // console.log('meetups:', this.state.meetups)

      let trails = await superagent.get(`${url}/trails`)
      .query({data: this.state.location});
      this.setState({ trails: trails.body });
      // // console.log('trails:', this.state.trails)
    };

  render() {
    return (
      <>
      <form id="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search for a location</label>
        <input type="text" name="search" id="inputsearch" placeholder="Enter a location here" />
        <button>Explore!</button>
      </form>
      <div className="column-container">
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

const Weather = props => {
  return (
    <section>
      <h3>Results from the Dark Sky API</h3>
      <ul>
        {props.weather.map((forecast, idx) =>  (
          <li key={`weather-${idx}`}>The forecast for {forecast.time} is: {forecast.forecast}</li>
        ))}
      </ul>
  </section>
  );
}

const Yelp = props => {
  return (
    <section>
      <h3>Results from the Yelp API</h3>
      <ul>
        {props.yelp.map((yelp, idx) =>  (
          <li key={`yelp-${idx}`}>
            <a href={yelp.url}>{yelp.name}</a>
            <p>The average rating is {yelp.rating} out of 5 and the average cost is {yelp.price} out of 4</p>
            <img src={yelp.image_url}></img>
          </li>
        ))}
      </ul>
  </section>
  );
}

const Meetups = props => {
  return (
    <section>
      <h3>Results from the Meetup API</h3>
      <ul>
        {props.meetups.map((meet, idx) =>  (
          <li key={`meetups-${idx}`}>
            <a href={meet.link}>{meet.name}</a>
            <p>Hosted by: {meet.host}</p>
            <p>Created on: {meet.creation_date}</p>
          </li>
        ))}
      </ul>
  </section>
  );
}

const Movies = props => {
  return (
    <section>
      <h3>Results from the Movie DB API</h3>
      <ul>
        {props.movies.map((movie, idx) =>  (
          <li key={`movies-${idx}`}>
            <p><span>{movie.title}</span> was released on {movie.released_on}. Out of {movie.total_votes} total votes, {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity}.</p>
            <img src={movie.image_url}></img>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
  </section>
  );
}

const Trails = props => {
  return (
    <section>
      <h3>Results Fromthe Hiking Project API</h3>
      <ul>
        {props.trails.map((trail, idx) =>  (
          <li key={`trails-${idx}`}>
            <p>Hike Name:<a href={trail.trail_url}>{trail.name}</a>, Location: {trail.location}, Distance: {trail.length} miles</p>
            <p>On {trail.condition_date} at {trail.condition_time}, trail conditions were reported as: {trail.conditions}</p>
            <p>This trail has a rating of {trail.stars} stars (out of {trail.star_votes} votes)</p>
            <p>{trail.summary}</p>
          </li>
        ))}
      </ul>
  </section>
  );
}

export default Form;

// const Map = (props) => {
//   return (
//     <div>
//       <img id="map" className="hide" src={"https://maps.googleapis.com/maps/api/staticmap?center="+props.latitude+"%2c%20"+props.longitude+"&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk"} alt="Map of search query" />
//       <h2 className="query-placeholder">Here are the results for {props.location}</h2>
//       <section className="error-"></section>
//     </div>
//     )
// }

// export default Map;
