"use client"

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import { ColorModeContext } from "../wrappers/style-wrapper";

interface ColorModeProps {

}

const ColorMode: FunctionComponent<ColorModeProps> = () => {
    const mode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <IconButton onClick={() => mode.toggleColorMode()}>
            {
                theme.palette.mode === "dark" ?
                    <LightModeOutlined />
                    :
                    <DarkModeOutlined />
            }
        </IconButton>
    );
}

export default ColorMode;