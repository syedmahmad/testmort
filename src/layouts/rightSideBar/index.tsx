import React, { useState, useEffect } from "react";
import TopButton from "./components/topButton/topButton";
import ActionButton from "./components/actionButton/actionButton";
import {
  ButtonBoxWrapper, RightNavComponent, ListItemBoxWrapper, ActionBtnBoxWrapper,
  DoucmentBtn, DoucmentBtnIcon, DoucmentCrossIcon, DocumentHeader, DocumentIcon
} from "./rightNavBar.style";
import ListItems from "./components/listItem/listItem";
import useSettings from "../../hook/useSettings";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";

const RightNavBar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { themeMode, openDrawer, setOpenDrawer, handleToggleDrawer} = useSettings();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {isLargeScreen ?
        <RightNavComponent>
          <Box
            sx={{
              height: 'calc(100vh - 254px)',
              overflow: 'auto'
            }}
          >
          <ButtonBoxWrapper>
            <TopButton />
          </ButtonBoxWrapper>
          <ListItemBoxWrapper>
            <ListItems />
          </ListItemBoxWrapper>
          </Box>
          <ActionBtnBoxWrapper>
            <ActionButton />
          </ActionBtnBoxWrapper>
        </RightNavComponent>
        :
        <Drawer
          variant="temporary"
          open={openDrawer}
          onClose={ () => setOpenDrawer(!openDrawer)}
          anchor="right"
          PaperProps={{
            sx: {
              width: `${downSm ? '100vw' : '420px'}`
            }
          }}
        >
          {/* Docuement Header */}
          <DocumentHeader>
              <Box >
                <DoucmentBtn startIcon={<DoucmentBtnIcon src={`${themeMode === 'light' ? '/images/svgs/headerDoc.svg' : '/images/svgs/headerDoc-dark.svg'}`} />} > Documents </DoucmentBtn>
              </Box>
              <DocumentIcon>
                <DoucmentCrossIcon src={`${themeMode === 'light' ? '/images/svgs/cross.svg' : '/images/svgs/cross-dark.svg'}`} onClick={handleToggleDrawer} />
              </DocumentIcon>
          </DocumentHeader>
          <RightNavComponent>
            <Box
              sx={{
                height: 'calc(100vh - 254px)',
                overflow: 'scroll'
              }}
            >
            <ButtonBoxWrapper>
              <TopButton />
            </ButtonBoxWrapper>
            <ListItemBoxWrapper>
              <ListItems />
            </ListItemBoxWrapper>
            </Box>
            <ActionBtnBoxWrapper>
              <ActionButton />
            </ActionBtnBoxWrapper>
          </RightNavComponent>
        </Drawer>
      }
  
    </>

  )
};

export default RightNavBar;