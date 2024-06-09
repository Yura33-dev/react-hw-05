const base = 'https://api.themoviedb.org/3';
export const imagePathBase = 'https://image.tmdb.org/t/p/w500';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTNkMGZkYWE3OWYxYWI2M2U4NTg5YWU2ZDUzYzFhZSIsInN1YiI6IjY2NTQ5NjkwMGY2Mjg1N2IxMGI0Y2VkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rDH7XlNHxiVL2jAyqYwYb5VTFEyDHWlaSbngkLIzY2I',
    accept: 'application/json',
  },
};

export async function getTrendingMovies() {
  const response = await fetch(`${base}/trending/movie/day`, options);
  const data = await response.json();
  return data;
}

export async function getMovieById(movieId) {
  const response = await fetch(`${base}/movie/${movieId}`, options);
  const data = await response.json();
  return data;
}

export async function getMovieCredits(movieId) {
  const response = await fetch(`${base}/movie/${movieId}/credits`, options);
  const data = await response.json();

  return getPopularityCast(data.cast);
}

function getPopularityCast(cast, maxNumberOfCast = 5) {
  const sortedCast = cast.toSorted((first, second) => {
    return second.popularity - first.popularity;
  });

  return sortedCast.slice(0, maxNumberOfCast);
}

export async function getMoviesReviews(movieId) {
  const response = await fetch(`${base}/movie/${movieId}/reviews`, options);
  const reviews = await response.json();

  const result = reviews.results.map(review => {
    return {
      id: review.id,
      author: review.author,
      content: review.content,
      rating: review.author_details.rating,
    };
  });

  return result;
}

export async function getMovieByName(query) {
  const response = await fetch(
    `${base}/search/movie?query=${query}&include_adult=true`,
    options
  );
  const movies = await response.json();

  return movies.results;
}
