"use client"

import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import HeaderNav from "./header-nav";
import { IconButton, Box, Drawer, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "./side-drawer";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import {
    FormatIndentDecreaseOutlined
} from "@mui/icons-material"

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isSmall) setOpen(false)
        else setOpen(true)

        return () => {

        }
    }, [isSmall])


    const toggleDrawer = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            <HeaderNav toggleDrawer={toggleDrawer} open={open} />
            <Toolbar />
            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "flex"
                    }
                }}
            >
                <Drawer open={open}
                    variant={"persistent"}
                    sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        },
                        zIndex: "1 !important"
                    }}
                    onClose={toggleDrawer}
                >
                    <Toolbar />
                    <SimpleBar
                        style={{
                            width: 240,
                            height: "calc(100vh - 65px)",
                        }}
                    >
                        <Sidebar />
                    </SimpleBar>
                </Drawer>
            </Box>
            <Drawer open={isSmall ? open : false}
                variant={"temporary"}
                sx={{
                    display: {
                        xs: "block",
                        md: "none"
                    }
                }}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <Box
                    sx={{
                        width: 240,
                        height: "100vh",
                    }}
                >
                    <Toolbar
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "sticky",
                            top: 0,
                            zIndex: 9,
                            bgcolor: "background.default"
                        }}
                    >
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
                        <IconButton onClick={toggleDrawer}
                            sx={{
                                bgcolor: "divider",
                                borderRadius: 1
                            }}
                        >
                            <FormatIndentDecreaseOutlined />
                        </IconButton>
                    </Toolbar>
                    <Sidebar toggleDrawer={toggleDrawer} />
                </Box>
            </Drawer>
            <Box sx={{
                p: {
                    xs: 0,
                    sm: 1,
                    md: 3
                },
                ml: {
                    xs: 0,
                    md: open ? "240px" : 0
                },
                transition: ".3s margin ease",
                flex: 1
            }}>
                {
                    children
                }
            </Box>
        </>
    );
}

export default MainLayout;