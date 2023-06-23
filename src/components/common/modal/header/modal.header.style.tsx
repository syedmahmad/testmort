import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const ModalHeaderWrapper = styled(Box)(({ theme }) => ({
    padding: '20px 28px',
    borderRadius: '16px 16px 0px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.default,
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '33.6px',
    color: theme.palette.text.primary,
}));

export const LikeIcon = styled('img')(({ theme }) => ({
    height: '24px',
    width: '24px',
    cursor: 'pointer',
    background: theme.palette.background.paper,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '12px'
  }));
  
  export const LikeIconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
  }));

  export const CrossIcon = styled('img')(({ }) => ({
    height: '24px',
    width: '24px',
    cursor: 'pointer',
  }));
  
  