import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-screen px-4 py-2 flex justify-between items-center bg-white border-0 border-b-[1px] border-zinc-300 absolute top-0 z-100'>
      <h1 className='text-3xl'>
        <Link to='/'>logo</Link>
      </h1>
      <nav>
        <ul className='flex gap-3 '>
          <li>
            <NavLink to='/' className='nav'>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/product' className='nav'>
              product
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='nav'>
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
