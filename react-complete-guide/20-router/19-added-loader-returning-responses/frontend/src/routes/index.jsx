import { createBrowserRouter } from 'react-router-dom';
import EditEventPage from '../pages/EditEventPage';
import EventDetailPage from '../pages/EventDetailPage';
import EventsPage from '../pages/EventsPage';
import HomePage from '../pages/HomePage';
import NewEventPage from '../pages/NewEventPage';
import RootLayout from '../layout/RootLayout';
import EventsRootLayout from '../layout/EventsRootLayout';
import { loader as eventsLoader } from '../pages/EventsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

export default router;
