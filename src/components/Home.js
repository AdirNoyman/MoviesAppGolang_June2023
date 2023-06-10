import React from 'react';
import ticket from '../images/movie_tickets.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Find a movie to watch tonight</h2>
        <hr />
        <Link to="/movies">
          <img src={ticket} alt="movie tickets" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
