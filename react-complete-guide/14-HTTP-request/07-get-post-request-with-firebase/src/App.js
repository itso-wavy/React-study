import { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

const URL =
  'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/movies.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await res.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => fetchMovieHandler(), [fetchMovieHandler]);

  const addMovieHandler = async movie => {
    // 데이터의 id는 firebase가 자동 생성해줌

    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'content-type': 'application/json' },
    });

    fetchMovieHandler();
  };

  const drawContent = () => {
    if (error) return <p>{error}</p>;
    if (isLoading) return <p>Loading...</p>;
    if (!isLoading && !movies.length) return <p>Found no movie.</p>;
    if (!isLoading && movies.length) return <MoviesList movies={movies} />;
  };

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{drawContent()}</section>
    </>
  );
}

export default App;
