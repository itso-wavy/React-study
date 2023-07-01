import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation } from 'react-router-dom';

export default function RootLayout() {
  const { state, location } = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {state === 'loading' && (
          <p
            style={{
              fontSize: '3em',
              textAlign: 'center',
              color: 'var(--color-primary-900)',
            }}
          >
            Loading...
          </p>
        )}
        <Outlet />
      </main>
    </>
  );
}
