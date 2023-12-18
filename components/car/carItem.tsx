import { Car } from "@/types";
import { maxLine } from "@/utils/typo";
import { AppRegistrationOutlined } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { FunctionComponent } from "react";

interface CarItemProps {
    car: Car
}

const CarItem: FunctionComponent<CarItemProps> = ({ car }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <IconButton
                sx={{
                    bgcolor: blueGrey[900],
                    color: "#ffffff",
                    position: "absolute",
                    top: 5,
                    right: 5,
                    zIndex: 2,
                    "&:hover": {
                        bgcolor: blueGrey[500],
                    }
                }}
            >
                <AppRegistrationOutlined />
            </IconButton>
            <CardActionArea>
                <Card elevation={0}
                sx={{
                    borderRadius: {
                        xs: 0,
                        sm: 1
                    }
                }}
                >
                    <CardMedia
                        component={"img"}
                        src={car.image}
                        sx={{
                            aspectRatio: "3/2",
                            borderRadius: {
                                xs: 0,
                                sm: 2
                            }
                        }}
                        loading={"lazy"}
                    />
                    <CardHeader
                        title={car.car}
                        subheader={`${car.car_model} ${car.car_model_year}`}
                        sx={{
                            pb: 0
                        }}
                    />
                    <CardContent
                        sx={{
                            py: 0
                        }}
                    >
                        <Chip
                            label={car.availability ? "AVailable" : "Not Available"}
                            color={car.availability ? "success" : "error"}
                            size={"small"}
                        />
                        <Typography
                            sx={{
                                display: "inline-block",
                                ml: 2
                            }}
                            variant={"subtitle2"} fontSize={"1.5em"}>
                            {
                                car.price
                            }
                        </Typography>
                        <Typography
                            sx={maxLine(3)}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non voluptas nam quisquam cum quos laudantium omnis sequi a reiciendis, placeat eaque eum, sapiente delectus ab illum optio corrupti recusandae!
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Box>
    );
}

export default CarItem;