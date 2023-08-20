import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
  const { state } = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {state === 'loading' ? (
          <p
            style={{
              fontSize: '3em',
              textAlign: 'center',
              color: 'var(--color-primary-900)',
            }}
          >
            Loading...
          </p>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}
