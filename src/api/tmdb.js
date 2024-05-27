const base = 'https://api.themoviedb.org/3';
const imagePathBase = 'https://image.tmdb.org/t/p/w500';

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