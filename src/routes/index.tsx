import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts';
import ArchivePage from '../pages/archive';
import TeamsPage from '../pages/teams';
import NotificationPage from '../pages/notifications';
import IntegrationPage from '../pages/integrations';
import MiddlePage from '../pages/middle';
// pages
import Home from '../pages/home';
import SettingsPage from '../pages/settings';
import InnerSideBarMobileForSettingsPage from '../pages/settings/components/innerSideBarMobile';
import { useTheme, useMediaQuery } from '@mui/material';

const Router = () => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const router = createBrowserRouter([
    {
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" replace />, index: true },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'home/:header',
          element: <Home />
        },
        {
            path: 'account',
            element: <SettingsPage />
        },
        {
            path: 'archive',
            element: <ArchivePage />
        },
        {
          path: 'settings',
          element: (smDown ? <InnerSideBarMobileForSettingsPage /> : <Navigate to="/account" replace />),
          index: true
        },
        {
          path: 'teams',
          element: <TeamsPage />
        },
        {
          path: 'notification',
          element: <NotificationPage />
        },
        {
          path: 'integration',
          element: <IntegrationPage />
        }
      ],
    },
    {
      path: 'middle',
      element: <MiddlePage />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
