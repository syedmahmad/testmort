import React from "react";
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export const ButtonWrapperComponent = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const NewDocButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  marginRight: '12px',
  padding: '15px',
  borderRadius: '10px',
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    borderRadius: '10px'
  }
}));

export const ResyncLoanText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 500,
  fontStyle: 'normal',
  lineHeight: '140%',
  fontFamily: "'Exo 2'"

}));

export const ReSyncLoanButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.paper,
  width: '174px',
  height: '56px',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.secondary}`,
  marginLeft: '12px',
  padding: '15px',
  borderRadius: '10px',
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    borderRadius: '10px'
  }
}));