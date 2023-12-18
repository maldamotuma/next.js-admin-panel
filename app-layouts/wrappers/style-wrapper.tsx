"use client"

import { ThemeProvider, alpha, createTheme, useMediaQuery } from "@mui/material";
import { FunctionComponent, ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { palette } from "./theme";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

interface StyleWrapperProps {
    children: ReactNode | ReactNode[]
}

const StyleWrapper: FunctionComponent<StyleWrapperProps> = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setMode(localStorage.getItem("theme") === 'dark' ? 'dark' : 'light')
        } else {
            setMode(prefersDarkMode ? 'dark' : 'light')
        }

        return () => {

        }
    }, [prefersDarkMode])

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const updatedMode = (prevMode === 'light' ? 'dark' : 'light');
                    localStorage.setItem("theme", updatedMode);
                    return updatedMode;
                });
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                typography: {
                    fontFamily: [
                        '__Playfair_Display_18035e',
                        '__Playfair_Display_Fallback_18035e'
                    ].join(',')
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            text: {
                                textTransform: "none"
                            }
                        },
                    }
                }
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {
                    children
                }
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default StyleWrapper;