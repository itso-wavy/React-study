import { createBrowserRouter } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from '../components/Root';
import IndexPage from '../pages/IndexPage';
import ErrorPage from '../pages/ErrorPage';
import ContactPage, {
  loader as contactLoader,
  action as contactAction,
} from '../pages/ContactPage';
import EditContactPage, {
  action as editAction,
} from '../pages/EditContactPage';
import { action as destroyAction } from './destroy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <IndexPage />,
          },
          {
            path: '/contacts/:contactId',
            element: <ContactPage />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: '/contacts/:contactId/edit',
            element: <EditContactPage />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
