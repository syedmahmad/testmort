import React, { useState } from 'react'
import ModalBox from '../common/modal'
import { ArrowIconModal, ModalBodyWrapper, GuideListItem, GuideItemBox, ItemText } from './allModals.style'
import { Box, Checkbox, Divider, List, ListItem, Typography } from '@mui/material'
import TickSquareUncheck from '../../assets/tickSquareUncheck'
import TickSquare from '../../assets/tickSquare'
import { agencyDummyData } from '../../dummyData'
import useSettings from '../../hook/useSettings'

const GuidesModal = ({ openModal, setOpenModal }: any) => {
    const { themeMode } = useSettings();
    //Open And Closing List Item
    const [showInnerList, setShowInnerList] = useState(false);
    const [activeDoc, setActiveDoc] = React.useState<any>({
        2: true
    });

    const clickHandler = (id: any) => {
        if (activeDoc.hasOwnProperty(id)) {
            setActiveDoc({
                ...activeDoc,
                [id]: !activeDoc[id],
            });
        } else {
            setActiveDoc({ [id]: true })
        }
    }   
    const handleToggleInnerList = () => {
        setShowInnerList(!showInnerList);
    };
    return (
        <>
        <ModalBox
            open={openModal}
            handleClose={()=> setOpenModal(!openModal)}
            width="381px"
            crossIcon=''
            headerText='Add Agency/Investor Guides'
            cancelButtonText=""
            actionButtonText=""
        >
            {/* @ts-ignore */}
           <ModalBodyWrapper header={true} footer={true}>
                <Box>
                    <List>
                        {agencyDummyData.map((item : any , id: any)=>(
                            <>
                            {/* @ts-ignore */}
                             <GuideListItem themeMode={themeMode} >
                            <GuideItemBox  onClick={() => clickHandler(id)} >
                                <ItemText>{item.title}</ItemText>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    {showInnerList ? <ArrowIconModal src={`${ themeMode === 'light' ? '/images/svgs/arrowDown-Agency.svg' : 'images/svgs/arrow-dark.svg'}`} /> : <ArrowIconModal src={`${ themeMode === 'light' ? '/images/svgs/arrowDown-Agency.svg' : '/images/svgs/arrow-dark.svg'}`} />}
                                </Box>
                            </GuideItemBox>
                            {activeDoc[id] && (
                                <List sx={{width: '100%', }}>
                                    {item.innerItems.map((item: any)=>(
                                        <>
                                           <ListItem sx={{ display: 'flex', justifyContent: 'start' }}>
                                        <Checkbox
                                            icon={<TickSquareUncheck />}
                                            checkedIcon={<TickSquare />}
                                            defaultChecked />
                                        <Box>
                                            <Typography>{item.subtitle}</Typography>
                                        </Box> 
                                    </ListItem>
                                    <Divider sx={{marginTop: '0px', width: '80%', margin: '0 auto'}}/>
                                        </>
                                    ))}
                                </List>
                            )}
                        </GuideListItem>
                            </>
                        ))}
                    </List>
                </Box>
            </ModalBodyWrapper>
        </ModalBox>
        </>
    )
}

export default GuidesModal