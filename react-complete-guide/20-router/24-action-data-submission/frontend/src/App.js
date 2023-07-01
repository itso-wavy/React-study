import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import EventDetailPage, {
  loader as eventDetailLoader,
} from './pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './layout/RootLayout';
import EventsRootLayout from './layout/EventsRootLayout';

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
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
              },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
