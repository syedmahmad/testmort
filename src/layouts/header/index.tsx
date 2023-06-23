import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
   Box, Typography, Unstable_Grid2 as Grid2, Popover, List, ListItem, ListItemButton,
   ListItemIcon, ListItemText
} from "@mui/material";
import {
   HeaderComponent, LogoComponent, ButtonComponent, HeaderButton, ButtonInnerComponent,
   PlusBtn, DownArrowIcon, PlusBtnIcon, OuterBox, UsernameBox, Username, ArrowIconWrapper
   , HeaderRightIcon, HeaderIconWrapper
} from './header.style';
import useSettings from "../../hook/useSettings";
import HeaderMobile from "./headerMobile";
import GuidesModal from "../../components/allModals/guidesModal";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ props }: any) => {

   const { isAuthenticated, logout, user} = useAuth0();   
   const { themeMode, handleToggleDrawer } = useSettings();
   const [isSmallScreen, setisSmallScreen] = useState(false);
   const navigate = useNavigate();
   const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
   const [openModal,setOpenModal] = useState(false);
   const handleopenModal = ()=> {
      setOpenModal(!openModal);
    }
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
   
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const location = useLocation();
   return (
      <>
         {isSmallScreen ?
            <HeaderMobile /> :
            <HeaderComponent>
               <Grid2 container columns={12}>
                  <Grid2 md={2.8} xs={2.8}>
                     <Box>
                        <LogoComponent src={`${themeMode === 'light' ? '/images/svgs/logo-light.svg' : '/images/svgs/logo-dark.svg'}`} />
                     </Box>
                  </Grid2>
                  <Grid2 md={6.5} xs={7.5}>
                     <ButtonComponent>
                        <ButtonInnerComponent>
                           {/* @ts-ignore */}
                           <HeaderButton variant="contained" active={location.pathname.includes('/loans')} themeMode={themeMode} onClick={() => navigate("home/loans")}>
                              LOANS
                           </HeaderButton>
                           {/* @ts-ignore */}
                           <HeaderButton variant="contained" active={location.pathname.includes('/fnma')} themeMode={themeMode} onClick={() => navigate("home/fnma")}>
                              FNMA
                           </HeaderButton>
                           {/* @ts-ignore */}
                           <HeaderButton variant="contained" active={location.pathname.includes('/fhlmcs')} themeMode={themeMode} onClick={() => navigate("home/fhlmc")}>
                              FHLMC
                           </HeaderButton>
                           {/* @ts-ignore */}
                           <HeaderButton variant="contained" active={location.pathname.includes('/fha')} themeMode={themeMode} onClick={() => navigate("home/fha")}>
                              FHA
                           </HeaderButton>
                           <PlusBtnIcon onClick={handleopenModal}>
                              <PlusBtn src="/images/svgs/plus.svg" />
                           </PlusBtnIcon>
                        </ButtonInnerComponent>
                     </ButtonComponent>
                  </Grid2>
                  <Grid2 md={2.7} xs={1.7}>
                     <OuterBox onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}>
                        <UsernameBox>
                           <Username>{user?.name}</Username>
                           <Typography sx={{ fontFamily: "'DM Sans', sans-serif" }}>Super Admin</Typography>
                        </UsernameBox>
                        <ArrowIconWrapper>
                           <DownArrowIcon src={`${themeMode === 'light' ? '/images/svgs/DownArrow.svg' : '/images/svgs/DownArrow-dark.svg'}`} />
                        </ArrowIconWrapper>
                     </OuterBox>
                     <HeaderIconWrapper themeMode={themeMode}>
                        <HeaderRightIcon src={`${themeMode === 'light' ? '/images/svgs/rightNavIcon.svg' : '/images/svgs/rightNavIcon-dark.svg'}`} onClick={() => handleToggleDrawer()} themeMode={themeMode} />
                     </HeaderIconWrapper>
                  </Grid2>
               </Grid2>
               <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'right',
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
                                 }
                              }}
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
            </HeaderComponent>
         }
         <GuidesModal openModal={openModal} setOpenModal={setOpenModal} />
      </>
   )
}

export default Header;