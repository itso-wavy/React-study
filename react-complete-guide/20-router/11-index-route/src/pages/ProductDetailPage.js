import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <div>
      ProductDetailPage
      <Link to='..' relative='path'>
        뒤로 가기
      </Link>
    </div>
  );
}
