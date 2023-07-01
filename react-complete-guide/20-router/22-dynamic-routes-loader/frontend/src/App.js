import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './layout/RootLayout';
import EventsRootLayout from './layout/EventsRootLayout';
import { loader as eventsLoader } from './pages/EventsPage';
import { loader as eventDetailLoader } from './pages/EventDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventId',
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
