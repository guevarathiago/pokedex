
import {
  Avatar,
  Box,
  Card,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InfoPage() {
  const [data, setData] = useState([]);
  const parameters = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${parameters.id}`
  console.log(data);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    await axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => err);
  };

  return (
    <Box>
      <Typography
        color="secondary"
        variant="h1"
        sx={{ mt: 5, justifyContent: "center", textAlign: "center" }}
        id="back-to-top-anchor"
      >
        POKEMON INFO
      </Typography>
      <Container maxWidth="80%">
        <Card
          variant="outlined"
          sx={{
            margin: 3,
            mt: 5,
            minWidth: 500,
            minHeight: 500,
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              margin: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="secondary" variant="h1" sx={{ mt: 5 }}>
              {data.name}
            </Typography>
            <Avatar
              sx={{ minWidth: 500, minHeight: 500 }}
              alt={data.name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            />
          </Card>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Container sx={{mt:5,width:"90%", ml: -6 }}>
            <Typography><h2>Category:</h2></Typography>
            <Box>
                {data.types?.map((type, index) => {
             return(
                 <Typography key={index}>{type["type"].name}</Typography>
                 ) })} 
            </Box>
           <Box>
           <Typography><h2>Abilities:</h2></Typography>
            {data.abilities?.map((ability) => {
             return(
                 <Typography> {ability["ability"].name}</Typography>
                 ) })}
             </Box>
            <Typography><h2>Height:</h2></Typography>
            <Typography>{data.height}</Typography>
            <Typography><h2>Weight:</h2></Typography>
            <Typography>{data.weight}</Typography>
            

        
            </Container>
            <Avatar
              variant="square"
              sx={{ mr:-5,mb:3, mt: 5, width: 130, height: 130 }}
              alt={data.name}
              src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
            />

          </Container>
        </Card>
      </Container>
    </Box>
  );
}
