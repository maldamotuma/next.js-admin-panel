"use client"

import { AddShoppingCartOutlined, AdminPanelSettingsOutlined, ArticleOutlined, BookmarkOutlined, CardMembershipOutlined, ChevronLeft, ChevronLeftOutlined, CircleOutlined, CommuteOutlined, Dashboard, DirectionsCarOutlined, Error, ExpandMore, Group, GroupOutlined, Home, Inbox, Mail, ManageAccountsOutlined, Person4Outlined, PostAdd, Warning } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, CardHeader, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, accordionDetailsClasses, alpha, listItemIconClasses } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";

const links = [
    {
        title: "Navigation",
        childrens: [
            {
                title: "Home",
                href: "/",
                icon: <Home />
            },
            {
                title: "Dashboard",
                href: "/dashboard",
                icon: <Dashboard />
            }
        ]
    },
    {
        title: "Car",
        childrens: [
            {
                title: "Cars",
                href: "/car/list",
                icon: <CommuteOutlined />
            },
            {
                title: "Add Car",
                href: "/car/add",
                icon: <DirectionsCarOutlined />
            }
        ]
    },
    {
        title: "Blog",
        childrens: [
            {
                title: "My Blogs",
                href: "/dashboard/blog/list",
                icon: <ArticleOutlined />
            },
            {
                title: "Create Blog",
                href: "/dashboard/blog/create",
                icon: <PostAdd />
            },
            {
                title: "Bookmarks",
                href: "/dashboard/bookmarks",
                icon: <BookmarkOutlined />
            },
        ]
    },
    {
        title: "Subscriptions",
        childrens: [
            {
                title: "My Package",
                href: "/dashboard/package/my",
                icon: <CardMembershipOutlined />
            },
            {
                title: "New Package",
                href: "/dashboard/package/new",
                icon: <AddShoppingCartOutlined />
            }
        ]
    },
    {
        title: "Account",
        childrens: [
            {
                title: "Profile",
                href: "/dashboard/profile",
                icon: <Person4Outlined />
            },
            {
                title: "Edit Profile",
                href: "/dashboard/settings",
                icon: <ManageAccountsOutlined />
            },
            {
                title: "Change Password",
                href: "/dashboard/settings?tab=change-password",
                icon: <AdminPanelSettingsOutlined />
            },
        ]
    }
]

const user = {
    first_name: "Malda",
    last_name: "Motuma",
}
interface SidebarProps {
    toggleDrawer?: () => void;
}
// const only_authorized = ["/dashboard/blog/create"];
const Sidebar: FunctionComponent<SidebarProps> = ({ toggleDrawer }) => {
    //   const { user } = useAppSelector(state => state.auth);

    return (
        <Stack>
            <Box
                {
                ...(toggleDrawer && {
                    onClick: toggleDrawer
                })
                }
                sx={{
                    flexGrow: 1,
                    overflow: "auto",
                    [`& .${listItemIconClasses.root}`]: {
                        minWidth: "unset",
                        mr: 1
                    },
                    [`& .${accordionDetailsClasses.root}`]: {
                        bgcolor: theme => alpha(theme.palette.divider, .05),
                        py: 0,
                        pl: 0,
                        width: "calc(100% - 30px)",
                        ml: "20px",
                        mr: "10px",
                        borderRadius: 5
                    }
                }}>
                {
                    links.map(lnk => (
                        <Box
                            key={"links-qwerty-" + lnk.title}
                        >
                            <ListSubheader>{lnk.title}</ListSubheader>
                            {
                                lnk.childrens.map(sb => (
                                    <ListItemButton
                                        key={"links-sub-qwerty-" + sb.title}
                                        component={Link}
                                        href={sb.href}
                                    // {
                                    // ...(only_authorized.includes(sb.href) && !user?.can_blog && {
                                    //     disabled: true
                                    // })
                                    // }
                                    >
                                        <ListItemIcon>
                                            {
                                                sb.icon
                                            }
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={sb.title}
                                            primaryTypographyProps={{
                                                noWrap: true
                                            }}
                                        />
                                    </ListItemButton>
                                ))
                            }
                        </Box>
                    ))
                }
            </Box>
        </Stack >
    );
}

export default Sidebar;