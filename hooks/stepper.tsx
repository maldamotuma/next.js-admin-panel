"use client";

import { Stack, Step, StepButton, Stepper } from "@mui/material";
import { FunctionComponent, ReactNode, useState } from "react";

interface StepperSimplerProps {
    steps: string[];
    children(i: number, back: () => void, next: () => void): ReactNode;
}

const StepperSimpler: FunctionComponent<StepperSimplerProps> = ({ steps, children }) => {
    const [index, setIndex] = useState<number>(0);

    const handleBack = () => {
        setIndex(prev => Math.max(0, prev - 1));
    }

    const handleNext = () => {
        setIndex(prev => Math.min(prev + 1));
    }

    return (
        <Stack>
            <Stepper activeStep={index}
                sx={{
                    position: "sticky",
                    top: 0,
                    bgcolor: "background.paper",
                    width: "100%",
                    zIndex: 9
                }}
            >
                {
                    steps.map(step => (
                        <Step>
                            <StepButton>
                                {
                                    step
                                }
                            </StepButton>
                        </Step>
                    ))
                }
            </Stepper>
            {
                children(index, handleBack, handleNext)
            }
        </Stack>
    );
}

export default StepperSimpler;