"use client"

import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import ListCard from "../list/card";
import MenuDropDown from "../list/menu-drop-down";
import { Product } from "@/types";

interface CarListProps {
    products: Product[];
    removeItemFromList(id: number): void;
    setEditableItem(itm: Product): void;
}

const CarList: FunctionComponent<CarListProps> = ({ products, removeItemFromList, setEditableItem }) => {
    const handleDelete = (id: number) => {
        removeItemFromList(id)
    }

    return (
        <Grid container spacing={{
            xs: 0,
            md: 1
        }} columns={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5
        }}
        >
            {
                products.map((product, i) => <Grid
                    item
                    xs={1}
                    key={product.title}
                    sx={{
                        ...(i > 3 && {
                            borderTop: 1,
                            borderColor: "divider"
                        })
                    }}
                >
                    <ListCard product={product}>
                        <MenuDropDown handleDelete={() => handleDelete(product.id)} handleEditable={() => setEditableItem(product)} />
                    </ListCard>
                </Grid>)
            }
        </Grid>
    );
}

export default CarList;