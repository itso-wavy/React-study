import React, { useState } from 'react';
// import data from '../database/data';
import ProductItem from '../components/Product/ProductItem/ProductItem';
import RegisterForm from '../components/Product/RegisterForm/RegisterForm';
import Modal from '../components/@ui/Modal';
import { useRouteLoaderData, useNavigation, json } from 'react-router-dom';
import Loading from '../components/@ui/Loading';
import axios from 'axios';

export default function ProductPage() {
  const {
    data: { data },
  } = useRouteLoaderData('products');
  const { state } = useNavigation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const registerNewProduct = () => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  if (state === 'loading') return <Loading />;

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
      <ul className='flex flex-col gap-3 flex-wrap sm:flex-row items-center'>
        {data.map(item => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export const loader = async () => {
  try {
    const res = await axios(
      'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/products.json'
    );
    return res;
  } catch (error) {
    throw json(
      { message: 'sorry, could not fetch server data' },
      { status: 500 }
    );
  }
};
