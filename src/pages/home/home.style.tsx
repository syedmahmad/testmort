import React from "react";
import { Box, Avatar, Typography, Button, TextField } from "@mui/material";
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormGroup from '@mui/material/FormGroup';

export const MainWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  },
}));

export const InnerSideBarWrapper = styled(Box)(({ theme }) => ({
  minWidth: 331,
  [theme.breakpoints.down('lg')]: {
    minWidth: '269px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '200px',
  },
}));

export const HomePageBg = styled(Box)<any>(({ theme, themeMode, collapsed }: any) => ({
  height: 'calc(100vh - 140px)',
  // minWidth: 'calc(100vw - 912px)',
  minWidth: `${collapsed ? 'calc(100vw - 780px)' : 'calc(100vw - 912px)'}`,
  padding: '20px 0px',
  backgroundImage: themeMode === 'light' ? `url(${'/images/svgs/home-page-bg.svg'})` : `url(${'/images/svgs/Homebg-dark.svg'})`,
  [theme.breakpoints.down('md')]: {
    height: 'calc(100vh - 120px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0px 0px',
  }
}));

export const HomePageRightNav = styled(Box)<any>(({ theme }: any) => ({
  minWidth: 420,
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
}));

export const LikeIcon = styled('img')(({ theme }) => ({
  height: '18.67px',
  width: '18.67px',
  cursor: 'pointer',
}));

export const DisLikeIcon = styled('img')(({ theme }) => ({
  height: '18.67px',
  width: '18.67px',
  cursor: 'pointer',
}));

export const EditIcon = styled('img')(({ theme }) => ({
  height: '14.39px',
  width: '14.39px',
}));

export const AvatarIcon = styled(Avatar)(({ theme }) => ({
  height: '40px',
  width: '40px',
  objectFit: 'none',
  background: theme.palette.primary.light,
  [theme.breakpoints.down('sm')]: {
    height: '24px',
    width: '24px',
  }
}));

export const MsgWrapper = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 76px)',
  padding: '8px 0px',
  margin: '0 auto',
  display: 'flex'
}));

export const AvatarWrapper = styled(Box)(({ theme }) => ({
  marginRight: '15px',
  minWidth: '40px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '24px',
  }
}));

export const AvatarMain = styled(Box)(({ theme }) => ({
  padding: '16px 0px',
  margin: '0 auto',
}));

export const QuestionWrapper = styled(Box)(({ theme }) => ({
  marginRight: '15px',
  minWidth: 'calc(100% - 110px)',
  [theme.breakpoints.down('sm')]: {
    marginRight: '0px',
    minWidth: 'calc(100% - 40px)',
  }

}));

export const QuestionInnerWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: '13px 16px 13px 16px',
  borderRadius: '10px',
  width: '92%'
}));

export const QuestionBody = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Bai Jamjuree',
  lineHeight: '28.8px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]:
  {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '25.2px',
  },
  [theme.breakpoints.down('sm')]:
  {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '25.2px',
  },
}));

export const AnswerWrapper = styled(Box)(({ theme }) => ({
  minWidth: '70px',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
}));

export const AnswerInnerWrapper = styled(Box)(({ theme }) => ({
  padding: '16px 0px'
}));

export const LikeIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '28px',
  width: '28px',
  background: theme.palette.background.paper,
  borderRadius: '6px',
  marginRight: '15px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const DisLikeIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '28px',
  width: '28px',
  background: theme.palette.background.paper,
  borderRadius: '6px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const ModalBodyWrapper = styled(Box)(({ theme }) => ({
  padding: '24px 28px',
  background: theme.palette.background.paper
}));

export const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeigt: 600,
  lineHeight: '25.2px'
}));

export const BodySubText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeigt: 400,
  lineHeight: '22.4px',
  marginTop: '16px'
}));

export const MsgBoxWrapper = styled(Box)(({ theme }) => ({
  height: 'calc(100vh - 335px)',
  overflow: 'auto',
  maxWidth: '1000px',
  margin: '0 auto',
}));

export const PaperWrapper = styled(Paper)(({ theme }) => ({
  padding: '0px 10px',
  display: 'flex',
  alignItems: 'center',
  margin: '12px 48px',
  marginTop: '0px',
  borderRadius: '16px',
  width: 'calc(107.5% - 100px)',
  boxShadow: 'none'
}));

export const IconButtonWrapper = styled(IconButton)<any>(({ theme, themeMode }: any) => ({
  backgroundColor: "#F7F6F4",
  height: '36px',
  width: '36px',
  borderRadius: '10px',
  "&:hover": {
    backgroundColor: "#F7F6F4",
  }
}));

export const InputBaseWrapper = styled(TextareaAutosize)(({ theme }) => ({
  marginLeft: '15px',
  flex: 1,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '28.8px',
  border: 'none',
  outline: 'none',
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

export const VersionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 auto',
  width: '84%'
}));

export const VersionText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '16.8px',
  color: theme.palette.text.primary,
  opacity: 0.6,
  margin: '18px auto',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }

}));

export const SendBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.text.white,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '16px',
  padding: '10px 20px',
  borderRadius: '10px',
  "&:hover": {
    background: theme.palette.primary.light,
  }
}));

export const TextFieldWrapper = styled(TextField)(({ theme }) => ({
  width: '100%',
  margin: '10px 0px'
}));

export const ModalTextField = styled(TextField)(({ theme }) => ({
  width: '512px',
}));

export const FormGroupWrapper = styled(FormGroup)(({ theme }) => ({
  marginTop: '21px'
}));

export const TrashIconModalWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  background: '#F7F6F4',
  height: '80px',
  width: '80px',
  margin: '0 auto',
  borderRadius: '50%'
}));

export const TrashIconModal = styled('img')(({ theme }) => ({
  height: '36px',
  width: '40px',
  margin: 'auto 0',
}));

export const DeleteModalBody = styled(Box)(({ theme }) => ({
  marginTop: '28px',
  display: 'flex',
  justifyContent: 'center',

}));

export const DeleteModalHeading = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '33.6px'

}));

export const DeleteModalSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '25.6px'
}));

export const SubheadingWrapper = styled(Box)(({ theme }) => ({
  padding: '0px  50px'
}));

export const SubheadingInner = styled(Box)(({ theme }) => ({
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'center',
}));

export const FormGroupWrapperPrice = styled(FormGroup)(({ theme }) => ({
  padding: '0px 20px',
  marginTop: '24px'
}));

export const PlanTextWrapper = styled(Box)(({ theme }) => ({
  padding: '0px 125px',
  display: 'flex',
  justifyContent: 'center',

}));

export const PlanText = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: 600,
  lineHeigth: '42px'
}));

export const OffersBox = styled(Box)(({ theme }) => ({
  padding: '0px 125px',
  display: 'flex',
  justifyContent: 'center',
}));

export const OffersText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeigth: '19.6px'
}));

export const PricingBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '730px'

}));

export const PricingBoxMain = styled(Box)(({ theme }) => ({
  border: '1px solid black',
  borderRadius: '10px',
  width: '348px',
  marginTop: '40px'
}));

export const PackageText = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  lineHeight: '33.6px',
  fontWeight: 400,
  padding: '24px 20px'
}));

export const PackagePrice = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  lineHeight: '56px',
  fontWeight: 400,
  padding: '0px 20px'

}));

export const PackageBtn = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'

}));

export const SubscribeBtn = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '25.2px',
  height: '56px',
  width: '308px',
  margin: '20px 0px',
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  }
}));

export const SubscribeAdvanceBtn = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '25.2px',
  height: '56px',
  width: '308px',
  margin: '20px 0px',
  background: theme.palette.primary.light,
  color: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  }
}));

export const UploadWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const TimeIcon = styled('img')(({ theme }) => ({
  height: '132px',
  width: '132px'
}));
export const UplaodText = styled(Typography)(({ theme }) => ({

  fontSize: '16px',
  lineHeight: '25.6px',
  fontWeight: 500,
  textAlign: 'center',
}));

export const UplaodTextComplete = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '33.6px',
  fontWeight: 600,
  textAlign: 'center',
  marginTop: '18px'
}));

export const BackArrow = styled('img')(({ theme }) => ({
  height: '24px',
  width: '24px',
  cursor: 'pointer',
}));


export const MobileHeader = styled(Box)(({ theme }) => ({
  marginTop: '-84px',
  width: '100%',
  position: 'absolute',
  zIndex: 99,
  background: theme.palette.background.paper,
}));

export const BackArrowWrapper = styled(Box)(({ theme }) => ({
  height: '84px',
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  marginLeft: '12px'
}));

export const ButtonWrapperMobile = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center'
}));

export const VersionContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
}));


export const DownArrow = styled('img')(({ theme }) => ({
  height: '24px',
  width: '24px',
  cursor: 'pointer',
}));

export const SuggestionContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
}));

export const SuggestionInnerWrapper = styled(Box)(({ theme }) => ({
  width: '85%',
  margin: 'auto 51px',
  maxWidth: '695px',
  overflowX: 'auto'
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px',
}));

export const SuggestionBtnWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  marginBottom: '10px'
}));


export const SummaryBtn = styled(Button)(({ theme, themeMode }: any) => ({
  minWidth: '200px',
  padding: '12px 14px',
  background: `${themeMode === 'light' ? "#EFF3F4" : "alpha(#E3F4F2, 30)" }`,
  color: `${themeMode === 'light' ? "#03363D" : "#fff" }`,
  fontSize: '12px',
  fontWeight: 400,
  fontFamily:'DM Sans',
  lineHeight: '14.4px',
  borderRadius: '9px',
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  }
}));

export const IncomeBtn = styled(Button)(({ theme, themeMode }: any) => ({
  minWidth: '250px',
  padding: '12px 14px',
  background: `${themeMode === 'light' ? "#FBEBEA" : "alpha(#E3F4F2, 30)" }`,
  color: `${themeMode === 'light' ? "#03363D" : "#fff" }`,
  fontSize: '12px',
  fontWeight: 400,
  fontFamily:'DM Sans',
  lineHeight: '14.4px',
  borderRadius: '9px',
  marginLeft: '12px',
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  }
}));

export const LoanBtn = styled(Button)(({ theme, themeMode }: any) => ({
  minWidth: '220px',
  padding: '12px 14px',
  background: `${themeMode === 'light' ? "#E3F4F2" : "alpha(#E3F4F2, 30)" }`,
  color: `${themeMode === 'light' ? "#03363D" : "#fff" }`,
  fontSize: '12px',
  fontWeight: 400,
  fontFamily:'DM Sans',
  lineHeight: '14.4px',
  borderRadius: '9px',
  marginLeft: '12px',
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  }
}));




