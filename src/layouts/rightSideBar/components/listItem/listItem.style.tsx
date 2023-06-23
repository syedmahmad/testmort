import React from "react";
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import { Box, Typography } from '@mui/material';
import { styled } from "@mui/system";

export const MainBox = styled(Box)(({theme})=>({
    padding:'10px '
}));

export const CustomListItem: any = styled(ListItem)(({ theme, active}: any)=>({
    padding: '24px 0px',
    cursor: 'pointer',
    flexDirection: 'column',
    background: `${active ? theme.palette.background.default : 'transparent'}`
}));

export const ArrowIcon = styled('img')(({theme})=>({
    height: '24px',
    width: '24px'
    
}));

export const CustomListItemBox = styled(Box)(({theme})=>({
    display: 'flex',
     justifyContent: 'space-between',
      width: '100%'
}));

export const ListHeadingWrapper = styled(Box)(({theme})=>({
    width:'60%',
    marginLeft: '30px'
}));

export const ListHeading = styled(Typography)(({theme})=>({
    fontSize:'18px', 
    fontWeight: 500, 
    lineHeight:'16.8px',
    [theme.breakpoints.down('md')] : {
        fontSize: '14px'
    }
}));
export const ListSubHeading = styled(Typography)(({theme})=>({
    fontSize:'14px', 
    marginTop: '4px',
    fontFamily: 'Bai Jamjuree',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')] : {
        fontSize: '12px'
    }
}));  

export const ArrowIconWrapper = styled(Box)(({theme})=>({
    width:'15%', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    marginRight: '30px'
}));  


