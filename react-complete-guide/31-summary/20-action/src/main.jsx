import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as newPostAction } from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        /* 라우터는 postsLoader 함수의 반환값(여기선 프로미스)을 기다렸다가 <Posts />를 렌더링함 
        ## 즉, 로더 함수 실행 후 반환값을 가지고 렌더링*/
        /* 
        이 요소가 렌더링될 때마다 콜백 함수가 실행됨
        컴포넌트 바깥에서 실행되므로 상태값은 바꿀 수 없음
        loader 함수의 반환값 resData.posts를 렌더링 대상 <Posts />와 하위 컴포넌트에게 전달 */
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction /* action 함수는 폼이 전송될 때 실행됨 */,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
