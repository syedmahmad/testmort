import React, { useState, useEffect } from "react";
import { Box, Typography, Unstable_Grid2 as Grid2 } from "@mui/material";
import InnerSideNav from '../../layouts/innerSideBar';
import {
    MainWrapper, InnerSideWrapper, BackArrowMobile, ArrowGrid, GridWrapper, AccountGrid
} from "./settings.style";
import useSettings from "../../hook/useSettings";
import { BackArrow } from "../home/home.style";
import SettingsContent from "./settingsContent";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
    const [isSmallScreen, setisSmallScreen] = useState(false);
    const { themeMode } = useSettings();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setisSmallScreen(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isSmallScreen ?
                <Box>
                    <>
                        <GridWrapper>
                            <Grid2 container columns={10} sx={{height: '84px'}}>
                                <ArrowGrid xs={2} >
                                    <BackArrowMobile>
                                        <BackArrow src={`${themeMode === 'light' ?  '/images/svgs/backArrow.svg' : '/images/svgs/backArrow-dark.svg' }`} onClick={() => navigate('/settings')} />
                                    </BackArrowMobile>
                                </ArrowGrid>
                                <AccountGrid xs={8} >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '16px', fontFamily: 'Roboto Slab', fontWeight: 600, lineHeight: '22.4px' }}>Accounts</Typography>
                                    </Box>
                                </AccountGrid>
                            </Grid2>
                        </GridWrapper>
                        {/* Rendering setting content here */}
                        <SettingsContent/>
                    </>
                </Box>
                :
                <MainWrapper>
                    <InnerSideWrapper>
                        <InnerSideNav />
                    </InnerSideWrapper>
                    <SettingsContent/>
                </MainWrapper>

            }
        </>

    )
}

export default SettingsPage;