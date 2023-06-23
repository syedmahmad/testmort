import React from "react";
import { Box, ListItem, Typography, List, ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

export const ArchivePageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

export const ArchivePageInnerNav = styled(Box)(({ theme }) => ({
  minWidth: 331,
  [theme.breakpoints.down('lg')]: {
    minWidth: 178,
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 150,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
}));

export const ArchivePageBg = styled(Box)<any>(({ theme, themeMode, collapsed }: any) => ({
  minWidth: `${collapsed ? 'calc(100vw - 380px)' : 'calc(100vw - 492px)'}`,
  height: 'calc(100vh - 100px)',
  overflowY: 'hidden',
  backgroundImage: themeMode === 'light' ? `url(${'/images/svgs/archive-page-bg.svg'})` : `url(${'/images/svgs/Archive-bg-dark.svg'})`,
  [theme.breakpoints.down('lg')]: {
    minWidth: 'calc(100vw - 320px)',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 'calc(100vw - 200px)',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 'calc(100vw - 0px)',
  },
}));

export const ArchivePageBgMobile = styled(Box)<any>(({ theme, themeMode }: any) => ({
  minWidth: 'calc(100vw - 492px)',
  height: 'calc(100vh - 100px)',
  overflowY: 'hidden',
  background: theme.palette.background.default,
  [theme.breakpoints.down('lg')]: {
    minWidth: 'calc(100vw - 320px)',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 'calc(100vw - 200px)',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 'calc(100vw - 0px)',
    overflowY: 'scroll',
    height: 'calc(100vh - 84px)'
  },
}));

export const ListItemWrapper: any = styled(ListItem)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  marginBottom: '16px',
  minHeight: '68px',
  alignItems: 'start',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
    minHeight: '60px',
    borderRadius: '10px'
  },
}));

export const MainDiv = styled(Box)(({ theme }) => ({
  margin: '30px auto',
  padding: '30px 28px',
  width: '48vw',
  background: theme.palette.background.default,
  borderRadius: '16px',
  height: 'calc(100vh - 220px)',
  overflowY: 'scroll',
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '70vw',
  },
}));

export const Heading = styled(Box)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: '50.4px',
  color: theme.palette.text.primary
}));
export const ListItemTextStyle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22.4px'
}));

export const MainListItem = styled(List)(({ theme }) => ({
  marginTop: '24px',
  overflowY: 'scroll'
}));

export const ListText = styled(ListItemText)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '28px'
}));

export const ListItemMonths = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22.4',
}));

export const ListItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '22.4px',
  fontWeight: 600,

}));

export const MonthListWrapper = styled(List)(({ theme }) => ({
  width: '266px',
  marginLeft: '64px'
}));
export const MonthOfYearWrapper = styled(List)(({ theme }) => ({
  width: '212px',
  marginLeft: '12px'
}));

export const MonthOfYearDivider = styled(Divider)(({ theme }) => ({
  width: '36%',
  marginLeft: '17px'
}));

export const MonthOfYearDividerDark = styled(Divider)<any>(({ theme, themeMode }: any) => ({
  width: '36%',
  marginLeft: '17px',
  background: themeMode === 'light' ? theme.palette.primary.dark : theme.palette.text.primary,
}));

export const ListId = styled(ListItemText)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '19.6px',
}));

export const ReloadIcon = styled(ListItemText)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '19.6px',
}));