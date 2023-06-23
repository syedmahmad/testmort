import React from 'react';
import useSettings from '../hook/useSettings';

interface ArrowIconProps {
    width?: string;
    height?: string;
}

const ArrowIcon = ({ width = '24', height = '24' }: ArrowIconProps) => {
    const { themeMode } = useSettings();
    return (
        <>
            {
                themeMode === 'dark' ?
                    (<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L8.5 8L1.5 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>) :
                    (<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 5L15.5 12L8.5 19" stroke="#03363D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>)
            }
        </>
    )
};

export default ArrowIcon;