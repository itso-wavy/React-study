import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';

createRoot(document.getElementById('root')).render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>
);
