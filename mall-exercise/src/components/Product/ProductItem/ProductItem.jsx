import React, { useState } from 'react';
import Card from '../../@ui/Card';
import ProductImage from '../ProductImage/ProductImage';
import ProductName from '../ProductName/ProductName';
import ProductPrice from '../ProductPrice/ProductPrice';
import { BASE_URL } from '../../../lib/utils/utils';
import classes from './productItem.module.css';

export default function ProductItem(props) {
  /*   {
    id: 7,
    productName: '제주코딩베이스캠프 코딩 연습장 세트',
    price: 8000,
    stockCount: 1000,
    thumbnailImg: 'asset/img/7/thumbnailImg.jpg',
    option: [],
    discountRate: 0,
    shippingFee: 1500,
    detailInfoImage: [ 'asset/detail/7/detail1.png', 'asset/detail/7/detail2.png' ],
    viewCount: 0,
    pubDate: '2022-02-28',
    modDate: '2022-02-28',
    key: undefined
  } */
  const [favorite, setFavorite] = useState(false);

  const LikeClickHandler = e => {
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
