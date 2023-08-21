import { CatchingPokemonOutlined } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";



export default function Navbar () {
    return(
        
          <AppBar position="static" sx={{mt:"-8px", height:"70px", width:"100%"}}>
            <Toolbar sx={{marginY:"auto"}}>
             <IconButton href="./" size="large" edge="start" color="inherit" aria-label="logo">
               <CatchingPokemonOutlined />
            </IconButton> 
            <Typography variant='h6' component="div" sx={{ flexGrow: 1}}>
                POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit" href="./">Home</Button>
                <Button color="inherit" href="/favorites">Favorites</Button>
            </Stack> 
            </Toolbar>
        </AppBar>  
        
        
    )
    
}