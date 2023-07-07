import { useProductCardContext } from '../context/ProductCardContext';

function ProductImage() {
  const { product } = useProductCardContext();
  return (
    <div className='product-image'>
      <img src={product.image} alt='' />
    </div>
  );
}

export default ProductImage;
