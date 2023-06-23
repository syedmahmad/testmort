import React from "react";
import { styled, alpha } from "@mui/system";
import {
    Box, Typography, ListItem, Button, List
} from '@mui/material';
import Divider from '@mui/material/Divider';

export const InnerSideBarWrapper = styled(Box)<any>(({ theme, pathname }: any) => ({
    height: 'calc(100vh - 132px)',
    overflow: 'auto',
    width: '330px',
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 0px',
    borderRight: `1px solid ${alpha(theme.palette.text.primary, 0.20)}`,
    [theme.breakpoints.down('lg')]: {
        width: `${pathname === '/home' ? '260px' : '185px'}`,
    },
    [theme.breakpoints.down('md')]: {
        width: `${pathname === '/home' ? '199px' : '149px'}`,
    },
    [theme.breakpoints.down('sm')]: {
        width: `${pathname === '/home' ? '100%' : '0px'}`,
        height: 'calc(100vh - 208px)',
    },
}));

export const ButtonWrapper = styled(Button)(({ theme }) => ({
    height: '56px',
    width: '292px',
    background: theme.palette.primary.light,
    borderRadius: '10px',
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: "'Exo 2'",
    textTransform: 'capitalize',
    lineHeight: '28px',
    justifyContent: 'flex-start',
    paddingLeft: '16px',
    paddingTop: '13px',
    paddingBottom: '15px',
    color: '#fff',
    '& .MuiButton-startIcon': {
        marginRight: '10px',
        marginLeft: 0
    },
    '&:hover': {
        background: theme.palette.primary.main,
    },
    [theme.breakpoints.down('lg')]: {
        height: '48px',
        width: '235px',
    },
    [theme.breakpoints.down('md')]: {
        height: '48px',
        width: '180px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '50px',
        width: '155px',
    },
}));

export const PlusIcon = styled('img')(({ theme }) => ({
    height: '24px',
    width: '24px',
    [theme.breakpoints.down('sm')]: {
        height: '15px',
        width: '15px',
    },
}));

export const InnerSideBarButton = styled(ListItem)<any>(({ theme, pathname }: any) => ({
    heigth: '78px',
    width: '292px',
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    [theme.breakpoints.down('lg')]: {
        width: `${pathname === '/home' ? '250px' : '178px'}`,
    },
    [theme.breakpoints.down('md')]: {
        width: `${pathname === '/home' ? '180px' : '148px'}`,
        padding: '0px 0px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0px 0px',
    },
}));

export const Icons = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    height: '18px',
    width: '18px',
}));

export const TypographyBox: any = styled(Typography)(({ theme, active }: any) => ({
    width: `${active ?  '60%' : '100%' }`,
    padding: '0px 10px',
    [theme.breakpoints.down('md')]: {
        width: '50%',
        padding: '0px 10px',
    }
}));

export const TypographyHeading = styled(Typography)(({ theme }) => ({
    color: '#FE6A57',
    fontSize: '18px',
    lineHeight: '25.2px',
    fontWeight: 500,
    marginTop: '12px',
    fontFamily: 'Bai Jamjuree' ,
    [theme.breakpoints.down('lg')]: {
        fontSize: '16px',
        lineHeight: '22.4px',
        fontWeight: 500,
    },
}));

export const Typographyid = styled(Typography)(({ theme }) => ({
    color: alpha(theme.palette.text.primary, 0.60),
    fontSize: '14px',
    lineHeight: '16.8px',
    fontWeight: 700,
    marginTop: '5px',
    fontFamily: 'Bai Jamjuree' ,
    [theme.breakpoints.down('lg')]: {
        fontSize: '12px',
        lineHeight: '14.4px',
        fontWeight: 500,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        lineHeight: '16.8px',
        fontWeight: 700,
    },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
    marginTop: '6px',
    [theme.breakpoints.down('lg')]: {
        width: '27%',
    },
    [theme.breakpoints.down('md')]: {
        width: '40%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '20%',
    },
}));

export const TypographyHeadingSimple = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    lineHeight: '25.2px',
    fontWeight: 500,
    marginTop: '12px',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        lineHeight: '22.4px',
        fontWeight: 600,
    }
}));

export const SimpleDivider = styled(Divider)(({ theme }) => ({
    marginTop: '15px',
    background: theme.palette.text.primary,
    opacity: 0.2
}));

export const CustomeDivider: any = styled(Divider)(({ theme }) => ({
    marginTop: '15px',
    height: '3px',
    background: theme.palette.primary.light,
}));

export const CustomList = styled(List)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '93%'
    }
}));

export const NewLoanBtnWrapper = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'end',
    padding: '20px',
    background: theme.palette.background.paper,
    overflow: 'hidden'
}));


export const NewLoanMobileText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontFamily: 'Exo 2',
    fontWeight: 500,
    lineHeight: '22.4',
    color: theme.palette.text.white,
}));

