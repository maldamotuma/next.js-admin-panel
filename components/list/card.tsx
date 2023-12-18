import { Button, Popper, List, ListItemText, ListItemButton, Paper, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton, ListItemIcon } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { maxLine } from "@/utils/typo";
import { Product } from "@/types";
import { MoreVert, DeleteOutlined, EditOutlined } from "@mui/icons-material";

interface ListCardProps {
    product: Product;
    children: ReactNode;
}

const ListCard: FunctionComponent<ListCardProps> = ({ product, children }) => {
    return (
        <Card variant={"outlined"} sx={{ border: 0, position: "relative" }}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={""}
                    src={product.image}
                    sx={{
                        aspectRatio: "1/1",
                        objectFit: "contain"
                    }}
                />
                <CardHeader
                    title={product.title}
                    subheader={product.description}
                    subheaderTypographyProps={{
                        sx: maxLine(3),
                    }}
                    titleTypographyProps={{
                        sx: maxLine(3),
                    }}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pt: 0,
                        px: 3
                    }}
                >
                    <Typography variant={"subtitle2"} fontSize={"2em"} fontWeight={600}>
                        {product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {
                children
            }
        </Card >
    );
}

export default ListCard;