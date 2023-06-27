import { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('https://swapi.dev/api/films/');

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await res.json();
      const transformedMovies = data.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      }));
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => fetchMovieHandler(), [fetchMovieHandler]);

  const drawContent = () => {
    if (error) return <p>{error}</p>;
    if (isLoading) return <p>Loading...</p>;
    if (!isLoading && !movies.length) return <p>Found no movie.</p>;
    if (!isLoading && movies.length) return <MoviesList movies={movies} />;
  };

  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{drawContent()}</section>
    </>
  );
}

export default App;
