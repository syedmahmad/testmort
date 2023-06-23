import React from 'react';

export interface ThemeProps {
    children: React.ReactNode;
}

export interface ColorTypes {
    palette: {
        primary: {
          main: string,
          light: string,
          dark: string
        },
        text: {
          primary: string,
          secondary: string,
          disabled: string,
        },
        background: {
          default: string
        }
      },
}