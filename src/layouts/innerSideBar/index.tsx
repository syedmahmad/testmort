import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { List, Tooltip } from '@mui/material';
import { homeDummyData, settingsDummyData } from "../../dummyData";
import { 
    InnerSideBarWrapper, ButtonWrapper , PlusIcon, InnerSideBarButton, Icons,
    TypographyBox, IconWrapper, TypographyHeading, Typographyid, TypographyHeadingSimple,
    CustomeDivider, SimpleDivider, 
} from "./innerSideBar.style";
import useSettings from "../../hook/useSettings";
import ImportFileModal from "../../components/allModals/importFileModal";

const InnerSideNav = (props: any) => {
    const { themeMode } = useSettings();
    const location = useLocation();
    const navigate = useNavigate();
    const [ activeList, setActiveList ] = useState('');
    const listItems = location.pathname === '/home' ? homeDummyData.home : settingsDummyData.settings;
    const {
        open,
        handleOpen,
        handleClose,
        handleOpenDelete
    } = props;

    useEffect(() => {
        if(location.pathname.includes('/home'))
        {
            setActiveList(homeDummyData.home[0].title);
        } else if (location.pathname === '/account')
        {
            setActiveList(settingsDummyData.settings[0].title);
        }else if(location.pathname === '/archive'){
            setActiveList(settingsDummyData.settings[5].title);
        }
        else if(location.pathname === '/teams'){
            setActiveList(settingsDummyData.settings[1].title);
        }
        else if(location.pathname === '/integration'){
            setActiveList(settingsDummyData.settings[3].title);
        }
        else if(location.pathname === '/notification'){
            setActiveList(settingsDummyData.settings[4].title);
        }
        else {
            setActiveList(homeDummyData.home[0].title);   
        }
    }, [location.pathname]);

    const handleClick = (item: any) => {
        setActiveList(item.title)
        if (item.url !== undefined)
        {
            navigate(item.url);
        }
    }
    
    return(
        <>
            <InnerSideBarWrapper pathname={location.pathname}>
                {location.pathname.includes('/home') && (
                    <ButtonWrapper startIcon={<PlusIcon src="/images/svgs/add.svg" />} onClick={() => handleOpen()}>
                        New Loan
                    </ButtonWrapper>
                )}
                <List>
                    {listItems.map((item: any) => (
                        <>
                            <InnerSideBarButton onClick={() => handleClick(item)} pathname={location.pathname}>
                                <TypographyBox active={activeList === item.title}>
                                    {activeList === item.title ? <TypographyHeading>{item.title}</TypographyHeading> : <TypographyHeadingSimple>{item.title}</TypographyHeadingSimple>}
                                    {location.pathname.includes('/home') && (<Typographyid>{item.id}</Typographyid>)}
                                </TypographyBox>
                                {location.pathname === '/home' && activeList === item.title && (
                                    <IconWrapper>
                                         <Tooltip
                                            title="Archive"
                                            arrow
                                            placement="top"
                                         >
                                        <Icons src={`${themeMode === 'light' ? '/images/svgs/innerArchive.svg': '/images/svgs/archive-dark.svg'}`} />
                                        </Tooltip>
                                        <Tooltip
                                            title="Refresh"
                                            arrow
                                            placement="top"
                                         >
                                        <Icons src={`${themeMode === 'light' ? '/images/svgs/Sync.svg' : '/images/svgs/Sync-dark.svg'}`} />
                                        </Tooltip>
                                        <Tooltip
                                            title="Delete"
                                            arrow
                                            placement="top"
                                         >
                                        <Icons src={`${themeMode === 'light' ? '/images/svgs/trash.svg' : '/images/svgs/trash-dark.svg'}`} onClick={() => handleOpenDelete()}/>
                                        </Tooltip>
                                    </IconWrapper>
                                )}
                            </InnerSideBarButton>
                            {activeList === item.title ? <CustomeDivider /> : <SimpleDivider />}
                        </>
                    ))}
                </List>
            </InnerSideBarWrapper>
            <ImportFileModal open={open} handleClose={handleClose}/>
         </>   
    )
};
export default InnerSideNav;