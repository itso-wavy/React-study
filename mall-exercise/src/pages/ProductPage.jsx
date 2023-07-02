import React, { useState } from 'react';
import data from '../database/data';
import ProductItem from '../components/Product/ProductItem/ProductItem';
import RegisterForm from '../components/Product/RegisterForm/RegisterForm';
import Modal from '../components/@ui/Modal';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registerNewProduct = () => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='p-6 rounded-lg bg-white'>
      <h1 className='text-2xl'>ProductList</h1>
      <button
        onClick={registerNewProduct}
        className='block ml-auto p-3 rounded bg-amber-300 hover:bg-orange-200'
      >
        새상품 등록
      </button>
      {isModalOpen && (
        <Modal title='상품 등록' modalCloseHandler={modalCloseHandler}>
          <RegisterForm />
        </Modal>
      )}
      <ul className='flex flex-col gap-3 flex-wrap sm:flex-row'>
        {data.map(item => (
          <Link to='/' key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export const loader = async () => {
  const data = await fetch(
    'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/products/data'
  );
  console.log(data);
};
