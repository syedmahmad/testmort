import React, { useState, useEffect } from "react";
import { Box, ListItem, ListItemIcon, } from "@mui/material";
import InnerSideNav from '../../layouts/innerSideBar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
    ArchivePageWrapper, ArchivePageInnerNav, ArchivePageBg, MainDiv,
    Heading, ListItemWrapper, MainListItem, ListItemMonths, ListItemTitle, MonthListWrapper, MonthOfYearWrapper,
    MonthOfYearDivider, MonthOfYearDividerDark, ListId, ArchivePageBgMobile
} from "./archive.style";
import { monthsOfYear, years } from "../../dummyData";
import ArrowIcon from '../../assets/arrow';
import ArrowDownIcon from "../../assets/arrowDown";
import Reload from "../../assets/reload";
import useSettings from "../../hook/useSettings";
import useCollapse from "../../hook/useCollapsed";

const ArchivePage = () => {

    const { themeMode } = useSettings();
    const [activeYear, setActiveYear] = useState<any>({
        2: true
    });

    const [activeMonthOfYear, setActiveMonthOfYear] = useState<any>({
        2: true
    });

    const [isSmallScreen, setisSmallScreen] = useState(false);
    const { collapsed } = useCollapse();
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

    const clickHandler = (id: any) => {
        if (activeYear.hasOwnProperty(id)) {
            setActiveYear({
                ...activeYear,
                [id]: !activeYear[id],
            });
        } else {
            setActiveYear({ [id]: true })
        }
    }

    const clickHandlerMonth = (id: any) => {
        if (activeMonthOfYear.hasOwnProperty(id)) {
            setActiveMonthOfYear({
                ...activeMonthOfYear,
                [id]: !activeMonthOfYear[id],
            });
        } else {
            setActiveMonthOfYear({ [id]: true })
        }
    }

    return (
        <>
            {!isSmallScreen ? (
                <ArchivePageWrapper>
                    <ArchivePageInnerNav>
                        <InnerSideNav />
                    </ArchivePageInnerNav>
                    {/* @ts-ignore */}
                    <ArchivePageBg themeMode={themeMode} collapsed={collapsed}>
                        <MainDiv>
                            <Heading>
                                Archive
                            </Heading>
                            <Box>
                                <MainListItem >
                                    {years.map((item: any, id: number) => (
                                        <ListItemWrapper>
                                            <ListItemButton onClick={() => clickHandler(id)}>
                                                <ListItemIcon>
                                                    {activeYear[id] ? <ArrowDownIcon /> : <ArrowIcon />}
                                                </ListItemIcon>
                                                <ListItemTitle variant="body1"> {item.title} </ListItemTitle>
                                            </ListItemButton>
                                            {activeYear[id] && (
                                                <MonthListWrapper>
                                                    {monthsOfYear.map((item: any, id: number) => (
                                                        <>
                                                            <ListItemMonths onClick={() => clickHandlerMonth(id)}>
                                                                <ListItemText>{item.title}</ListItemText>
                                                                <ListItemIcon>
                                                                    {activeMonthOfYear[id] ? <ArrowDownIcon width='16' height='16' /> : <ArrowIcon width='16' height='16' />}
                                                                </ListItemIcon>
                                                            </ListItemMonths>
                                                            {item.ids.map((item: any) => (
                                                                <>
                                                                    {activeMonthOfYear[id] && (
                                                                        // @ts-ignore
                                                                        <MonthOfYearWrapper themeMode={themeMode}>
                                                                            <ListItem>
                                                                                <ListId>{item.title}</ListId>
                                                                                <ListItemIcon>
                                                                                    <Reload />
                                                                                </ListItemIcon>
                                                                            </ListItem>
                                                                            {themeMode === 'light' ? <MonthOfYearDivider /> : <MonthOfYearDividerDark />}
                                                                        </MonthOfYearWrapper>

                                                                    )}
                                                                </>
                                                            ))}
                                                        </>
                                                    ))}
                                                </MonthListWrapper>
                                            )}
                                        </ListItemWrapper>
                                    ))}

                                </MainListItem>
                            </Box>
                        </MainDiv>

                    </ArchivePageBg>
                </ArchivePageWrapper>
            ) : (
                <ArchivePageBgMobile themeMode={themeMode} >
                    <MainListItem >
                        {years.map((item: any, id: number) => (
                            <ListItemWrapper>
                                <ListItemButton onClick={() => clickHandler(id)}>
                                    <ListItemIcon>
                                        {activeYear[id] ? <ArrowDownIcon /> : <ArrowIcon />}
                                    </ListItemIcon>
                                    <ListItemTitle variant="body1"> {item.title} </ListItemTitle>
                                </ListItemButton>
                                {activeYear[id] && (
                                    <MonthListWrapper>
                                        {monthsOfYear.map((item: any, id: number) => (
                                            <>
                                                <ListItemMonths onClick={() => clickHandlerMonth(id)}>
                                                    <ListItemText>{item.title}</ListItemText>
                                                    <ListItemIcon>
                                                        {activeMonthOfYear[id] ? <ArrowDownIcon width='16' height='16' /> : <ArrowIcon width='16' height='16' />}
                                                    </ListItemIcon>
                                                </ListItemMonths>
                                                {item.ids.map((item: any) => (
                                                    <>
                                                        {activeMonthOfYear[id] && (
                                                            // @ts-ignore
                                                            <MonthOfYearWrapper themeMode={themeMode}>
                                                                <ListItem>
                                                                    <ListId>{item.title}</ListId>
                                                                    <ListItemIcon>
                                                                        <Reload />
                                                                    </ListItemIcon>
                                                                </ListItem>
                                                                {themeMode === 'light' ? <MonthOfYearDivider /> : <MonthOfYearDividerDark />}
                                                            </MonthOfYearWrapper>

                                                        )}
                                                    </>
                                                ))}
                                            </>
                                        ))}
                                    </MonthListWrapper>
                                )}
                            </ListItemWrapper>
                        ))}

                    </MainListItem>
                </ArchivePageBgMobile>
            )}


        </>
    )
}

export default ArchivePage;