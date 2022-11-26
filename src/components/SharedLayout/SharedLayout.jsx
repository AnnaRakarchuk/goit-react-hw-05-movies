import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'


const SharedLayout = () => {
  return (
    <container>
      <header>
      <Navigation />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </container>
  );
};

export default SharedLayout;