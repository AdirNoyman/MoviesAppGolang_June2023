import React from 'react';
import ticket from '../images/movie_tickets.jpg';

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Find a movie to watch tonight</h2>
        <hr />
        <img src={ticket} alt="movie tickets" />
      </div>
    </div>
  );
};

export default Home;
