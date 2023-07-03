import React from 'react';

export default function ProductDetailPage() {
  return <div>ProductDetailPage</div>;
}

export const loader = ({ params, request }) => {
  const productId = params.id;
  return <div>{productId}</div>;
  // params {id: '1'}
  // Request {method: 'GET', url: 'http://localhost:5173/product/1', headers: Headers, destination: '', referrer: 'about:client', …}body: (...)bodyUsed: falsecache: "default"credentials: "same-origin"destination: ""headers: Headers {}integrity: ""isHistoryNavigation: falsekeepalive: falsemethod: "GET"mode: "cors"redirect: "follow"referrer: "about:client"referrerPolicy: ""signal: AbortSignal {aborted: false, reason: undefined, onabort: null}url: "http://localhost:5173/product/1"[[Prototype]]: Request
};

export const action = params => {
  console.log('params: ', params);
};
