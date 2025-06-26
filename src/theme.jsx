import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#a5c5d7",
            light: "#ffb74d"
        },
        secondary: {
            main: "#32376f",
            light: "#302e28"
        },
        buttonText: {
            main: "#212121"
        },
        text: {
            main: '#eaf2f6',
            input: 'white'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 660,
            md: 930,
            lg: 1200,
            xl: 1536,
        },
    },
})