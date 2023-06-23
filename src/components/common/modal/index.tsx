import React from "react";
import ModalHeader from "./header";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalFooter from "./footer/inder";

const ModalBox = (props: any) => {
    const {
        height = '100vh',
        width,
        cancelButtonText = '',
        actionButtonText = '',
        showLikeIcon= '',
        crossIcon= '',
        headerText= '',
        handleClose,
        open,
        children
    } = props;

    return (
        
        <>
        
        <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         sx ={{
            height: `${height}`,
            width: `${width}`,  
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center'
        }}
        >
            <Box>
                {headerText && <ModalHeader showLikeIcon={showLikeIcon} crossIcon={crossIcon}  headerText={headerText} handleClose={handleClose}/>}
                     {children}
                {(cancelButtonText || actionButtonText) && (<ModalFooter cancelButtonText={cancelButtonText} actionButtonText={actionButtonText} handleClose={handleClose}/>)}
            </Box>
        </Modal>
        </>
    );
}

export default ModalBox;