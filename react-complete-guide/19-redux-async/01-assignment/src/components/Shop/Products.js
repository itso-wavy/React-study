import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_data = [
  {
    id: '06',
    title: 'Test',
    price: 6,
    description: 'This is a first product - amazing!',
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map(item => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
