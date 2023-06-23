import React from "react";
import { Box } from "@mui/material";
import { styled } from '@mui/system';

export const IntegrationPageBg = styled(Box)<any>(({ theme, themeMode, collapsed }: any) => ({
    minWidth: `${collapsed ? 'calc(100vw - 380px)' : 'calc(100vw - 492px)' }`,
    backgroundImage: themeMode === 'light' ? `url(${'/images/svgs/background-page.svg'})` : `url(${'/images/svgs/setting-bg-dark.svg'})`,
    [theme.breakpoints.down('lg')]: {
      minWidth: 'calc(100vw - 315px)',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: 'calc(100vw - 200px)',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(100vw - 0px)',
      height: 'calc(100vh - 84px)'
    },
  }));
  