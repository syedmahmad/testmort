import React from 'react';
import useSettings from '../hook/useSettings';

interface ArrowIconProps {
    width?: string;
    height?: string;
}

const ArrowDownIcon = ({ width = '24', height = '24' }: ArrowIconProps) => {
    const { themeMode } = useSettings();
    return (
        <>
            {
                themeMode === 'light' ?
                    (<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1.5L8 8.5L1 1.5" stroke="#03363D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ) :
                    (<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1.5L8 8.5L1 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>)
            }
        </>
    )
};

export default ArrowDownIcon;