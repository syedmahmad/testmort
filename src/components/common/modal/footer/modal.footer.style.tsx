import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";

export const ModalFooterWrapper: any = styled(Box)(({theme})=>({
    padding: '24px 28px',
    background: theme.palette.background.paper,
    borderRadius: '0px 0px 16px 16px'
}));

export const FooterButtonWrapper = styled(Box)(({theme, actionButtonText, cancelButtonText}: any)=>({
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: `${actionButtonText !== '' && cancelButtonText !=='' ? 'space-between' : 'center'}`
}));

export const CancelBtn = styled(Button)(({ theme }) => ({
    background: theme.palette.background.default, 
    color: theme.palette.text.primary, 
    fontSize: '20px', 
    fontWeight: 500,
    lineHeight: '28px',
    height: '56px',
    width: '206px',
    borderRadius: '10px' 
  }));

  export const ImportBtn = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.light, 
    color: theme.palette.background.paper, 
    fontSize: '20px', 
    fontWeight: 500,
    lineHeight: '28px',
    height: '56px',
    width: '206px',
    borderRadius: '10px',
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary, 
    }
  }));