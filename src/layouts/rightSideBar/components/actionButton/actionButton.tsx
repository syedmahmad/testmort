import { Box } from "@mui/material";
import React from "react";
import {
     ActionWrapper, ActionWrapperInner, ActionWrapperFont, SaveButton,
     SaveIcon, DiscardIcon, DiscardButton, ButtonWrapper
} from "./actionButton.style";
import useSettings from "../../../../hook/useSettings";

const ActionButton = ()=>
{
    const { themeMode } = useSettings();
    return(
        <>
        <ActionWrapper>
            <ActionWrapperInner>
                <ActionWrapperFont>No document selected </ActionWrapperFont>
            </ActionWrapperInner>
            <ButtonWrapper>
            <SaveButton startIcon={<SaveIcon src={`${themeMode === 'light' ? 'images/svgs/save.svg' : 'images/svgs/save-dark.svg'}`}/>}>
                Save Changes
            </SaveButton>
            <DiscardButton startIcon={<DiscardIcon src={`${themeMode === 'light' ? 'images/svgs/trash.svg' : 'images/svgs/trash-dark.svg'}`}/>}>
                Discard
            </DiscardButton>
            </ButtonWrapper>
        </ActionWrapper>
        </>
    )
}
export default ActionButton;