import React from "react";
import ModalBox from "../common/modal";
import { BodySubText, ModalBodyWrapper, TimeIcon, UplaodText, UploadWrapper } from "./allModals.style";
const ImportFileModal = ({open, handleClose } :any) =>
{
    return(
        <>
           {/* Modal For Importing loan with  file */}

            <ModalBox
                open={open}
                handleClose={handleClose}
                width="512px"
                cancelButtonText="Cancel"
                actionButtonText=""
                headerText="Importing Loan File"
            >
                {/* @ts-ignore */}
                <ModalBodyWrapper header={true}>
                    <UploadWrapper >
                        <TimeIcon src="/images/svgs/uploading.svg" />
                        <BodySubText>
                            Time Remaingin : 
                        </BodySubText>
                    </UploadWrapper>
                    <UplaodText>Please do not close this window until the upload is complete.</UplaodText>
                </ModalBodyWrapper>
            </ModalBox>

        </>
    )
}
export default ImportFileModal