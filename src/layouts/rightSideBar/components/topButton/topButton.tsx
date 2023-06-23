import React from "react";
import {ButtonWrapperComponent, NewDocButton, ReSyncLoanButton, ResyncLoanText} from './topButton.style'
const TopButton = ()=>
{
    return(
        <>  
        <ButtonWrapperComponent>
            <NewDocButton >
                <ResyncLoanText sx={{ textTransform: 'capitalize' }}>
                    New Document
                </ResyncLoanText>
            </NewDocButton>
            <ReSyncLoanButton>
                <ResyncLoanText sx={{ textTransform: 'capitalize' }}>
                    Resync Loan
                </ResyncLoanText>
            </ReSyncLoanButton>
        </ButtonWrapperComponent>

        </>
    )
};
export default TopButton;