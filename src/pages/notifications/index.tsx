import React from "react";
import InnerSideNav from '../../layouts/innerSideBar';
import {
    MainWrapper, InnerSideWrapper, CardWrapper, CardWrapperMain
    , CardContentWrapper, CardTitle, 
} from "../settings/settings.style";
import { NotificationPageBg } from "./notification.style";
import useSettings from "../../hook/useSettings";
import useCollapse from "../../hook/useCollapsed";


const NotificationPage = () => {
    const { themeMode } = useSettings();
    const {collapsed} = useCollapse();
    return (
        <MainWrapper>
            <InnerSideWrapper>
                <InnerSideNav />
            </InnerSideWrapper>
            {/* @ts-ignore */}
            <NotificationPageBg themeMode={themeMode} collapsed={collapsed}>
                <CardWrapperMain>
                    <CardWrapper>
                        <CardContentWrapper >
                            <CardTitle> Coming Soon </CardTitle>
                        </CardContentWrapper>
                    </CardWrapper>
                </CardWrapperMain>
            </NotificationPageBg>
        </MainWrapper>
    )
}

export default NotificationPage;