import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>My Home Page</h1>
      <main>
        Please <Link to='/auth/login'>login first</Link>.
      </main>
    </div>
  );
}
