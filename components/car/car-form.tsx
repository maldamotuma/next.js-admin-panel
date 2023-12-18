import { Product } from "@/types";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, FunctionComponent } from "react";

interface CarFormProps {
    nextStep?: () => void;
    prevStep?: () => void;
    editable?: {
        car: Product | null;
        updateList(cr: Product): void;
    }
}

const CarForm: FunctionComponent<CarFormProps> = ({ nextStep, prevStep, editable }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nextStep) nextStep();
        else if (prevStep) prevStep();
    }
    return (
        <>
            <Typography
                fontSize={"2em"}
                variant={"subtitle2"} sx={{ py: 2 }}>Car Specifications</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Title"
                            label={"Title"}
                            defaultValue={editable?.car?.title}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Make"
                            label={"Make"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Model"
                            label={"Model"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Milage"
                            label={"Milage"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="DriveTrain"
                            label={"DriveTrain"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Doors"
                            label={"Doors"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="ransmission"
                            label={"ransmission"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Engine"
                            label={"Engine"}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Condition"
                            label={"Condition"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Year"
                            label={"Year"}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Trim"
                            label={"Trim"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Body Style"
                            label={"Body Style"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Cylynder"
                            label={"Cylynder"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Fuel Type"
                            label={"Fuel Type"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Interior Color"
                            label={"Interior Color"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Exterior Color"
                            label={"Exterior Color"}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            fullWidth
                            placeholder="Seat"
                            label={"Seat"}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button variant={"contained"} type={"submit"}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default CarForm;