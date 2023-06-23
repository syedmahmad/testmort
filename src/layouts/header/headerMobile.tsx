import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { HeaderMobileWrapper, MenuIcon } from "./header.style";
import useSettings from "../../hook/useSettings";
import { useLocation } from "react-router-dom";
const HeaderMobile = (props :any) => {
    const { handleToggleDrawerMobile, themeMode } = useSettings();
    const {pathname} = useLocation();
    return(
        <>
         <HeaderMobileWrapper>
            <Box>
              <MenuIcon src={`${themeMode === 'light' ? '/images/svgs/menu-mobile.svg' : '/images/svgs/menu-dark.svg'}`} onClick={handleToggleDrawerMobile}/>
            </Box>
            <Box>
                <Typography sx={{fontSize: '20px', fontWeight: 600, lineHeight: '28px', fontFamily: 'Bai Jamjuree'}}>
                    {pathname === '/home' ? 'Home' : pathname === '/settings' ? 'Setting' : pathname === '/archive' ? 'Archive' : 'Account'}
                    </Typography> 
            </Box>
        </HeaderMobileWrapper>
        </>
    );
}

export default HeaderMobile;