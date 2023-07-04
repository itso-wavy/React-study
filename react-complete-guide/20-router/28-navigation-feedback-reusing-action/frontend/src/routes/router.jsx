import { createBrowserRouter } from 'react-router-dom';

import EditEventPage from '../pages/EditEventPage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from '../pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from '../pages/EventsPage';
import HomePage from '../pages/HomePage';
import NewEventPage from '../pages/NewEventPage';
import ErrorPage from '../pages/ErrorPage';
import RootLayout from '../layout/RootLayout';
import EventsRootLayout from '../layout/EventsRootLayout';
import { action as manipulateEventAction } from '../components/EventForm';

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
          {
            index: true,
            element: <EventsPage />,
            // 데이터 목록 가져오기
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            // 데이터 디테일 가져오기
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                // 이전 글 삭제
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            // 새 글 작성
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

export default router;
