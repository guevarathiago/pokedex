
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
  console.log(data);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${parameters.id}`)
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
            <Typography>Category</Typography>
            {console.log(data.types.map((type) => (<Typography>{type["type"].name}</Typography>)))}
            <Typography>Height</Typography>
            <Typography>{data.height}</Typography>
            <Typography>Weight</Typography>
            <Typography>{data.weight}</Typography>
            <Typography>Skills</Typography>

        
            </Container>
            <Avatar
              variant="square"
              sx={{ mt: 5, minWidth: 100, minHeight: 100 }}
              alt={data.name}
              src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
            />

          </Container>
        </Card>
      </Container>
    </Box>
  );
}
