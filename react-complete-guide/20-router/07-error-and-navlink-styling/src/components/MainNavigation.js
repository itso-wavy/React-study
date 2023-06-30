import { Link, NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* css module 스타일링 */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* inline 스타일링 */}
            <NavLink
              to='/products'
              style={({ isActive }) => ({
                color: isActive
                  ? 'var(--color-gray-100)'
                  : 'var(--color-gray-500)',
              })}
              end
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
