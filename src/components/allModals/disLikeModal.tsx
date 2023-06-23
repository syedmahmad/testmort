import React from "react";
import ModalBox from "../common/modal";
import FormControlLabel from '@mui/material/FormControlLabel';
import useSettings from "../../hook/useSettings";
import { FormGroupWrapper, ModalBodyWrapper, ModalTextField } from "./allModals.style";
import { Checkbox } from "@mui/material";
import UncheckIcon from "../../assets/uncheck";
import CheckIcon from "../../assets/check";

const DisLikeModal = ({openDisLikeFeedBack, handleCloseDisLikeFeedBack} :any)=> 
{
    const { themeMode } = useSettings();

    return(
    <>
        {/* Modal Box for DisLike Click */}
        <ModalBox
                open={openDisLikeFeedBack}
                handleClose={handleCloseDisLikeFeedBack}
                width="512px"
                showLikeIcon={`${themeMode === 'light' ? '/images/svgs/dislike-black.svg' : '/images/svgs/dislike-white.svg'}`}
                crossIcon='1'
                headerText='Provide Feedback Here'
                actionButtonText="Send Feedback"
            >
                {/* @ts-ignore */}
                <ModalBodyWrapper header={true}>
                    <ModalTextField multiline placeholder="What do you like about the response?" minRows={10} />
                    <FormGroupWrapper>
                        <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="This is harmfull/unsafe" />
                        <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="This isn' true" />
                        <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="This isn' true" />
                    </FormGroupWrapper>
                </ModalBodyWrapper>
            </ModalBox>

    </>
    )
}

export default DisLikeModal;