import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import FavoritesProvider from "context/favorites";
import { Outlet } from "react-router-dom";
import { ModelPageStyled } from "./styled";

export default function ModelPage() {
  return (
      <ModelPageStyled>
    <Box minHeight={1080}>
      <Navbar />
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
    </Box>
    </ModelPageStyled>
  );
}
