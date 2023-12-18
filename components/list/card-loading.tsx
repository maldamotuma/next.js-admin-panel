"use client";

import { Grid, Skeleton, Stack } from "@mui/material";
import { FunctionComponent } from "react";

interface ListCardLoadingProps {

}

const ListCardLoading: FunctionComponent<ListCardLoadingProps> = () => {
    return (
        <Grid container spacing={3}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(skl => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={"card-skel-"+skl}>
                        <CardLoading />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default ListCardLoading;


export const CardLoading = () => {
    return (
        <Stack>
            <Skeleton
                variant="rounded"
                height={300}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: "1.5em"
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    fontSize: "1.5em"
                }}
            />
            <Skeleton
                variant="text"
            />
            <Skeleton
                variant="text"
            />
            <Skeleton
                variant="text"
            />
            <Skeleton
                variant="rounded"
                height={50}
                sx={{
                    width: 150
                }}
            />
        </Stack>
    )
}