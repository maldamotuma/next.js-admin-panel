import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { shuffle } from '@/utils/array';

export default function AuthMasonry() {
    return (
        <Box
            sx={{
                height: "calc(100vh)",
                position: "absolute",
                right: "-10px",
                top: "-50px",
                bottom: 0,
                width: "100%"
            }}
        >
            <ImageList variant="masonry" cols={3} gap={8}>
                {shuffle(itemData).map((item) => (
                    <ImageListItem key={item} sx={{
                        "& img:hover": {
                            transform: "scale(0.98)",
                            transition: ".3s all linear",
                        }
                    }}>
                        <img
                            src={`/cars/car${item}.jpg`}
                            alt={"Buy Car"}
                            loading="lazy"
                            style={{
                                borderRadius: "10px",
                                minHeight: "170px",
                                width: "100%"
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29];