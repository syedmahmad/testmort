import React from "react";
import { Box, Typography, Button, TextField ,List, ListItem} from "@mui/material";
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';

export const ModalBodyWrapper = styled(Box)(({ theme, header, footer = false }: any) => ({
  padding: '24px 28px',
  background: theme.palette.background.paper,
  borderTopLeftRadius: `${header ? '0px' : '16px'}`,
  borderTopRightRadius: `${header ? '0px' : '16px'}`,
  borderBottomLeftRadius: `${!footer ? '0px' : '16px'}`,
  borderBottomRightRadius: `${!footer ? '0px' : '16px'}`,
  height:`${!footer ? 'auto' : '50vh'}`,
  overflow: 'auto',
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

export const ArrowIconModal = styled('img')<any>(({ theme }: any) => ({
  height: '20px',
  width: '20px',
}));

export const GuideListItem = styled(ListItem)<any>(({ theme, themeMode }: any) => ({
  background: `${themeMode === 'light' ? '#F7F6F4' : '#12252D'}`, 
  width: '100%', borderRadius: '16px',
   marginBottom: '15px', 
   flexDirection: 'column',
    padding: '20px'
}));

export const GuideItemBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between',
   width: '100%'
}));

export const InnerListBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between',
   width: '100%'
}));

export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: '20px', 
  fontWeight: 600, 
  fontFamily: 'Bai Jamjuree', 
  lineHeight: '28px'
}));




