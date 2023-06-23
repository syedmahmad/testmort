import React from "react";
import { Divider, List, Checkbox, Box, useTheme } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import {
    CustomListItem, ArrowIcon, CustomListItemBox, ListHeading, ListSubHeading, ListHeadingWrapper,
    ArrowIconWrapper, MainBox,
} from "./listItem.style";
import {
    Icon, CheckBoxText, ListWrapper, Heading, SubHeading, MainListWrapper
} from '../../rightNavBar.style';
import UncheckIcon from '../../../../assets/uncheck';
import CheckIcon from '../../../../assets/check';
import { docDummyData } from "../../../../dummyData";
import useSettings from "../../../../hook/useSettings";
import ArrowDownIcon from "../../../../assets/arrowDown";
import DeleteModal from "../../../../components/allModals/deleteModal";

const ListItems = () => {
    const { themeMode } = useSettings();
    const theme = useTheme();
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
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    return (
        <>
            <MainBox>
                <List>
                    {docDummyData.map((item: any, id: any) => (
                        <>
                            {/* @ts-ignore */}
                            <CustomListItem active={activeDoc[id]}>
                                <CustomListItemBox onClick={() => clickHandler(id)}>
                                    <ListHeadingWrapper >
                                        <ListHeading>{item.title}</ListHeading>
                                        <ListSubHeading>{item.totalDocuments}</ListSubHeading>
                                    </ListHeadingWrapper>
                                    <ArrowIconWrapper>
                                        {activeDoc[id] ? <ArrowDownIcon /> : <ArrowIcon src={`${themeMode === 'light' ? 'images/svgs/Arrow - Down.svg' : 'images/svgs/arrow-dark.svg'}`} />}
                                    </ArrowIconWrapper>
                                </CustomListItemBox>
                                {activeDoc[id] && (
                                    <>
                                    <MainListWrapper>
                                        {item.innerItems.map((item: any) => (
                                            <>
                                            <ListWrapper>
                                                <CheckBoxText>
                                                    <Checkbox
                                                        icon={<UncheckIcon />}
                                                        checkedIcon={<CheckIcon />}
                                                        defaultChecked />
                                                    <Box>
                                                        <Heading>{item.title}</Heading>
                                                        <SubHeading>{item.subtitle}</SubHeading>
                                                    </Box>
                                                </CheckBoxText>
                                                <Box>
                                                    <Icon src={`${themeMode === 'light' ? '/images/svgs/verified.svg' : '/images/svgs/verified-dark.svg'}`} />
                                                    <Tooltip
                                                        title="Summary"
                                                        arrow
                                                        placement="top"
                                                    >
                                                        <Icon src={`${themeMode === 'light' ? '/images/svgs/stars.svg' : '/images/svgs/star-dark.svg'}`} />
                                                    </Tooltip>
                                                    <Tooltip
                                                        title="View"
                                                        arrow
                                                        placement="top"
                                                    >
                                                        <Icon src={`${themeMode === 'light' ? '/images/svgs/link.svg' : '/images/svgs/link-dark.svg'}`} />
                                                    </Tooltip>
                                                    <Tooltip
                                                        title="Delete"
                                                        arrow
                                                        placement="top"
                                                    >
                                                        <Icon src={`${themeMode === 'light' ? '/images/svgs/trash.svg' : '/images/svgs/trash-dark.svg'}`} onClick={() => handleOpenDelete()}/>
                                                    </Tooltip>
                                                </Box>

                                            </ListWrapper> 
                                            </>
                                        ))}
                                    </MainListWrapper>
                                    </>
                                )}
                            </CustomListItem>
                            <Divider sx={{ width: '80%', margin: '0 auto' }} />
                        </>
                    ))}
                </List>
            </MainBox>
            <DeleteModal openDelete={openDelete} setOpenDelete={setOpenDelete} handleCloseDelete={handleCloseDelete} />
        </>
    )
};

export default ListItems;