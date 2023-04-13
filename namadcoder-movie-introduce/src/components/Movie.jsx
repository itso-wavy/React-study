import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const style = {
  textDecoration: 'none',
  color: 'inherit',
};

function Movie({ movie }) {
  const { id, title_long, rating, genres, medium_cover_image, title, summary } =
    movie;
  // TODO: fetch->async 바꾸기 -> async 안의 async로 바꾸기

  return (
    <>
      <article className='flex max-w-xl flex-col items-start justify-between bg-yellow-50 p-5 rounded-2xl'>
        <div className='flex items-center gap-x-4 text-xs'>
          {genres.map((item, index) => (
            <span
              key={index}
              className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-indigo-50'
            >
              {item}
            </span>
          ))}
        </div>
        <div className='group relative'>
          <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
            <Link to={`/movie/${id}`} style={style}>
              <span className='absolute inset-0' />
              {title_long}
            </Link>
          </h3>
          <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
            {summary}
          </p>
        </div>
        <div className='relative mt-8 flex items-center gap-x-4'>
          <img
            src={medium_cover_image}
            alt={title}
            className='h-60 w-60 rounded-2xl bg-gray-50'
          />
          <div className='text-sm leading-6'>
            <p className='font-semibold text-gray-900'>
              <span className='absolute inset-0' />
              {rating}
            </p>
            <p className='text-gray-600'>⭐</p>
          </div>
        </div>
      </article>
    </>
  );
}
Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
