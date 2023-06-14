import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: 'Highlander',
      release_date: '1986-03-07',
      duration: 116,
      mpaa_rating: 'R',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit, libero illo reiciendis quasi porro quidem cumque veniam labore iusto sit? Quas voluptatibus dolor alias hic ex veritatis nihil sequi!',
    };

    setMovie(myMovie);
  }, [id]);

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small>
        <em>
          {movie.release_date}, {movie.duration} minutes, Rated{' '}
          {movie.mpaa_rating}{' '}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
