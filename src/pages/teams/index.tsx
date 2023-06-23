import React from "react";
import { Typography } from "@mui/material";
import InnerSideNav from '../../layouts/innerSideBar';
import {
    MainWrapper, InnerSideWrapper, CardWrapper, CardWrapperMain
    , CardContentWrapper, CardTitle, 
} from "../settings/settings.style";
import useSettings from "../../hook/useSettings";
import { TeamsPageBg } from "./teams.style";
import useCollapse from "../../hook/useCollapsed";


const TeamsPage = () => {
    const { themeMode } = useSettings();
    const {collapsed} = useCollapse();
    return (
        <MainWrapper>
            <InnerSideWrapper>
                <InnerSideNav />
            </InnerSideWrapper>
            {/* @ts-ignore */}
            <TeamsPageBg themeMode={themeMode} collapsed={collapsed}>
                <CardWrapperMain>
                    <CardWrapper>
                        <CardContentWrapper >
                            <CardTitle> Coming Soon </CardTitle>
                        </CardContentWrapper>

                    </CardWrapper>
                </CardWrapperMain>
            </TeamsPageBg>
        </MainWrapper>
    )
}

export default TeamsPage;