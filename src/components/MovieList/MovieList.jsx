import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';

import { getTrendingMovies } from '../../api/tmdb';
import MovieItem from '../MovieItem/MovieItem';

import useLoad from '../../hooks/useLoad';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const { loading, setLoading, error, setError } = useLoad();

  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      setError(false);
      try {
        const getMovies = await getTrendingMovies();
        setMovies(getMovies.results);
      } catch (e) {
        setError(true);
        toast.error(e.message, {
          position: 'top-right',
        });
      }
      setLoading(false);
    }

    fetchTrendMovies();
  }, []);

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-6xl my-6 font-bold">Trending today</h1>
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
        <ul className="flex gap-5 flex-wrap bg-violet-100 py-8 px-6 rounded-xl">
          {movies.map(movie => (
            <li
              key={movie.id}
              className="flex-auto basis-full sm:basis-1/3 lg:basis-1/4 
              xl:basis-1/5 2xl:basis-1/6 bg-white rounded-lg"
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
