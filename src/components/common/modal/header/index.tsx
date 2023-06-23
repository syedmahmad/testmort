import React from "react";
import useSettings from "../../../../hook/useSettings";
import {
    ModalHeaderWrapper, HeaderText, LikeIcon,
    LikeIconWrapper, CrossIcon
} from "./modal.header.style";
const ModalHeader = (props: any) => {
    const { themeMode } = useSettings();
    const { showLikeIcon, crossIcon, headerText , handleClose} = props;
    return (
        <>
            <ModalHeaderWrapper>
                <LikeIconWrapper>
                    {showLikeIcon && (<LikeIcon src={`${showLikeIcon}`} />)}
                    {headerText && (<HeaderText>
                        {headerText}
                    </HeaderText>)}
                </LikeIconWrapper>
                {crossIcon && (<CrossIcon src="/images/svgs/crossIcon.svg" onClick={()=> handleClose()}/>)}
            </ModalHeaderWrapper>
        </>
    )
}

export default ModalHeader;