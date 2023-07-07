import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useProductCardContext } from '../context/ProductCardContext';

function ProductRating() {
  const { product } = useProductCardContext();
  return (
    <div className='product-rating'>
      {[1, 2, 3, 4, 5].map(i =>
        i <= product.rating.stars ? (
          <AiFillStar key={i} />
        ) : (
          <AiOutlineStar key={i} />
        )
      )}
    </div>
  );
}
export default ProductRating;
