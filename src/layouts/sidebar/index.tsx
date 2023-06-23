import React, { useState } from "react";
import {
    SideNavComponent, SideNavIconComponent, SideNavIconImageComponent, FontComponent, 
    HoveredElement, SimpleDivider, MenuFontComponent
} from './sidebar.style'
import { useNavigate } from "react-router";
import useSettings from "../../hook/useSettings";
import useCollapse from "../../hook/useCollapsed";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const SideBar = () => {
    const navigate = useNavigate();
    const { onToggleMode, themeMode } = useSettings();
    const { pathname } = useLocation();
    const {collapsed, handleClick} = useCollapse();
    
    return (
        <>
                {/* @ts-ignore */}
            <SideNavComponent collapsed={collapsed}>
                {/* @ts-ignore */}
                <SideNavIconComponent onClick={() => navigate('/home')} collapsed={collapsed}>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        {pathname=== '/home' ?  <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/home-active.svg' : '/images/svgs/home-dark.svg'}`} /> :  <SideNavIconImageComponent src={`${themeMode === 'light' ?'/images/svgs/home.svg' : '/images/svgs/home-dark.svg'}`} /> }
                        <FontComponent>Home</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent onClick={() => navigate('/archive')}>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        {pathname === '/archive' ? <SideNavIconImageComponent src={`${ themeMode === 'light' ? '/images/svgs/archive-active.svg' : '/images/svgs/collection-dark.svg'}`} /> : <SideNavIconImageComponent src={`${ themeMode === 'light' ? '/images/svgs/archive.svg' : '/images/svgs/collection-dark.svg'}`} />}
                        <FontComponent>Archive</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent onClick={() => onToggleMode()}>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/moon.svg' : '/images/svgs/moon-dark.svg'}`} />
                        <FontComponent>{themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/call.svg' : '/images/svgs/call-dark.svg'}`} />
                        <FontComponent>Help Center</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/invoice.svg' : '/images/svgs/invoice-dark.svg'}`} />
                        <FontComponent>Billing</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent onClick={() => navigate('/settings')}>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        {pathname === '/account' ? <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/setting-active.svg' : '/images/svgs/setting-dark.svg'}`} />: <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/setting.svg' : '/images/svgs/setting-dark.svg'}`} />}
                        <FontComponent>Settings</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/Group.svg': '/images/svgs/powerups-dark.svg'}`} />
                        <FontComponent>Power Ups</FontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
                {/* @ts-ignore */}
                <SideNavIconComponent clicked={collapsed} onClick={handleClick} sx={{marginTop: '15vh'}}>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode} >
                       <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/moreOption.svg' : '/images/svgs/moreOption-dark.svg'}`} /> 
                        <MenuFontComponent>Menu Option</MenuFontComponent>
                    </HoveredElement>
                </SideNavIconComponent>
            </SideNavComponent>
        </>
    )
}
export default SideBar;