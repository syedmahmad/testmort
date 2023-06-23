import React from "react";
import ModalBox from "../common/modal";
import { ModalBodyWrapper, BodyText, TextFieldWrapper, BodySubText } from "./allModals.style";
 
const NewLoanFileModal = ({open, handleClose} :any) => {
    return(
        <>
        {/* Modal For add new loan file  */}
            <ModalBox
                open={open}
                handleClose={handleClose}
                width="512px"
                cancelButtonText="Cancel"
                actionButtonText="Import"
                headerText="Add New Loan File"
            >
                {/* @ts-ignore */}
                <ModalBodyWrapper header={true}>
                    <BodyText>Loan Number</BodyText>
                    <TextFieldWrapper id="outlined-basic" variant="outlined" />
                    <BodySubText>
                        They system will sync all documents you have access to per your user credentials.
                    </BodySubText>
                </ModalBodyWrapper>
            </ModalBox>
        </>
    )
}
export default NewLoanFileModal;