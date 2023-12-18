"use client"

import { FormEvent, FunctionComponent } from "react";
import CarForm from "./car-form";
import { Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { Product } from "@/types";

interface CarFeaturesProps {
    nextSep?: () => void;
    prevStep?: () => void;
    editable?: {
        car: Product | null;
        updateList(cr: Product): void;
    }
}

const features = [
    "360deg View Camera",
    "Automatic Parking Assistant",
    "Night Vision Assistant",
    "Adaptive Cruise Control",
    "Digital Cockpit",
    "Heads Up Display(HUD)",
    "Blind Spot Monitor",
    "Hill Assist",
    "Electronic Stability Program (ESP)",
    "Tyre Pressure Monitoring System (TPMS)",
    "ABS+EBD",
    "ABS",
    "Automatic Climate Control",
    "Dual Zone Climate Control",
    "Anti Pinch Power Windows",
    "Heated ORVM",
    "Hill Descent Control",
    "Apple car play/ Android auto",
    "Hands-Free Tailgate",
    "Mild Hybrid",
    "Driving Mode",
    "Real Time Vehicle Tracking",
    "Engine Immobilizer",
    "Limited Slip Differential (LSD)",
    "Steering Adjustment Type"
]

const CarFeatures: FunctionComponent<CarFeaturesProps> = ({ nextSep, prevStep }) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (prevStep) prevStep()
    }

    return (
        <>
            <Typography variant={"subtitle2"}
                fontSize={"2em"}
                sx={{
                    py: 2
                }}
            >Car Features</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={0}>
                    {
                        features.map(ftr => (
                            <Grid item xs={12} key={"features-" + ftr}>
                                <FormControlLabel control={<Checkbox />} label={ftr} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Button
                    sx={{
                        position: "sticky",
                        bottom: 0
                    }}
                    variant={"contained"} type={"submit"}>Submit</Button>
            </form>
        </>
    );
}

export default CarFeatures;