"use client"

import { Box, alpha } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { FunctionComponent, ReactNode } from "react";

interface AuthWrapperProps {
    children: ReactNode
}

const AuthWrapper: FunctionComponent<AuthWrapperProps> = ({ children }) => {
    return (
        <Box
            sx={{
                bgcolor: theme => theme.palette.mode === "dark" ? blueGrey[900] : "#ffffff",
                p: 3,
                borderRadius: {
                    md: 2
                }
            }}
        >
            {
                children
            }
        </Box>
    );
}

export default AuthWrapper;