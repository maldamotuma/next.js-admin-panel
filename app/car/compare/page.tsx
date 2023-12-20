"use client"

import CompareHeader from "@/components/cars/detail/headers";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Stack, alpha } from "@mui/material";
import { Car } from "@/types"
import { DoneAllOutlined } from "@mui/icons-material";
import { blue, blueGrey } from "@mui/material/colors";
import SlideHead from "@/components/cars/detail/SlideHead";
import { MouseEvent, TouchEvent, UIEvent, useRef } from "react";


const cars: Car[] = [
    {
        availability: true,
        car: "2024 Marchedes Benz Maybach GLS 600",
        car_color: "black",
        car_model: "Maybach",
        car_model_year: 2024,
        car_vin: "malda",
        id: 1,
        image: "/cars-list/image01.jpeg",
        price: "$15,859"
    },
    {
        availability: true,
        car: "2023 BMW V8 Landcruiser",
        car_color: "black",
        car_model: "Maybach",
        car_model_year: 2024,
        car_vin: "malda",
        id: 2,
        image: "/cars-list/image02.jpeg",
        price: "$15,859"
    },
    {
        availability: true,
        car: "sdfsdf 2023 BMW V8 Landcruiser",
        car_color: "black",
        car_model: "Maybach",
        car_model_year: 2024,
        car_vin: "malda",
        id: 3,
        image: "/cars-list/image03.jpeg",
        price: "$15,859"
    },
    {
        availability: true,
        car: "2023 fghfghfghfgh BMW V8 Landcruiser",
        car_color: "black",
        car_model: "Maybach",
        car_model_year: 2024,
        car_vin: "malda",
        id: 2,
        image: "/cars-list/image04.jpeg",
        price: "$15,859"
    }
];

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
const Compare = () => {
    const ref = useRef<HTMLDivElement>();
    const axis = useRef<{
        isDown: boolean;
        startX: number;
        scrollLeft: number;
    }>({
        isDown: false,
        startX: -1,
        scrollLeft: -1,
    });
    const boxRef = useRef<HTMLDivElement>();
    const handleScroll = (e: TouchEvent<HTMLDivElement>) => {
        if (ref.current) ref.current.scrollLeft = e.currentTarget.scrollLeft;
    }

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        axis.current.isDown = true;
        axis.current.startX = e.clientX - (boxRef.current?.offsetLeft || 0);
        axis.current.scrollLeft = boxRef.current?.scrollLeft || -1;
    }

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        axis.current.isDown = false;
    }

    const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
        axis.current.isDown = false;
    }

    const handleMouseMoove = (e: MouseEvent<HTMLDivElement>) => {
        if (!axis.current.isDown) return false;
        e.preventDefault();
        const x = e.pageX - (boxRef.current?.offsetLeft || 0);
        const walkX = (x - axis.current.startX) * 1;
        if (boxRef.current) boxRef.current.scrollLeft = axis.current.scrollLeft - walkX;
    }

    return (
        <>
            <Container maxWidth={"xl"}>
                <Box
                    sx={{
                        width: "100%",
                        display: "block",
                        maxWidth: "xl",
                        overflowX: 'hidden',
                        position: "sticky",
                        top: 65,
                        zIndex: 9,
                        scrollBehavior: "unset"
                    }}
                    ref={ref}
                >
                    <SlideHead cars={cars} />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        display: "block",
                        maxWidth: "xl",
                        overflowX: {
                            xs: "auto",
                            md: "hidden"
                        },
                    }}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    ref={boxRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMoove}
                >
                    <Stack direction={"row"}>
                        {
                            cars.map(car => (
                                <Box
                                    key={"car-list-" + car.car}
                                    sx={{
                                        px: 1,
                                        width: "100%",
                                        maxWidth: 400,
                                        minWidth: 300,
                                        "&:active": {
                                            cursor: "grabbing"
                                        }
                                    }}
                                >
                                    <CompareHeader car={car} />
                                </Box>
                            ))
                        }
                    </Stack>
                    <Stack direction={"row"}
                        sx={{
                            mt: 3,
                            "& .compare-column": {
                                borderRight: 1,
                                borderColor: "divider"
                            },
                            "& .compare-column:last-child": {
                                borderRight: 0,
                                borderColor: "transparent"
                            }
                        }}
                    >
                        {
                            [1, 2, 3, 4].map(crFtr => (
                                <List
                                    key={"column-" + crFtr}
                                    sx={{
                                        width: "100%",
                                        minWidth: 300,
                                        maxWidth: 400,
                                        "& .feture-list:nth-child(even)": {
                                            bgcolor: theme => alpha(theme.palette.divider, .05)
                                        },
                                        "&:active": {
                                            cursor: "grabbing"
                                        }
                                    }}
                                    className="compare-column"
                                >
                                    {
                                        features.map(feature => (
                                            <ListItem
                                                key={`${crFtr}-${feature}-ky`}
                                                className="feture-list"
                                            >
                                                <ListItemIcon>
                                                    <DoneAllOutlined sx={{ color: "success.light" }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        sx: {
                                                            cursor: "unset"
                                                        }
                                                    }}
                                                />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            ))
                        }
                    </Stack>
                </Box >
            </Container>
        </>
    )
}

export default Compare;