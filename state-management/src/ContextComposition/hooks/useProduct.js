function useProduct(product) {
  const addToCart = () => {
    console.log('Added:', product);
  };

  return { addToCart };
}

export default useProduct;
