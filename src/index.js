import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "routes";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary:{
      main:"#e6e6e6",
    },
    secondary:{
      main:"#332900"
    },
  },
  typography: {
    h1: {
      fontSize:"3rem",
      fontWeight:"600",
    },
    h2: {
      fontSize:"1.75rem",
      fontWeight:"600",
    },
    h3: {
      fontSize:"1.5rem",
      fontWeight:"600",
    },
   }
   }) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);

