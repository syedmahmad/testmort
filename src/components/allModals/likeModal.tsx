import React from "react";
import ModalBox from "../common/modal";
import { ModalBodyWrapper, ModalTextField } from "./allModals.style";
import useSettings from "../../hook/useSettings";

const LikeModal = ({openFeedBack, handleCloseFeedBack } :any) => {
    const { themeMode } = useSettings();
    return(
    <>
      {/* Modal Box for Like Click */}
      <ModalBox
                open={openFeedBack}
                handleClose={handleCloseFeedBack}
                width="512px"
                showLikeIcon={`${themeMode === 'light' ? '/images/svgs/like-black.svg' : '/images/svgs/like-white.svg'}`}
                crossIcon='1'
                headerText='Provide Feedback Here'
                actionButtonText="Send Feedback"
            >
                {/* @ts-ignore */}
                <ModalBodyWrapper header={true}>
                    <ModalTextField multiline placeholder="What do you like about the response?" minRows={10} />
                </ModalBodyWrapper>
            </ModalBox>

    </>
    )
}
export default LikeModal;