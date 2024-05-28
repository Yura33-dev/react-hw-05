import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api/tmdb';
import { useParams } from 'react-router-dom';

function MovieCast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      const movieCast = await getMovieCredits(movieId);
      setCast(movieCast);
      console.log(movieCast);
    }
    fetchCast();
  }, [movieId]);
  return <div>MovieCast component</div>;
}

export default MovieCast;
