import ProductCard from './ContextComposition/ProductCard';
import product from './data/data';
import useProduct from './hooks/useProduct';

function App() {
  const { addToCart } = useProduct(product);

  return (
    <>
      <h1>Context Composition</h1>

      <ProductCard
        product={product}
        image={<ProductCard.Image />}
        info={
          <ProductCard.Info>
            <ProductCard.Category />
            <ProductCard.Title />
            <ProductCard.Rating />
            <ProductCard.Price />
          </ProductCard.Info>
        }
        action={
          <ProductCard.Button onClick={addToCart}>
            Add to cart
          </ProductCard.Button>
        }
      />

      <h1>Component Composition</h1>
    </>
  );
}

export default App;
