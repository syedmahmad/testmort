import * as React from 'react';
import { styled, alpha } from '@mui/system';
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";

export const HeaderComponent = styled(Box)(({ theme }) => ({
  height: 99,
  background: theme.palette.background.paper,
  borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.20)}`,
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    height: 80
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  
}));

export const LogoComponent = styled('img')<any>(({ theme }: any) => ({
  margin: '26px 20px',
  height: '48px',
  width: '246px',
  [theme.breakpoints.down('lg')]: {
    height: '28.2px',
    width: '144px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}));

export const ArrowIconWrapper = styled(Box)(({theme}) => ({
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  }
}));

export const DownArrowIcon = styled('img')(() => ({
  width: '10px',
  height: '4px',
}));

export const ButtonComponent = styled(Box)<any>(({ theme }: any) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '51px',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    marginTop: '39px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: '39px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '280px',
    marginTop: '0px',
    marginBottom: '0px',
  },
}));

export const ButtonInnerComponent = styled(Box)(({theme}) => ({
  height: '48px',
  [theme.breakpoints.down('sm')]: {
    height: '42px',
  }
}));

export const HeaderButton = styled(Button)(({ theme, active, themeMode }: any) => ({
  height: '49px',
  width: '141px',
  boxShadow: 'none',
  color: theme.palette.text.primary,
  borderRight: `1px solid ${alpha("#03363D", 0.20)} `,
  borderRadius: 0,
  fontFamily: 'Roboto Slab',
  backgroundColor: `${active ? `${themeMode === 'light' ? theme.palette.background.default : '#7D8A8F'}`: `${themeMode === 'light' ? '#FBFCFC' : '#465359'}`}`,
  borderBottom: `${active ? `1px solid ${theme.palette.background.default}` : `1px solid ${alpha(theme.palette.text.primary, 0.20)}`}`,
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    height: '41px',
    width: '95px',
  },
  [theme.breakpoints.down('md')]: {
    height: '41px',
    width: '70px',
  },
}));

export const PlusBtn = styled('img')(({ theme }) => ({
  height: '12px',
  width: '14px',
  boxShadow: 'none',
  "&:hover": {
    backgroundColor: "#FE6A57",
    boxShadow: 'none'
  },
}));

export const PlusBtnIcon = styled(Button)(({ theme }) => ({
  height: '48px',
  width: '48px',
  boxShadow: 'none',
  backgroundColor: '#FE6A57',
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "#FE6A57",
    boxShadow: 'none'
  },
  [theme.breakpoints.down('lg')]: {
    height: '41px',
    width: '43px',
},
[theme.breakpoints.down('md')]:
{
  display: 'none',
}
}));

export const OuterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  marginRight: '28px',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'start',
    marginRight: '28px',
  },
}));

export const UsernameBox = styled(Box)(({ theme }) => ({
  margin: '27px'
}));

export const Username = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  [theme.breakpoints.down('sm')] :{
    fontSize: '20px',
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
    lineHeight: '24px',
  }
}));

export const HeaderIconWrapper = styled(Box)<any>(({ theme, themeMode }: any) => ({
  height: '79px',
  width: '90px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  float: 'right',
  backgroundColor: themeMode === "light"? "#FBFCFC" : "#37454B",
  [theme.breakpoints.up('lg')]: {
    display: 'none'
  },
}));

export const HeaderRightIcon = styled('img')<any>(({ theme }: any) => ({
  height: '25px',
  width: '22.5px',
}));

export const HeaderMobileWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')] : {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 16px',
    background: theme.palette.background.paper,
    height: '84px',
   },
 [theme.breakpoints.up('sm')] : {
  display: 'none'
 }
}));

export const MenuIcon = styled('img')<any>(({ theme }: any) => ({
  height: '40px',
  width: '40px'
}));

