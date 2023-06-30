import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Page404 from './pages/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Page404 />,
  },
  {
    path: '/auth',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <SignUpPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
