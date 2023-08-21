import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import PokemonProvider from "context/favorites";
import { Outlet } from "react-router-dom";

export default function ModelPage() {
  return (
    <Box>
      <Navbar />
      <PokemonProvider>
        <Outlet />
      </PokemonProvider>
    </Box>
  );
}
