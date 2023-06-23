import React, { useRef, useEffect } from "react";
import {
    Box, Typography, Unstable_Grid2 as Grid2, Button
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import RightNavBar from '../../layouts/rightSideBar';
import InnerSideNav from '../../layouts/innerSideBar';
import { messagesDummyData } from "../../dummyData";
import MicroPhone from "../../assets/microphone";
import useSettings from "../../hook/useSettings";

import {
    MainWrapper, InnerSideBarWrapper, HomePageBg, HomePageRightNav, LikeIcon, DisLikeIcon,
    EditIcon, AvatarIcon, MsgWrapper, AvatarWrapper, AvatarMain, QuestionWrapper, QuestionInnerWrapper
    , QuestionBody, AnswerWrapper, AnswerInnerWrapper, LikeIconWrapper, DisLikeIconWrapper, MsgBoxWrapper
    , PaperWrapper, IconButtonWrapper, InputBaseWrapper, VersionBox, VersionText, SendBtn, BackArrow,
    MobileHeader, BackArrowWrapper, ButtonWrapperMobile, VersionContainer, DownArrow
    ,SuggestionContainer, SuggestionInnerWrapper, Text, SuggestionBtnWrapper,SummaryBtn, IncomeBtn, LoanBtn
} from "./home.style";
import MobileNav from "../../layouts/innerSideBar/innerSieBarMobile";
import { ButtonComponent, ButtonInnerComponent, HeaderButton, HeaderIconWrapper, HeaderRightIcon } from "../../layouts/header/header.style";
import DeleteModal from "../../components/allModals/deleteModal";
import LikeModal from "../../components/allModals/likeModal";
import DisLikeModal from "../../components/allModals/disLikeModal";
import useCollapse from "../../hook/useCollapsed";

const Home = () => {
    
    const { themeMode } = useSettings();
    const ref = useRef<any>();
    const [open, setOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [showMessages, setShowMessages] = React.useState(true)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const lastIndex = messagesDummyData.message.length - 1;
    const [openFeedBack, setOpenFeedBack] = React.useState(false);
    const handleOpenFeedBack = () => setOpenFeedBack(true);
    const handleCloseFeedBack = () => setOpenFeedBack(false);


    const [openDisLikeFeedBack, setOpenDisLikeFeedBack] = React.useState(false);
    const handleOpenDisLikeFeedBack = () => setOpenDisLikeFeedBack(true);
    const handleCloseDisLikeFeedBack = () => setOpenDisLikeFeedBack(false);

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const { handleToggleDrawer } = useSettings();
    const {collapsed} = useCollapse();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MainWrapper>
            {!isMobile ? (
                <InnerSideBarWrapper>
                    <InnerSideNav handleOpen={handleOpen} handleOpenDelete={handleOpenDelete} handleClose={handleClose} open={open} />
                </InnerSideBarWrapper>) : (
                <>
                    {!showMessages && (<MobileNav  handleClose={handleClose} open={open} setShowMessages={setShowMessages} showMessages={showMessages} /> )}
                </>
            )
            }

            {!isMobile && (
                <>
                    {/* @ts-ignore */}
                    <HomePageBg themeMode={themeMode} collapsed={collapsed}>
                        <MsgBoxWrapper>
                            {messagesDummyData?.message.map((item: any, index: number) => {
                                return (
                                    <MsgWrapper ref={index === lastIndex ? ref : null}>
                                        <AvatarWrapper >
                                            <AvatarMain >
                                                <AvatarIcon sx={{ background: 'transparent' }} src={`${item.type === 'question' ? '/images/svgs/profile-2.svg' : '/images/svgs/profile-1.svg'}`} />
                                            </AvatarMain>
                                        </AvatarWrapper>
                                        <QuestionWrapper >
                                            <QuestionInnerWrapper >
                                                <QuestionBody >
                                                    {item.body} {item.type === 'question' && <span style={{ marginLeft: '20px', marginTop: '4px', cursor: 'pointer' }}><EditIcon src={`${themeMode === 'light' ? 'images/svgs/edit-square.svg' : 'images/svgs/edit-square-dark.svg'}`} /></span>}
                                                </QuestionBody>
                                            </QuestionInnerWrapper>
                                        </QuestionWrapper>
                                        {item.type === 'answer' && (<AnswerWrapper>
                                            <AnswerInnerWrapper>
                                                <Grid2 container columns={12}>
                                                    <Grid2 xs={6}>
                                                        <LikeIconWrapper>
                                                            <LikeIcon src={`${themeMode === 'light' ? '/images/svgs/like.svg' : '/images/svgs/like-dark.svg'}`} onClick={() => handleOpenFeedBack()} />
                                                        </LikeIconWrapper>
                                                    </Grid2>
                                                    <Grid2 xs={6}>
                                                        <DisLikeIconWrapper >
                                                            <DisLikeIcon src={`${themeMode === 'light' ? '/images/svgs/dislike.svg' : '/images/svgs/dislike-dark.svg'}`} onClick={() => handleOpenDisLikeFeedBack()} />
                                                        </DisLikeIconWrapper>
                                                    </Grid2>
                                                </Grid2>
                                            </AnswerInnerWrapper>
                                        </AnswerWrapper>)}
                                    </MsgWrapper>
                                )
                            })}
                        </MsgBoxWrapper>
                        {/* Suggestion Section Statred Here */}
                        {/* SuggestionBoxWrapper */}
                        <SuggestionContainer >
                            <SuggestionInnerWrapper>
                                <Text>Suggestions</Text>
                                <SuggestionBtnWrapper >
                                    {/* @ts-ignore */}
                                    <SummaryBtn themeMode={themeMode}>Provide a summary of...</SummaryBtn>
                                    {/* @ts-ignore */}
                                    <IncomeBtn themeMode={themeMode}>What is the qualifying income...</IncomeBtn>
                                    {/* @ts-ignore */}
                                    <LoanBtn themeMode={themeMode}>What loan program is this...</LoanBtn>
                                </SuggestionBtnWrapper>
                            </SuggestionInnerWrapper>
                        </SuggestionContainer>

                        {/* Text Field with Icon and button */}
                        <VersionContainer>
                            <Grid2 container columns={12}>
                                <Grid2 xs={10}>
                                    <PaperWrapper >
                                        <IconButtonWrapper aria-label="microphone">
                                            <MicroPhone />
                                        </IconButtonWrapper>
                                        <InputBaseWrapper
                                            placeholder="Write Something"
                                        />
                                        <IconButton color="primary" aria-label="directions">
                                            <SendBtn> Send </SendBtn>
                                        </IconButton>
                                    </PaperWrapper>
                                </Grid2>
                                <Grid2 xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => ref?.current?.scrollIntoView({ behavior: 'smooth' })}>
                                    <Box sx={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <DownArrow src="/images/svgs/arrowDownLight.svg" />
                                    </Box>
                                </Grid2>

                            </Grid2>


                            {/* Version Text Box */}
                            <VersionBox>
                                <VersionText>
                                    Power Underwriter™ version 2.23. Use of this system is governed by our privacy policy and terms of use.
                                </VersionText>
                            </VersionBox>
                        </VersionContainer>
                    </HomePageBg>
                    <HomePageRightNav>
                        <RightNavBar />
                    </HomePageRightNav>
                </>
            )}

            {isMobile && showMessages && (
                <>
                    {/* New Header Started Here */}
                    <MobileHeader>
                        <Grid2 container columns={12}>
                            <Grid2 xs={1.6}>
                                <BackArrowWrapper>
                                    <BackArrow src={`${themeMode === 'light' ? '/images/svgs/backArrow.svg' : '/images/svgs/backArrow-dark.svg'}`} onClick={() => setShowMessages(!showMessages)} />
                                </BackArrowWrapper>
                            </Grid2>
                            <Grid2 xs={8}>
                                <Box sx={{ height: '84px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Roboto Slab', fontWeight: 600, lineHeight: '22.4px' }}>Alice Firstimer</Typography>
                                    <Typography sx={{ fontSize: '12px', fontFamily: 'Bai Jamjuree', fontWeight: 700, lineHeight: '14.4px', opacity: '0.8' }}>9152458766 </Typography>
                                </Box>
                            </Grid2>
                            <Grid2 xs={2.4}>
                                <HeaderIconWrapper themeMode={themeMode}>
                                    <HeaderRightIcon src={`${themeMode === 'light' ? '/images/svgs/rightNavIcon.svg' : '/images/svgs/rightNavIcon-dark.svg'}`} themeMode={themeMode} onClick={() => handleToggleDrawer()} />
                                </HeaderIconWrapper>
                            </Grid2>
                        </Grid2>
                    </MobileHeader>
                    <ButtonWrapperMobile>
                        <ButtonComponent>
                            <ButtonInnerComponent>
                                {/* @ts-ignore */}
                                <HeaderButton variant="contained" active={true} themeMode={themeMode}>
                                    LOANS
                                </HeaderButton>
                                {/* @ts-ignore */}
                                <HeaderButton variant="contained" themeMode={themeMode}>
                                    FNMA
                                </HeaderButton>
                                {/* @ts-ignore */}
                                <HeaderButton variant="contained" themeMode={themeMode}>
                                    FHLMC
                                </HeaderButton>
                                {/* @ts-ignore */}
                                <HeaderButton variant="contained" themeMode={themeMode}>
                                    FHA
                                </HeaderButton>
                            </ButtonInnerComponent>
                        </ButtonComponent>
                    </ButtonWrapperMobile>

                    {/* Ended Here */}
                    <HomePageBg themeMode={themeMode}>
                        <MsgBoxWrapper>
                            {messagesDummyData?.message.map((item: any) => {
                                return (
                                    <MsgWrapper>
                                        <AvatarWrapper >
                                            <AvatarMain >
                                                <AvatarIcon sx={{ background: 'transparent' }} src={`${item.type === 'question' ? '/images/svgs/profile-2.svg' : '/images/svgs/profile-1.svg'}`} />
                                            </AvatarMain>
                                        </AvatarWrapper>
                                        <QuestionWrapper >
                                            <QuestionInnerWrapper >
                                                <QuestionBody >
                                                    {item.body} {item.type === 'question' && <span style={{ marginLeft: '20px', marginTop: '4px', cursor: 'pointer' }}><EditIcon src={`${themeMode === 'light' ? 'images/svgs/edit-square.svg' : 'images/svgs/edit-square-dark.svg'}`} /></span>}
                                                </QuestionBody>
                                            </QuestionInnerWrapper>
                                        </QuestionWrapper>
                                        {item.type === 'answer' && (<AnswerWrapper>
                                            <AnswerInnerWrapper>
                                                <Grid2 container columns={12}>
                                                    <Grid2 xs={6}>
                                                        <LikeIconWrapper>
                                                            <LikeIcon src={`${themeMode === 'light' ? '/images/svgs/like.svg' : '/images/svgs/like-dark.svg'}`} onClick={() => handleOpenFeedBack()} />
                                                        </LikeIconWrapper>
                                                    </Grid2>
                                                    <Grid2 xs={6}>
                                                        <DisLikeIconWrapper >
                                                            <DisLikeIcon src={`${themeMode === 'light' ? '/images/svgs/dislike.svg' : '/images/svgs/dislike-dark.svg'}`} onClick={() => handleOpenDisLikeFeedBack()} />
                                                        </DisLikeIconWrapper>
                                                    </Grid2>
                                                </Grid2>
                                            </AnswerInnerWrapper>
                                        </AnswerWrapper>)}
                                    </MsgWrapper>
                                )
                            })}
                        </MsgBoxWrapper>
                        {/* Text Field with Icon and button */}
                        <Box>
                            <PaperWrapper >
                                <IconButtonWrapper aria-label="microphone">
                                    <MicroPhone />
                                </IconButtonWrapper>
                                <InputBaseWrapper
                                    minRows={1}
                                    placeholder="Write Something"
                                />
                                <IconButton color="primary" aria-label="directions">
                                    <SendBtn> Send </SendBtn>
                                </IconButton>
                            </PaperWrapper>
                            {/* Version Text Box */}
                            <VersionBox>
                                <VersionText>
                                    Power Underwirter version 2.23. Use of this system is governed by our privacy policy and terms of use.
                                </VersionText>
                            </VersionBox>
                        </Box>
                    </HomePageBg>
                    <RightNavBar />
                </>
            )}
            <DeleteModal openDelete={openDelete} setOpenDelete={setOpenDelete} handleCloseDelete={handleCloseDelete} />
            <LikeModal openFeedBack={openFeedBack} handleCloseFeedBack={handleCloseFeedBack} />
            <DisLikeModal openDisLikeFeedBack={openDisLikeFeedBack} handleCloseDisLikeFeedBack={handleCloseDisLikeFeedBack} />
        </MainWrapper>

    )
}

export default Home;