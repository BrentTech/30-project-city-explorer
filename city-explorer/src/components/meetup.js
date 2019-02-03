import React from 'react';

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

export default Meetups;