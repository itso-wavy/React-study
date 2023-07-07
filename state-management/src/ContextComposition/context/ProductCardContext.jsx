import { createContext, useContext } from 'react';

const ProductCardContext = createContext(null);

export default ProductCardContext;

export function useProductCardContext() {
  const context = useContext(ProductCardContext);

  if (!context) {
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard component'
    );
  }
  return context;
}
