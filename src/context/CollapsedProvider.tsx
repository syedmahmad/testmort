import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CollapsedProviderProps = {
    children: ReactNode;
};

type initialStateType = {
    collapsed: boolean,
    setCollapsed: Dispatch<SetStateAction<boolean>>,
    handleClick : () => void
}
const initialState: initialStateType = {
    collapsed: false,
    setCollapsed: () => {},
    handleClick: () => {},
}

const CollapsedContext = createContext(initialState);

const CollapsedProvider: any = ({ children }: CollapsedProviderProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleClick = () => {
        setCollapsed(!collapsed);
        console.log('Clicked');
    };
    const collapsedProviderValue = React.useMemo(() => ({
        collapsed,
        setCollapsed,
        handleClick ,

    }), [collapsed,setCollapsed,handleClick]);
    
    return (
        <CollapsedContext.Provider value={collapsedProviderValue}>
            {children}
        </CollapsedContext.Provider>
    )
    

}

export { CollapsedProvider, CollapsedContext };
