import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />
        <Route
          path='contacts/:contactId'
          element={<ContactPage />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path='contacts/:contactId/edit'
          element={<EditContactPage />}
          loader={contactLoader}
          action={editAction}
        />
        <Route path='contacts/:contactId/destroy' action={destroyAction} />
      </Route>
    </Route>
  )
);

export default router;
