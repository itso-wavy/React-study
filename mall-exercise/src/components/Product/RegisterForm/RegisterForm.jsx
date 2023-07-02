import React, { useRef } from 'react';
import { Form } from 'react-router-dom';
import Input from '../../@ui/Input';
import Button from '../../@ui/Button';

export default function RegisterForm() {
  const titleRef = useRef();
  const priceRef = useRef();

  const onSubmitHandler = e => {
    e.preventDefault();

    const newProduct = {
      title: titleRef.current.value,
      price: priceRef.current.value,
    };

    console.log('newProduct: ', newProduct);
  };

  return (
    <Form method='post' action='' onSubmit={onSubmitHandler}>
      <Input id='상품명' label='title' ref={titleRef} />
      <Input id='가격' label='price' ref={priceRef} />
      <Button size='sm'>Register</Button>
    </Form>
  );
}
