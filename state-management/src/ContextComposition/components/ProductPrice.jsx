import { useProductCardContext } from '../context/ProductCardContext';

function ProductPrice({ currency = 'EUR' }) {
  const { product } = useProductCardContext();
  return (
    <div className='product-price'>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
      }).format(product.price)}
    </div>
  );
}

export default ProductPrice;
