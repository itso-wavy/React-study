import React, { useState } from 'react';
import Card from '../../@ui/Card/Card';
import ProductImage from '../ProductImage/ProductImage';
import ProductName from '../ProductName/ProductName';
import ProductPrice from '../ProductPrice/ProductPrice';
import { BASE_URL } from '../../../lib/utils/utils';
import classes from './productItem.module.css';

export default function ProductCard(props) {
  const [favorite, setFavorite] = useState(false);
  const handleLikeClick = e => {
    setFavorite(!favorite);
  };

  return (
    <li>
      <Card>
        <ProductImage
          src={BASE_URL + props.thumbnailImg}
          alt={props.productName}
        />
        <div className={classes.info}>
          <div className={classes.text}>
            <ProductName>{props.productName}</ProductName>
            <ProductPrice>{props.price}</ProductPrice>
          </div>
          <button
            onClick={handleLikeClick}
            className={`${classes['like-btn']} + ${
              classes[favorite ? 'on' : '']
            }`}
          >
            ♡
          </button>
        </div>
      </Card>
    </li>
  );
}
