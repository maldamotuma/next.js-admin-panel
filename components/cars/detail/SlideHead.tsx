"use client";

import { Paper, useScrollTrigger, Container, Typography, Box, IconButton, Slide } from "@mui/material";
import { FunctionComponent } from "react";
import { Car } from "@/types";
import { maxLine } from "@/utils/typo";
import {
    Close
} from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";

interface SlideHeadProps {
    cars: Car[]
}

const SlideHead: FunctionComponent<SlideHeadProps> = ({ cars }) => {

    return (
        <Paper
            sx={{
                width: "100%",
                display: "flex",
                borderRadius: 0,
                bgcolor: "transparent",
                color: "#ffffff",
                mb: 3,
            }}
            elevation={0}
        >
            {
                cars.map((cr, i) => (
                    <Box
                        key={"car-keys-" + i}
                        sx={{
                            minWidth: 300,
                            maxWidth: 400,
                            borderLeft: i === 0 ? 0 : 1,
                            width: "100%",
                            borderColor: blueGrey[500],
                            px: 2,

                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: blueGrey[900],
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderRadius: 2
                            }}
                        >
                            <Typography
                                sx={{
                                    ...maxLine(2)
                                }}
                                fontWeight={700}
                            >
                                {
                                    cr.car
                                }
                            </Typography>
                            <IconButton sx={{ color: "#ffffff" }}>
                                <Close />
                            </IconButton>
                        </Box>
                    </Box>
                ))
            }
        </Paper>
    );
}

export default SlideHead;