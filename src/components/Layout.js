import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Bar } from './Bar/Bar';
import { Suspense } from 'react'
import { LayoutContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Bar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2000} />
    </LayoutContainer>
  );
};