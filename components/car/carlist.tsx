"use client"

import { Car } from "@/types";
import { Chip, Grid, Box, Pagination } from "@mui/material";
import { FunctionComponent, useState, ChangeEvent } from "react";
import CarItem from "./carItem";

interface CarListIndexProps {
    cars: Car[];
}

const CarListIndex: FunctionComponent<CarListIndexProps> = ({
    cars
}) => {
    const [pagination, setPagination] = useState({
        page: 1,
        items: cars.slice(0, 50)
    });

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        setPagination({
            page: page,
            items: cars.slice((page - 1) * 50, 50 * page)
        });
    }

    const getImage = (i: number) => {
        if (i === 20) return `/cars-list/image${20}.jpeg`;
        const mdl = i % 20;
        let prefx = String(mdl).padStart(2, '0');
        return `/cars-list/image${prefx}.jpeg`;
    }

    return (
        <>
            <Chip
                label={`${cars.length} total cars found`}
                sx={{
                    mb: 2
                }}
            />
            <Grid container spacing={3} sx={{
                boxSizing: "border-box",
                px: {
                    xs: 0,
                    sm: 1,
                    md: 2
                }
            }}>
                {
                    pagination.items.map((car, i) => (
                        <Grid
                            key={car.car + i}
                            sx={{
                                borderBottom: 1,
                                borderColor: "divider",
                                boxSizing: "border-box"
                            }}
                            item xs={12} sm={6} md={4} lg={3}>
                            <CarItem
                                car={{ ...car, image: getImage(i + 1) }}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <Box
                sx={{
                    py: 10,
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Pagination
                    sx={{
                        mx: "auto"
                    }}
                    page={pagination.page}
                    onChange={handleChange}
                    count={1000 / 50} variant="outlined" color="primary" />
            </Box>
        </>
    );
}

export default CarListIndex;