import { useProductCardContext } from '../context/ProductCardContext';

function ProductButton({ children, onClick }) {
  const { product } = useProductCardContext();

  const handleClick = () => {
    onClick(product);
  };

  return (
    <button type='button' onClick={handleClick} className='product-button'>
      {children}
    </button>
  );
}

export default ProductButton;
