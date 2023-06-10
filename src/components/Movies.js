import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: 'Highlander',
        release_date: '1986-03-07',
        duration: 116,
        mpaa_rating: 'R',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit, libero illo reiciendis quasi porro quidem cumque veniam labore iusto sit? Quas voluptatibus dolor alias hic ex veritatis nihil sequi!',
      },
      {
        id: 1,
        title: 'Highlander 2',
        release_date: '1999-03-07',
        duration: 116,
        mpaa_rating: 'R',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit, libero illo reiciendis quasi porro quidem cumque veniam labore iusto sit? Quas voluptatibus dolor alias hic ex veritatis nihil sequi!',
      },
      {
        id: 1,
        title: 'Raiders Of The Lost Ark',
        release_date: '1981-02-10',
        duration: 115,
        mpaa_rating: 'PG-30',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, velit, libero illo reiciendis quasi porro quidem cumque veniam labore iusto sit? Quas voluptatibus dolor alias hic ex veritatis nihil sequi!',
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
