import { LogoutOutlined, Person2Outlined, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, CardContent, CardHeader, ClickAwayListener, Grid, IconButton, Paper, Popper, Stack, Tab, Tabs, Typography } from "@mui/material";
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";
import { FunctionComponent, ReactNode, SyntheticEvent, useRef, useState } from "react";
import ProfileTab from "./ProfileTab";
import SettingTab from "./SettingTab";

interface ProfileProps {

}

// tab panel wrapper
function TabPanel({ children, value, index }: { children: ReactNode; value: number; index: number }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`}>
            {value === index && children}
        </div>
    );
}


function a11yProps(index: number) {
    return {
        id: `profile-tab-${index}`,
        'aria-controls': `profile-tabpanel-${index}`
    };
}

const Profile: FunctionComponent<ProfileProps> = () => {
    const [value, setValue] = useState<number>(0);

    const handleLogout = async () => {
        // logout
    };

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <PopupState variant="popper">
            {
                pps => (
                    <>
                        <IconButton
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            }}
                            {...bindToggle(pps)}
                        >
                            <Avatar alt={""}
                                sx={{
                                    width: 35,
                                    height: 35,
                                }}
                                src={"https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"}
                            />
                        </IconButton>
                        <Button
                            {...bindToggle(pps)}
                            startIcon={<Avatar alt={""}
                                sx={{
                                    width: 35,
                                    height: 35,
                                }}
                                src={"https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"}
                            />}
                            sx={{
                                color: "text.primary",
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            }}
                        >
                            Malda Motuma
                        </Button>
                        <Popper
                            {...bindPopper(pps)}
                            disablePortal
                            placement="bottom-end"
                        >
                            <ClickAwayListener onClickAway={pps.close}>
                                <Paper sx={{ width: 300 }}>
                                    <CardHeader
                                        avatar={<Avatar
                                            src={"https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"}
                                            alt="profile user" sx={{ width: 32, height: 32 }} />}
                                        title={"Malda Motuma"}
                                        subheader={"FullStack Developer"}
                                        action={
                                            <IconButton size="large" color="secondary">
                                                <LogoutOutlined />
                                            </IconButton>
                                        }
                                    />
                                    {pps.isOpen && (
                                        <>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs
                                                    sx={{
                                                        p: 0,
                                                        minHeight: "unset !important"
                                                    }}
                                                    variant="fullWidth" value={value} onChange={handleChange} aria-label="profile tabs">
                                                    <Tab
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            textTransform: 'capitalize',
                                                            py: 2,
                                                            minHeight: "unset !important"
                                                        }}
                                                        icon={<Person2Outlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                                                        label="Profile"
                                                        {...a11yProps(0)}
                                                    />
                                                    <Tab
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            textTransform: 'capitalize',
                                                            py: 0,
                                                            minHeight: "unset !important"
                                                        }}
                                                        icon={<SettingsOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                                                        label="Setting"
                                                        {...a11yProps(1)}
                                                    />
                                                </Tabs>
                                            </Box>
                                            <TabPanel value={value} index={0}>
                                                <ProfileTab />
                                            </TabPanel>
                                            <TabPanel value={value} index={1}>
                                                <SettingTab />
                                            </TabPanel>
                                        </>
                                    )}
                                </Paper>
                            </ClickAwayListener>
                        </Popper>
                    </>
                )
            }
        </PopupState>
    );
}

export default Profile;