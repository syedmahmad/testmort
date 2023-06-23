import React from "react";
import { styled, alpha } from '@mui/system';
import { Typography, Button, Box } from "@mui/material";

export const ActionWrapper = styled(Box)(({ theme }) => ({
    background: alpha(theme.palette.background.default, 0.3),
    padding: '30px 28px'
}));

export const ActionWrapperInner = styled(Box)(({ theme }) => ({
    background: alpha(theme.palette.background.default, 0.3),
}));

export const ActionWrapperFont = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '19.6px',
    fontFamily: 'Bai Jamjuree'
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px'

}));

export const SaveIcon = styled('img')(({ theme }) => ({
    height: '18px',
    width: '18px',
}));

export const SaveButton = styled(Button)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
    fontFamily: "'Exo 2'",
    height: '56px',
    width: '206px',
    borderRadius: '10px',
    color: theme.palette.text.white,
    background: theme.palette.primary.light,
    textTransform: 'capitalize',
    padding: '12px 21px',
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
        boxShadow: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '22.4px',
        fontFamily: "'Exo 2'",
        height: '50px',
        width: '171px',
    }

}));

export const DiscardIcon = styled('img')(({ theme }) => ({
    height: '18px',
    width: '18px',

}));

export const DiscardButton = styled(Button)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
    fontFamily: "'Exo 2'",
    height: '56px',
    width: '135px',
    borderRadius: '10px',
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    padding: '12px 21px',
    "&:hover": {
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '22.4px',
        fontFamily: "'Exo 2'",
        height: '50px',
        width: '171px',
    }
}));