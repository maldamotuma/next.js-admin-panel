"use client"

import ColorMode from "@/app-layouts/main-layout/color-mode";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

interface AuthHeaderProps {

}

const AuthHeader: FunctionComponent<AuthHeaderProps> = () => {
    const theme = useTheme();

    return (
        <Paper sx={{
            p: 3,
            mb: 3
        }}
        elevation={0}
        >
            <Typography align={"center"} fontWeight={700} fontSize={"2em"}>Welcome!</Typography>
            <Typography align={"center"} variant="subtitle1">Bon Voyage On Having as many cars as you wish!</Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2
                }}
            >
                <ColorMode /> <Typography color="text.secondary">{theme.palette.mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</Typography>
            </Box>
        </Paper>
    );
}

export default AuthHeader;