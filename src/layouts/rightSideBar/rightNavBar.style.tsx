import React from "react";
import { styled } from '@mui/system';
import { Box, Typography, Button, alpha } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const ButtonBoxWrapper = styled(Box)(({ theme }) => ({
  height: '60px',
  marginTop: '28px',
}));

export const ListItemBoxWrapper = styled(Box)(({ theme }) => ({
  height: 'calc(100vh - 346px)',
  [theme.breakpoints.down('lg')]: {
    height: 'calc(100vh - 320px)',
  },
}));

export const ActionBtnBoxWrapper = styled(Box)(({ theme }) => ({
  height: '154px',
}));

export const RightNavComponent = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 100px)',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  width: '420px',
  float: 'right',
  [theme.breakpoints.down('lg')]: {
    overflow: 'hidden',
  },
  [theme.breakpoints.down('sm')]: {
    width :'100%'
  },
}));

export const Icon = styled('img')(({ theme }) => ({
  height: '18px',
  width: '18px',
  marginLeft: '7px',
  cursor: 'pointer'
}));

export const MainListWrapper = styled(List)(({ theme }) => ({
  background: theme.palette.background.default,
}));
export const ListWrapper = styled(ListItem)(({ theme }) => ({
  width: '339px',
  padding: '15px 0px',
}));

export const CheckBoxText = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '65%'
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '19.2px'
}));

export const SubHeading = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.80),
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '16.8px',
  fontFamily: 'Bai Jamjuree'
}));

export const DoucmentBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22.4px',
  padding: '30px',
}));

export const DoucmentBtnIcon = styled('img')(({ theme }) => ({
  height: '25px',
  width: '22.5px',
  marginLeft: '5px',
}));

export const DoucmentCrossIcon = styled('img')(({ theme }) => ({
  height: '25px',
  width: '22.5px',
}));

export const DocumentHeader = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between',
}));

export const DocumentIcon = styled(Box)(({ theme }) => ({
  paddingTop: '27px',
   marginRight: '20px'
}));









