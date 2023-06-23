import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import useSettings from '../hook/useSettings';
import { colors } from './color';
import { ThemeProps } from './interface';

export function ThemeProvider({ children }: ThemeProps) {
  const { themeMode } = useSettings();
  const isLight = themeMode === 'light';

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto Slab',
      button: {
        fontFamily: 'Bai Jamjuree'
      }
    },
    palette: isLight ? colors.light.palette : colors.dark.palette,
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isLight ? colors.light.palette.text.primary : colors.dark.palette.text.primary,
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '14px',
            fontFamily: 'Bai Jamjuree',
            color: isLight ? colors.light.palette.text.primary : colors.dark.palette.text.primary,
            padding: '10px 15px',
            backgroundColor: isLight ? "#fff" : colors.dark.palette.background.default,
            '& .MuiTooltip-arrow:before': {
              backgroundColor: isLight ? "#fff" : colors.dark.palette.background.default,
            }
          }
        }
      }
    }
  })

  return(
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
};