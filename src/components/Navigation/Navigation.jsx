import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
import { Suspense } from 'react';

function Navigation() {
  return (
    <>
      {' '}
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
