import React from 'react';
import data from '../../database/data';
import ProductCard from '../../components/Product/ProductItem/ProductItem';
import classes from './homePage.module.css';

export default function HomePage() {
  return (
    <section className={classes['product-section']}>
      <ul className={classes['product-list']}>
        {data.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ul>
      <a className={classes['link-btn']} href='#'></a>
    </section>
  );
}
