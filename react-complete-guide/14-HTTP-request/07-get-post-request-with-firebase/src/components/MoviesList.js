import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = props => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
