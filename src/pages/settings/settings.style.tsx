import React from "react";
import { Box, Typography, Unstable_Grid2 as Grid2 } from "@mui/material";
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { List } from '@mui/material';

export const MainWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

export const InnerSideWrapper = styled(Box)(({ theme }) => ({
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

export const SettingsPageBg = styled(Box)<any>(({ theme, themeMode, collapsed }: any) => ({
  minWidth: `${collapsed ? 'calc(100vw - 380px)' : 'calc(100vw - 492px)' }`,
  backgroundImage: themeMode === 'light' ? `url(${'/images/svgs/background-page.svg'})` : `url(${'/images/svgs/setting-bg-dark.svg'})`,
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 84px)'
  },
}));

export const CardWrapperMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
  marginTop: '30px',
  width: 740,
  height: 'calc(100vh - 160px)',
  overflowY: 'scroll',
  borderRadius: '16px',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('lg')]: {
    width: '85%'
  },
}));

export const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  padding: '30px 28px'
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: '50.4px'
}));

export const TextFieldWrapper = styled(Box)(({ theme }) => ({
  height: '91px',
  marginTop: '30px'
}));

export const TextFieldTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '25.5px'

}));

export const CheckBoxWrapper = styled(Box)(({ theme }) => ({
  width: '95%',
  marginTop: '28px',

}));

export const CheckBoxMainWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('lg')]: {
    marginTop: '0px',
  },
}));

export const OptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '25.5px'

}));

export const OptionBody = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '25.6px',
  marginTop: '8px'
}));

export const CheckBoxes = styled(Box)(({ theme }) => ({
  width: '115px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));


export const CardActionsWrapper = styled(CardActions)(({ theme }) => ({
  padding: '30px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
  [theme.breakpoints.down('sm')]:
  {
    margin: '0 auto'
  }
}));

export const CancelBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '28px',
  fontFamily: 'Exo 2',
  padding: '12px 73px',
  [theme.breakpoints.down('sm')]: {
    padding: '12px 40px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22.4px',
    fontFamily: 'Exo 2',
  }

}));

export const SaveBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.background.paper,
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '28px',
  padding: '12px 73px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 40px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22.4px',
    fontFamily: 'Exo 2',
  }
}));

export const ArrowIcon = styled('img')(({ theme }) => ({
  marginRight: '21px'
}));
export const MobileListWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '12px 20px',
  borderRadius: '10px',
}));

export const MobileListText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'Roboto Slab',
  fontWeight: 600,
  lineHeight: '22.4px',
  padding: '20px'
}));

export const BackArrowMobile = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
}));

export const ArrowGrid = styled(Grid2)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.background.paper,
  justifyContent: 'center'
}));
export const GridWrapper = styled(Box)(({ theme }) => ({
  marginTop: '-84px',
  width: '100%',
  position: 'absolute',
  zIndex: 99,
  background: theme.palette.background.paper,
}));

export const AccountGrid = styled(Grid2)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: '84px',
  alignItems: 'center',
  display: 'flex'
}));

export const CustomMobileList = styled(List)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: 'calc(100vh - 100px)'
 
}));

