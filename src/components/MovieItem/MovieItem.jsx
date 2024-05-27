import PropTypes from 'prop-types';

function MovieItem({ movie }) {
  return (
    <div className="card">
      <div className="image-wrapper h-96 relative rounded-t-lg overflow-hidden">
        {movie.adult && (
          <div
            className="adult rounded-full bg-red-500 w-14 h-14
            flex justify-center items-center text-xl text-neutral-200 
            font-bold absolute top-3 right-3 shadow-md"
          >
            <span>18+</span>
          </div>
        )}
        <img
          src={'https://image.tmdb.org/t/p/w500' + movie['poster_path']}
          alt={movie.title}
          className="w-full h-full object-covers"
        />
        <div
          className="rating rounded-md text-neutral-100 text-xl
        bg-slate-800/70 px-8 py-3 absolute bottom-2 left-[50%] translate-x-[-50%]"
        >
          Rate:{' '}
          <span className="text-yellow-400">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="card-title text-xl text-center my-3">{movie.title}</div>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
