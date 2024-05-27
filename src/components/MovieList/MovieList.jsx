import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { getTrendingMovies } from '../../api/tmdb';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      try {
        const getMovies = await getTrendingMovies();
        console.log(getMovies);
        setMovies(getMovies.results);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    }

    fetchTrendMovies();
  }, []);

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-6xl my-10 font-bold">Trending today</h1>
      {loading && (
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper mx-auto"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {!loading && !error && (
        <ul className="flex gap-5 flex-wrap bg-violet-100 p-8 rounded-xl">
          {movies.map(movie => (
            <li
              key={movie.id}
              className="flex-auto basis-1/5 bg-white rounded-lg"
            >
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
