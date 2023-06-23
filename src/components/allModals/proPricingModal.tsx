import React from "react";
import { Box } from "@mui/material";
import ModalBox from "../common/modal";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from "@mui/material";
import UncheckIcon from "../../assets/uncheck";
import CheckIcon from "../../assets/check";
import { FormGroupWrapperPrice, ModalBodyWrapper, OffersBox, OffersText, PackageBtn, PackagePrice, PackageText, PlanText, PlanTextWrapper, PricingBoxMain, PricingBoxWrapper, SubscribeAdvanceBtn, SubscribeBtn } from "./allModals.style";


const ProPricingModal = ({openDelete, handleCloseDelete} :any) => {
    return(
    <>
                {/* Modal Box For Pro And Custom */}
            
                <ModalBox
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    width="512px"
                    crossIcon='1'
                    headerText='Pricing'
                    cancelButtonText= ""
                    actionButtonText=""
                >
                    {/* @ts-ignore */}
                    <ModalBodyWrapper header={true}>
                        <PlanTextWrapper>
                        <PlanText>Please choose your subscription plan</PlanText> 
                        </PlanTextWrapper>
                        <OffersBox>
                        <OffersText >
                            We offer flexible pricing plans to meet your needs and budget.
                            Choose from our Basic, Advanced plans to get the right level of service for you.
                            </OffersText> 
                        </OffersBox>
                        {/* Pricing Box */}
                        {/* Basic Pricing Box */}
                        <PricingBoxWrapper>
                            <PricingBoxMain>
                                <Box>
                                    <PackageText >
                                        Pro
                                    </PackageText>
                                <Box>
                                    <PackagePrice>
                                         Coming Soon
                                    </PackagePrice>
                                    </Box>
                                    <FormGroupWrapperPrice>
                                            <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="Up to 150 mortgage applications per month" />
                                            <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="Full access to mortgage dashboard features" />
                                            <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="Email and phone support" />
                                    </FormGroupWrapperPrice>
                                    {/* Button  wrapper box */}
                                    <PackageBtn>
                                        <SubscribeBtn variant="contained"> Subscribe Now </SubscribeBtn>
                                    </PackageBtn>
                                </Box>
                            </PricingBoxMain>
                            {/* Premium Pricing box */}
                            <PricingBoxMain>
                                <Box>
                                    <PackageText >
                                        Enterprise
                                    </PackageText>
                                <Box>
                                    <PackagePrice>
                                        Custome
                                    </PackagePrice>
                                    </Box>
                                    <FormGroupWrapperPrice>
                                            <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="Unlimited mortgage applications per month" />
                                            <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="Full access to mortgage dashboard features" />
                                            <FormControlLabel control={ <Checkbox icon={<UncheckIcon />} checkedIcon={<CheckIcon />}/> } label="Email and phone support" />
                                    </FormGroupWrapperPrice>
                                    {/* Button  wrapper box */}
                                    <PackageBtn>
                                        <SubscribeAdvanceBtn variant="contained"> Subscribe Now </SubscribeAdvanceBtn>
                                    </PackageBtn>
                                </Box>
                            </PricingBoxMain>
                    </PricingBoxWrapper>
                    </ModalBodyWrapper>
            </ModalBox>
    </>
    )
}

export  default ProPricingModal;