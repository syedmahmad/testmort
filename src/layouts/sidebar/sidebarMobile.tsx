import React, { useState } from "react";
import {
    Drawer, Box, Typography, Popover, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";
import {
    SideNavComponent, SideNavIconComponent, SideNavIconImageComponent, FontComponent, 
    HoveredElement, SimpleDivider, DrawerMenuIcon, SuperAdmin
} from './sidebar.style'
import { useNavigate } from "react-router";
import useSettings from "../../hook/useSettings";
import { OuterBox, UsernameBox, Username, ArrowIconWrapper, DownArrowIcon, HeaderRightIcon } from "../header/header.style";
import { useAuth0 } from "@auth0/auth0-react";

const SideBarMobile = () => {
    const { isAuthenticated, logout, user} = useAuth0();  
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const navigate = useNavigate();
    const { onToggleMode, themeMode, openDrawerMobile, setOpenDrawerMobile, handleToggleDrawerMobile} = useSettings();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
     };
  
     const handleClose = () => {
        setAnchorEl(null);
     };
  
     const open = Boolean(anchorEl);

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={openDrawerMobile}
            onClose={ () => setOpenDrawerMobile(!openDrawerMobile)}
            sx={{ width: 355 }}
        >
            <SideNavComponent>
                <Box sx={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center', padding: '15px 24px', height: 'calc(100% -15px)'}}>
                    <Box>
                        <Typography sx={{fontSize: '24px', fontWeight: 500, lineHeight: '33.6px', fontFamily: 'Roboto Slab'}}>Menu</Typography>
                    </Box>
                    <Box>
                         <DrawerMenuIcon src={`${themeMode === 'light' ? '/images/svgs/drawer-menu.svg' : '/images/svgs/drawer-menu-dark.svg'}`} onClick={handleToggleDrawerMobile}/>
                    </Box>
                </Box>
                <OuterBox onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}>
                <UsernameBox>
                     <Username>{user?.name}</Username>
                     <SuperAdmin >Super Admin</SuperAdmin>
                  </UsernameBox>
                  <ArrowIconWrapper>
                     <DownArrowIcon src={`${themeMode === 'light' ? '/images/svgs/DownArrow.svg' : '/images/svgs/DownArrow-dark.svg'}`}/>
                  </ArrowIconWrapper>
                  </OuterBox>
                <SideNavIconComponent onClick={() => navigate('/home')}>
                {/* @ts-ignore */}
                <HoveredElement themeMode={themeMode}>
                    <SideNavIconImageComponent src={`${themeMode === 'light' ?'/images/svgs/home.svg' : '/images/svgs/home-dark.svg'}`} />
                    <FontComponent>Home</FontComponent>
                </HoveredElement>
                </SideNavIconComponent>
                <SimpleDivider />
                <SideNavIconComponent onClick={() => navigate('/archive')}>
                    {/* @ts-ignore */}
                    <HoveredElement themeMode={themeMode}>
                        <SideNavIconImageComponent src={`${ themeMode === 'light' ? '/images/svgs/archive.svg' : '/images/svgs/collection-dark.svg'}`} />
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
                        <SideNavIconImageComponent src={`${themeMode === 'light' ? '/images/svgs/setting.svg' : '/images/svgs/setting-dark.svg'}`} />
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
            </SideNavComponent>
            <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
               >
                  <List>
                     <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              <HeaderRightIcon src={`${themeMode === 'light' ? '/images/svgs/edit.svg' : '/images/svgs/edit-dark.svg'}`} themeMode={themeMode} />
                           </ListItemIcon>
                           <ListItemText
                              primary="Edit Profile"
                              sx={{
                                 '& .MuiTypography-root': {
                                    fontFamily: 'Bai Jamjuree',
                                    fontWeight: 500,
                                    fontSize: '16px'
                              }}}
                           />
                        </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                           <HeaderRightIcon src={`${themeMode === 'light' ? '/images/svgs/logout.svg' : '/images/svgs/logout-dark.svg'}`} themeMode={themeMode} />
                           </ListItemIcon>
                           {isAuthenticated &&      
                            (<ListItemText
                              primary="Log Out"
                              sx={{
                                 '& .MuiTypography-root': {
                                    fontFamily: 'Bai Jamjuree',
                                    fontWeight: 500,
                                    fontSize: '16px'
                                 }
                              }}
                              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                           />)
                        }
                        </ListItemButton>
                     </ListItem>
                  </List>
               </Popover>
        </Drawer>
    )
}
export default SideBarMobile;