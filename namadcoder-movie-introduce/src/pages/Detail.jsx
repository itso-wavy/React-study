import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setData(json.data.movie);
    };
    getMovies();
  }, []);

  const { title_long, genres, medium_cover_image, description_intro } = data;
  return (
    <div className='py-24 sm:py-32 bg-yellow-50'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:mx-0  bg-white p-10 rounded-md'>
          <h3 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title_long}
          </h3>
          <img
            src={medium_cover_image}
            alt={title_long}
            className=' mt-9 mb-9 h-96 rounded-2xl bg-gray-50'
          />
          <div className='flex items-center gap-x-4 text-xs'>
            {genres &&
              genres.map((item, index) => (
                <span
                  key={index}
                  className='relative z-10 rounded-full text-white bg-indigo-400 px-3 py-1.5 font-medium hover:bg-indigo-300'
                >
                  {item}
                </span>
              ))}
          </div>

          <p className='mt-5 text-lg leading-7 text-gray-600'>
            {description_intro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
