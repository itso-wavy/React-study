import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuthLayout from './pages/AuthLayout';
import logoutUser from './components/Logout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomePage />}>
      <Route element={<AuthLayout />}>
        <Route
          path='auth'
          element={<LoginPage />}
          loader={({ request }) =>
            fetch('/api/dashboard.json', {
              signal: request.signal,
            })
          }
        />
        <Route path='logout' action={logoutUser} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
