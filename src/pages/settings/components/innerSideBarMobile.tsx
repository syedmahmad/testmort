import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileListWrapper, MobileListText, ArrowIcon, CustomMobileList } from '../settings.style';
import { settingsDummyData } from '../../../dummyData';
import useSettings from '../../../hook/useSettings';

const InnerSideBarMobileForSettingsPage = () => {
    const { themeMode } = useSettings();
    const navigate = useNavigate();

    return (
        <CustomMobileList >
            {settingsDummyData.settings.map((item: any, index: number) => (
                <>
                    <MobileListWrapper key={index} onClick={() => navigate(item?.url)}>
                        <MobileListText>
                            {item.title}
                        </MobileListText>
                        <ArrowIcon src={`${themeMode === 'light' ? '/images/svgs/Arrow - Down.svg' : '/images/svgs/arrow-dark.svg'}`} />
                    </MobileListWrapper>
                </>
            ))}
        </CustomMobileList>
    )
}

export default InnerSideBarMobileForSettingsPage