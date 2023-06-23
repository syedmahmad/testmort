import React, { useState, useEffect } from 'react';
import SideBar from './sidebar';
import SideBarMobile from './sidebar/sidebarMobile';
import { useTheme } from '@mui/material';
import Header from './header';
import { Outlet } from 'react-router';
import {
  InnerHeaderWrapper, SideBarWrapper, SideBarInnerWrapper, OutletWrapper,
  MainWrapper
} from './sidebar/sidebar.style';
import useSettings from '../hook/useSettings';
import MobileNav from './innerSideBar/innerSieBarMobile';
import useCollapse from '../hook/useCollapsed';
import { useAuth0 } from '@auth0/auth0-react';

function DashboardLayout() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [mobileScreen, setmobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setmobileScreen(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [])

  const { collapsed, handleClick } = useCollapse();

  return (
    <>
      {mobileScreen ?
        <>
          <Header />
          <SideBarWrapper>
            {/* @ts-ignore */}
            <SideBarInnerWrapper collapsed={collapsed}>
              <SideBarMobile />
            </SideBarInnerWrapper>
          </SideBarWrapper>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </>
        :
        <MainWrapper>
          <InnerHeaderWrapper>
            <Header />
          </InnerHeaderWrapper>
          <SideBarWrapper >
            <SideBarInnerWrapper >
              <SideBar />
            </SideBarInnerWrapper>
            <OutletWrapper >
              <Outlet />
            </OutletWrapper>
          </SideBarWrapper>

        </MainWrapper>
      }


    </>
  );
}

export default DashboardLayout;
