import { SearchOutlined } from "@mui/icons-material";
import { OutlinedInput, TextField } from "@mui/material";
import { FunctionComponent } from "react";

interface SearchBoxProps {
    size?: "small" | "medium"
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({ size }) => {
    return (
        <>
            <TextField
                placeholder="search..."
                InputProps={{
                    startAdornment: <SearchOutlined sx={{ mr: 1, color: "text.secondary", width: 20, height: 20 }} />
                }}
                fullWidth
                size={size}
                sx={{
                    alignItems: "center"
                }}
            />
        </>
    );
}

export default SearchBox;