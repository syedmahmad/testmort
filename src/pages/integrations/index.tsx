import React from "react";
import InnerSideNav from '../../layouts/innerSideBar';
import {
    MainWrapper, InnerSideWrapper, CardWrapper, CardWrapperMain
    , CardContentWrapper, CardTitle, 
} from "../settings/settings.style";
import { IntegrationPageBg } from "./integration.style";
import useSettings from "../../hook/useSettings";
import useCollapse from "../../hook/useCollapsed";


const IntegrationPage = () => {
    const { themeMode } = useSettings();
    const {collapsed} = useCollapse()
    return (
        <MainWrapper>
            <InnerSideWrapper>
                <InnerSideNav />
            </InnerSideWrapper>
            {/*@ts-ignore  */}
            <IntegrationPageBg themeMode={themeMode} collapsed={collapsed}>
                <CardWrapperMain>
                    <CardWrapper>
                        <CardContentWrapper >
                            <CardTitle> Coming Soon </CardTitle>
                        </CardContentWrapper>
                    </CardWrapper>
                </CardWrapperMain>
            </IntegrationPageBg>
        </MainWrapper>
    )
}

export default IntegrationPage;