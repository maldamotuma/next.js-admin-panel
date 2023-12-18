"use client"

import { DeleteOutlined, EditOutlined, MoreVert } from "@mui/icons-material";
import { ClickAwayListener, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Popper } from "@mui/material";
import { usePopupState, bindToggle, bindPopper } from "material-ui-popup-state/hooks";


const MenuDropDown = ({ handleDelete, handleEditable }: { handleDelete(): void; handleEditable(): void }) => {
    const pps = usePopupState({ variant: "popper" });

    const handleEditable_ = () => {
        handleEditable();
        pps.close()
    }
    return (
        <>
            <IconButton
                sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    bgcolor: "divider",
                    // borderRadius: 1
                }}
                {
                ...bindToggle(pps)
                }
            >
                <MoreVert />
            </IconButton>
            <Popper
                {
                ...bindPopper(pps)
                }
                placement={"auto-end"}
            >
                <ClickAwayListener onClickAway={pps.close}>
                    <Paper>
                        <List>
                            <ListItemButton
                                sx={{
                                    alignItems: "flex-start"
                                }}
                                onClick={handleDelete}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "unset",
                                        mr: 1,
                                        mt: 1
                                    }}
                                >
                                    <DeleteOutlined />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Delete"}
                                    secondary={"Permanently Remove from listing"}
                                />
                            </ListItemButton>
                            <ListItemButton
                                sx={{
                                    alignItems: "flex-start"
                                }}
                                onClick={handleEditable_}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "unset",
                                        mr: 1,
                                        mt: 1
                                    }}
                                >
                                    <EditOutlined />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Edit"}
                                    secondary={"Update INformations"}
                                />
                            </ListItemButton>
                        </List>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </>
    )
}

export default MenuDropDown;