import { Box, Fab, Typography } from "@mui/material";
import axios from "axios";
import Cards from "components/Cards";
import Search from "components/Search";
import { useEffect } from "react";
import { useState } from "react";
import ScrollTop from "components/ScrollTop"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function Home(props) {
  
const [data, setData] = useState([]);

  useEffect(() => {
    getPokemons()
  }, []);

  const getPokemons = () => {
    var endpoints = []
    for (var i = 1; i<100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setData(res))
  }
 const pokemonFilter = (name) => {
  var filteredPokemons = []
  if (name === ""){
    getPokemons()
  }
  for (var i in data) {
    if(data[i].data.name.includes(name)) {
      filteredPokemons.push(data[i])
    }
  }
setData(filteredPokemons)
 }


  return (
    <Box >
      <Typography
        color="secondary"
        variant="h1"
        sx={{ mt: 5, justifyContent: "center", textAlign: "center" }}
        id="back-to-top-anchor"
      >
        Choose your favorite Pokemon
      </Typography >
      <Search pokemonFilter={pokemonFilter} />
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        {data.map((poke, key) => (
          <Cards key={key} {...poke.data} />
        ))}
      </Box>
    </Box>
  );
}
