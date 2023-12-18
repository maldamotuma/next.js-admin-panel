"use client"

import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import { FunctionComponent } from "react";
import Profile from "./profile";
import ColorMode from "./color-mode";
import { FormatIndentDecreaseOutlined, FormatIndentIncreaseOutlined, Search } from "@mui/icons-material";
import Link from "next/link";
import SearchBox from "../SearchBox";

interface HeaderNavProps {
    toggleDrawer?: () => void;
    open?: boolean;
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({ toggleDrawer, open }) => {
    return (
        <>
            <AppBar
                elevation={0}
                sx={{
                    bgcolor: "background.paper",
                    borderBottom: 1,
                    borderBottomColor: "divider",
                }}
            >
                <Toolbar sx={{ gap: 2, alignItems: "center" }}>
                    <Link href="/">
                        <Box
                            component={"img"}
                            alt="Logo"
                            src={"/logo.png"}
                            sx={{
                                height: 35,
                                m: 0,
                                p: 0
                            }}
                        />
                    </Link>
                    {
                        toggleDrawer &&
                        <Box>
                            <IconButton onClick={toggleDrawer}
                                sx={{
                                    bgcolor: "divider",
                                    borderRadius: 1
                                }}
                            >
                                {
                                    open ?
                                        <FormatIndentDecreaseOutlined />
                                        :
                                        <FormatIndentIncreaseOutlined />
                                }
                            </IconButton>
                        </Box>
                    }
                    <IconButton
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        }}
                    >
                        <Search />
                    </IconButton>
                    <Box sx={{ maxWidth: "sm", display: { xs: "none", md: "block" } }}>
                        <SearchBox size="small" />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1
                        }}
                    />
                    <Stack
                        direction={"row"}
                        gap={1}
                        alignItems="center"
                    >
                        <ColorMode />
                        <Profile />
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default HeaderNav;