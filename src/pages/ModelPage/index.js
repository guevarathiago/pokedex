import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import FavoritesProvider from "context/favorites";
import { Outlet } from "react-router-dom";

export default function ModelPage() {
  return (
    <Box>
      <Navbar />
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
    </Box>
  );
}
