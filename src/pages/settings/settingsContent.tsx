import React from "react";
import {
    SettingsPageBg, CardWrapper, CardWrapperMain
    , CardContentWrapper, CardTitle, TextFieldWrapper, TextFieldTitle, CheckBoxWrapper, OptionTitle,
    OptionBody, CheckBoxMainWrapper, CheckBoxes, CardActionsWrapper, CancelBtn, SaveBtn,
} from "./settings.style";
import useSettings from "../../hook/useSettings";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import UncheckIcon from '../../assets/uncheck';
import CheckIcon from '../../assets/check';
import { Typography } from "@mui/material";
import useCollapse from "../../hook/useCollapsed";


const SettingsContent = () => {
    const { themeMode } = useSettings();
    const {collapsed} = useCollapse();
    return (
        <>
        {/* @ts-ignore */}
            <SettingsPageBg themeMode={themeMode} collapsed={collapsed}>
                <CardWrapperMain>
                    <CardWrapper>
                        <CardContentWrapper >
                            <CardTitle> Account </CardTitle>
                            <TextFieldWrapper>
                                <TextFieldTitle> Name </TextFieldTitle>
                                <TextField
                                    sx={{
                                        width: '100%',
                                        marginTop: '10px',
                                        borderRadius: '10px',
                                        '& .MuiFilledInput-root': {
                                            borderRadius: '10px',
                                        },
                                    }}
                                    id="filled-basic"
                                    variant="filled"
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: {
                                            borderRadius: '10px',
                                            '& .MuiInputBase-input': {
                                                borderRadius: '10px',
                                            },
                                        },
                                    }}
                                />
                            </TextFieldWrapper>
                            <CheckBoxWrapper>
                                <OptionTitle> Option One </OptionTitle>
                                <OptionBody >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla purus.
                                    Curabitur convallis sem odio, eu vestibulum magna sodales sit amet.
                                </OptionBody>
                                <CheckBoxMainWrapper>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                            defaultChecked
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes >
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                </CheckBoxMainWrapper>
                            </CheckBoxWrapper>
                            {/* Option 2 */}
                            <CheckBoxWrapper>
                                <OptionTitle> Option Two </OptionTitle>
                                <OptionBody >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla purus.
                                    Curabitur convallis sem odio, eu vestibulum magna sodales sit amet.
                                </OptionBody>
                                <CheckBoxMainWrapper>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                            defaultChecked
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes >
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                </CheckBoxMainWrapper>
                            </CheckBoxWrapper>
                            {/* Option Three */}
                            <CheckBoxWrapper>
                                <OptionTitle> Option Three </OptionTitle>
                                <OptionBody >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla purus.
                                    Curabitur convallis sem odio, eu vestibulum magna sodales sit amet.
                                </OptionBody>
                                <CheckBoxMainWrapper>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                            defaultChecked
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes >
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                    <CheckBoxes>
                                        <Checkbox
                                            icon={<UncheckIcon />}
                                            checkedIcon={<CheckIcon />}
                                        />
                                        <Typography>Selection</Typography>
                                    </CheckBoxes>
                                </CheckBoxMainWrapper>
                            </CheckBoxWrapper>

                        </CardContentWrapper>
                        <CardActionsWrapper >
                            <CancelBtn size="large">Cancel</CancelBtn>
                            <SaveBtn size="large">
                                Save
                            </SaveBtn>
                        </CardActionsWrapper>
                    </CardWrapper>
                </CardWrapperMain>
            </SettingsPageBg>
        </>
    )
}
export default SettingsContent;