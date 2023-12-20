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
                title={<>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, suscipit consequuntur adipisci, sapiente qui temporibus fugiat porro commodi atque laudantium aperiam nam nemo ab distinctio eligendi dolorum, repellat nostrum nihil.</>}
                titleTypographyProps={{
                    sx: maxLine(2),
                    fontSize: "14px",
                }}
            />
        </Card>
    )
}

export default CompareHeader;