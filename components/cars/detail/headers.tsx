import { Car } from "@/types";
import { maxLine } from "@/utils/typo";
import { Avatar, CardHeader, IconButton, Card, CardMedia, alpha } from "@mui/material";
import {
    Close
} from "@mui/icons-material";

interface CompareHeaderProp {
    car: Car
}

const CompareHeader = ({ car }: CompareHeaderProp) => {
    return (
        <Card
            sx={{
                position: "relative",
                width: "100%",
                borderRadius: 3
            }}
        >
            <CardMedia
                component={"img"}
                src={car.image}
                sx={{
                    aspectRatio: "3/2"
                }}
            />
            <CardHeader
                title={car.car}
                subheader={<>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, suscipit consequuntur adipisci, sapiente qui temporibus fugiat porro commodi atque laudantium aperiam nam nemo ab distinctio eligendi dolorum, repellat nostrum nihil.</>}
                subheaderTypographyProps={{
                    sx: maxLine(2),
                    fontSize: "14px",
                    color: alpha("#ffffff", .75)
                }}
                titleTypographyProps={{
                    sx: maxLine(2),
                    fontSize: "14px",
                    color: "#ffffff"
                }}
                // action={<IconButton sx={{ color: "#ffffff" }}><Close /></IconButton>}
                sx={{
                    position: "absolute",
                    bottom: 0,
                    bgcolor: alpha("#000000", .85)
                }}
            />
        </Card>
    )
}

export default CompareHeader;