import React from "react";
import { ModalFooterWrapper, FooterButtonWrapper, CancelBtn, ImportBtn} from "./modal.footer.style";

const ModalFooter = ({ cancelButtonText = '', actionButtonText = '', handleClose}: any) => {
    return(
    <>
    <ModalFooterWrapper>
        {/* @ts-ignore */}
       <FooterButtonWrapper cancelButtonText={cancelButtonText} actionButtonText={actionButtonText}>
            {cancelButtonText !== '' && (
                <CancelBtn onClick={() => handleClose()}>
                    {cancelButtonText} 
                </CancelBtn>
            )}
            {actionButtonText !== '' && (
                <ImportBtn>
                    {actionButtonText}
                </ImportBtn>
            )}
       </FooterButtonWrapper>
    </ModalFooterWrapper>
    </>
    )
}

export default ModalFooter;