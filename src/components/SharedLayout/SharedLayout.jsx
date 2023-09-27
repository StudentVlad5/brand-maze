import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Div } from './SharedLayout.styled';
import { HeaderComp } from 'components/Header/Header';
import { FooterComp } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <Div>
      <HeaderComp />
      <Box>
        <Suspense fallback={'Loading...'}>
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </Suspense>
      </Box>
      <FooterComp />
    </Div>
  );
};
