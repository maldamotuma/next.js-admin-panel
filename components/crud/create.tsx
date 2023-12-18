import { Button, Dialog, Box, DialogTitle, Typography, IconButton, DialogContent, Alert } from "@mui/material";
import { bindDialog, bindToggle, usePopupState } from "material-ui-popup-state/hooks";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { Close } from "@mui/icons-material";

interface CreateItemProps<T> {
    itemForm: ReactNode;
    edtFrm?: (ed_it: T | null, updateItem: (itm: T) => void) => ReactNode;
    updateItem: (ed_it: T) => void;
    editableItem?: T | null;
    closeEditable(): void;
}


const CreateItem = <T,>({ itemForm, editableItem, edtFrm, closeEditable, updateItem }: CreateItemProps<T>): ReactNode => {
    const pps = usePopupState({ variant: "dialog" });

    useEffect(() => {
        if (editableItem) {
            pps.open();
        }

        return () => {

        }
    }, [editableItem])

    useEffect(() => {
        if (!pps.isOpen) {
            setTimeout(() => {
                closeEditable();
            }, 200);
        }

        return () => {

        }
    }, [pps.isOpen])


    return (
        <Box sx={{ mb: 2 }}>
            <Button
                variant={"contained"}
                {
                ...bindToggle(pps)
                }
            >
                Add
            </Button>
            <Dialog
                {
                ...bindDialog(pps)
                }
                onClose={() => { }}
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography variant={"h2"} fontSize={"1.5em"}>{editableItem ? "Edit" : "Add"} List</Typography>
                    <IconButton onClick={pps.close}><Close /></IconButton>
                </DialogTitle>
                <DialogContent>
                    {
                        editableItem ?
                            edtFrm ?
                                edtFrm(editableItem, updateItem)
                                :
                                <Alert severity="info">UnAuthorized Access</Alert>
                            :
                            itemForm
                    }
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default CreateItem;