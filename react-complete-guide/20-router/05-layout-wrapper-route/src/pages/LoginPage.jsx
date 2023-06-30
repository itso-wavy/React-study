import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      LoginPage
      <p>
        <Link to='/auth/register'>go to signUp</Link>
      </p>
    </div>
  );
}
