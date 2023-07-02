import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/@layout/RootLayout';
import ProductLayout from '../components/@layout/ProductLayout';
import HomePage from '../pages/HomePage';
import ProductPage, { loader as productLoader } from '../pages/ProductPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ContactPage from '../pages/ContactPage.jsx';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/product',
        element: <ProductLayout />,
        children: [
          {
            index: true,
            loader: productLoader,
            element: <ProductPage />,
          },
          {
            path: ':id',
            element: <ProductDetailPage />,
          },
        ],
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
