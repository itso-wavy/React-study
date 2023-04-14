import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

const style = {
  fontStyle: 'italic',
  fontSize: '1.5em',
  textAlign: 'center',
};

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const data = await (
        await fetch(
          'https://yts.mx/api/v2/list_movies.json?genre=Drama&sort_by=year&minimum_rating=8.5'
        )
      ).json();
      setMovies(data.data.movies);
      setLoading(false);
    };
    getMovie();
  }, []);

  return (
    <>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Rotten Potatoes
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔🛋️🥔
            </p>
          </div>
          {loading ? (
            <p style={style}>loading...</p>
          ) : (
            <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {movies.map(movie => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
