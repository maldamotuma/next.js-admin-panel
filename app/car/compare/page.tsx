"use client"

import CompareHeader from "@/components/cars/detail/headers";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Stack, alpha } from "@mui/material";
import SimpleBar from "simplebar-react";
import { Car } from "@/types"
import { DoneAllOutlined } from "@mui/icons-material";
import { blue, blueGrey } from "@mui/material/colors";
import 'simplebar-react/dist/simplebar.min.css';
import SlideHead from "@/components/cars/detail/SlideHead";
import { UIEvent, useRef } from "react";


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
    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        if (ref.current) ref.current.scrollLeft = e.currentTarget.scrollLeft;
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
                        overflowX: 'auto',
                    }}
                    onScroll={handleScroll}
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
                                        minWidth: 300
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