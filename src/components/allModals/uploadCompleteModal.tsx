import React from "react";
import ModalBox from "../common/modal";
import { ModalBodyWrapper, TimeIcon, UplaodTextComplete, UploadWrapper } from "./allModals.style";
const UploadCompleteModal = ({open, handleClose}: any)=> 
{

    return (
        <>
          {/* Upload Complete Modal */}
          <ModalBox
                open={open}
                handleClose={handleClose}
                width="512px"
                cancelButtonText="Ok"
                actionButtonText=""
                headerText=""
            >
                {/* @ts-ignore */}
                <ModalBodyWrapper header={true}>
                    <UploadWrapper >
                        <TimeIcon src="/images/svgs/tick.svg" />
                    </UploadWrapper>
                    <UplaodTextComplete>
                         The file has been successfully uploaded.
                    </UplaodTextComplete>
                </ModalBodyWrapper>
            </ModalBox>

        
        </>
    )

}
export default UploadCompleteModal;