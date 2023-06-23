import React, { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useState } from "react";
import { getDataToLCStorage, LocalStorageThemeProps, setDataToLCStorage } from "../utils/lcStorage";

type SettingProviderProps = {
    children: ReactNode;
};
type initialStateType = {
    themeMode: 'light' | 'dark',
    onToggleMode: () => void;
    openDrawer: boolean;
    setOpenDrawer: (value: boolean) => void,
    openDrawerMobile: boolean,
    setOpenDrawerMobile: (value: boolean) => void,
    handleToggleDrawer: () => void,
    handleToggleDrawerMobile: () => void,
    showAccountScreen: boolean,
    setShowAccountScreen: Dispatch<SetStateAction<boolean>>,
}

const initialState: initialStateType = {
    themeMode: 'light',
    onToggleMode: () => { },
    openDrawer: false,
    openDrawerMobile: false,
    setOpenDrawer: () => { },
    setOpenDrawerMobile: () => { },
    handleToggleDrawer: () => {},
    handleToggleDrawerMobile: () => {},
    showAccountScreen: false,
    setShowAccountScreen: () => {},
};

const SettingsContext = createContext(initialState);

const SettingProvider = ({ children }: SettingProviderProps) => {
    const storedValues: LocalStorageThemeProps = getDataToLCStorage('lc_themesettings');
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>(storedValues?.theme?.mode || 'light');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [showAccountScreen, setShowAccountScreen] = useState(false);
    const [openDrawerMobile, setOpenDrawerMobile] = useState(false);
    const handleToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleToggleDrawerMobile = () => {
        setOpenDrawerMobile(!openDrawerMobile);
    };

    const getThemeMode = () => {
        const lcTchsettings: LocalStorageThemeProps = getDataToLCStorage('lc_themesettings');
        if (lcTchsettings.theme) {
            return lcTchsettings.theme.mode;
        }
        return 'light';
    };
    
    const toggleThemeModeInLocalStorage = (updateMode: 'light' | 'dark') => {
        const lcTchsettings: LocalStorageThemeProps = getDataToLCStorage('lc_themesettings');
        const newSettings = {
            theme: {
                ...lcTchsettings.theme,
                mode: updateMode,
            },
        };
        setDataToLCStorage('lc_themesettings', newSettings);
    };

    const onToggleMode = useCallback(() => {
        const mode = getThemeMode() === 'light' ? 'dark' : 'light';
        setThemeMode(mode);
        toggleThemeModeInLocalStorage(mode);
    }, [setThemeMode]);

    const settingsProviderValue = React.useMemo(() => ({
        themeMode,
        onToggleMode,
        handleToggleDrawer,
        openDrawer, // Add openDrawer property
        setOpenDrawer, // Add setOpenDrawer property
        openDrawerMobile,
        setOpenDrawerMobile,
        handleToggleDrawerMobile,
        showAccountScreen,
        setShowAccountScreen,

    }), [themeMode, onToggleMode, openDrawer, setOpenDrawer, handleToggleDrawer, openDrawerMobile, setOpenDrawerMobile, handleToggleDrawerMobile, showAccountScreen, setShowAccountScreen ]);

    return (
        <SettingsContext.Provider value={settingsProviderValue}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingProvider, SettingsContext };