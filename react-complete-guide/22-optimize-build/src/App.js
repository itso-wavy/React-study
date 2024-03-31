import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
// import BlogPage, { postsLoader } from './pages/Blog';
// import PostPage, { postLoader } from './pages/Post';
const BlogPage = lazy(() => import('./pages/Blog'));
const PostPage = lazy(() => import('./pages/Post'));

// +) 호스팅 서비스인 파이어베이스 설정에서 모든 경로에 대한 응답을 index.html로 설정(SPA)
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            // loader: postsLoader,
            loader: () =>
              import('./pages/Blog').then(module => module.postsLoader()),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            // loader: postLoader,
            loader: ({ params }) =>
              import('./pages/Post').then(module =>
                module.postLoader({ params })
              ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
