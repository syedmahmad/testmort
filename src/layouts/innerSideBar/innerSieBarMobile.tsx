import React from "react";
import { Box,  Typography } from '@mui/material';
import useSettings from "../../hook/useSettings";
import { useLocation } from "react-router-dom";
import { homeDummyData, settingsDummyData } from "../../dummyData";
import { 
      InnerSideBarButton, InnerSideBarWrapper,TypographyBox, Typographyid, 
      IconWrapper,Icons, TypographyHeadingSimple, 
      SimpleDivider, CustomList, ButtonWrapper, PlusIcon, NewLoanBtnWrapper, NewLoanMobileText
} from "./innerSideBar.style";
import ImportFileModal from "../../components/allModals/importFileModal";

const MobileNav = (props :any) => {
    const { themeMode } = useSettings();
    const location = useLocation();
    const listItems = location.pathname === '/home' ? homeDummyData.home : settingsDummyData.settings;
    const {
        handleOpen,
        handleClose,
        handleOpenDelete,
        setShowMessages,
        showMessages
    } = props;


    return(
        <>
        <Box>
            <InnerSideBarWrapper pathname={location.pathname}>
                <CustomList>
                    {listItems.map((item: any) => (
                        <>
                            <InnerSideBarButton onClick={() => setShowMessages(!showMessages) } pathname={location.pathname}>
                                <TypographyBox>
                                     <TypographyHeadingSimple>{item.title}</TypographyHeadingSimple>
                                    {location.pathname === '/home' && (<Typographyid>{item.id}</Typographyid>)}
                                </TypographyBox>
                                {location.pathname === '/home' && (
                                    <IconWrapper>
                                        <Icons src={`${themeMode === 'light' ? '/images/svgs/innerArchive.svg': '/images/svgs/archive-dark.svg'}`} />
                                        <Icons src={`${themeMode === 'light' ? '/images/svgs/Sync.svg' : '/images/svgs/Sync-dark.svg'}`} />
                                        <Icons src={`${themeMode === 'light' ? '/images/svgs/trash.svg' : '/images/svgs/trash-dark.svg'}`} onClick={() => handleOpenDelete()}/>
                                    </IconWrapper>
                                )}
                            </InnerSideBarButton>
                            <SimpleDivider />
                        </>
                    ))}
                </CustomList>
            </InnerSideBarWrapper>
            <NewLoanBtnWrapper >
                <ButtonWrapper startIcon={<PlusIcon src="/images/svgs/add.svg" />} onClick={() => handleOpen()}>
                        <NewLoanMobileText>New Loan</NewLoanMobileText> 
                </ButtonWrapper>
            </NewLoanBtnWrapper>
            <ImportFileModal />
        </Box>
        </>
    )
}
export default MobileNav;