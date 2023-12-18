"use client"

import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Button component={Link} href="/">
                Buy Curs
            </Button>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}