import { CatchingPokemonOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ mt: "-8px", height: "70px", width: "100%" }}
    >
      <Toolbar sx={{ marginY: "auto" }}>
        <Link  style={{ textDecoration: 'none', color:"black"}} to="./">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonOutlined />
          </IconButton>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2} sx={{mr:1}}>
          <Link style={{ fontSize:"20px", textDecoration: 'none', color:"black"}} to="./">
            <Button color="inherit">Home</Button>
          </Link>
          <Link style={{ fontSize:"20px", textDecoration: 'none', color:"black"}} to="/favorites">
            <Button color="inherit">Favorites</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
