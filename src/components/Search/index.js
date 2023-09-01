import { Box, Container, TextField } from "@mui/material";


export default function Search({ pokemonFilter }) { 
  
  return (
    <Container sx={{ display: "flex", mt: 3 }}>
      <Box sx={{ width: "100%" }}>
        <TextField
          onChange={(event) => pokemonFilter(event.target.value.toLowerCase())}
          fullWidth
          id="fullWidth"
          color="primary"
          sx={{background:"white", borderRadius:"10px"}}

        />
      </Box>
    </Container>
  );
}
