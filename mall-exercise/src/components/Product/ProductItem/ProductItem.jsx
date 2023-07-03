import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../@ui/Card';
import ProductImage from '../ProductImage/ProductImage';
import ProductName from '../ProductName/ProductName';
import ProductPrice from '../ProductPrice/ProductPrice';
import { BASE_URL } from '../../../lib/utils/utils';
import classes from './productItem.module.css';

export default function ProductItem(props) {
  const [favorite, setFavorite] = useState(false);

  const LikeClickHandler = () => {
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
            <Link to={`${props.id}`}>
              <ProductName>{props.productName}</ProductName>
            </Link>
            <ProductPrice>{props.price}</ProductPrice>
          </div>
          <button
            onClick={LikeClickHandler}
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
