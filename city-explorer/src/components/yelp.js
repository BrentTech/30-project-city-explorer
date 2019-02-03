import React from 'react';

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

export default Yelp;