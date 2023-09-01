
import {
  Avatar,
  Box,
  Card,
  Chip,
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
    <Container>
      <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: -1
          }}>

      <Typography
        color="white"
        variant="h1"
        sx={{ mr: 2, mt: 5, justifyContent: "center", textAlign: "center" }}
        id="back-to-top-anchor"
        >
        {data.name} 
      </Typography>
      <Avatar
              variant="circular"
              sx={{ mr:-5,mb:3, mt: 8, width: 50, height: 50 }}
              alt={data.name}
              src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
              />
              </Box>
      
      <Container sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} >
        <Card
          sx={{
            margin: 3,
            mt: 5,
            width: "80vh",
            height:"46vh",
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Card
            variant="elevation"
            sx={{
              margin: 3,
              mr:10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 350,
               minHeight: 440,
               background:"linear-gradient(grey, white)"
            }}
          >
            
            <Avatar
              sx={{ minWidth: 350, minHeight: 350 }}
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
            <Container sx={{ mt:1,width:"90%", ml: -6 }}>
            <Typography><h2>Category</h2></Typography>
            <Box>
                {data.types?.map((type, index) => {
             return(
              <Chip sx={{mr:1}} key={index} label={type["type"].name} variant="outlined" />
                
                 ) })} 
            </Box>
           <Box>
           <Typography><h2>Abilities</h2></Typography>
            {data.abilities?.map((ability) => {
             return(
              <Chip sx={{mr:1}} label={ability["ability"].name} variant="outlined" />
                 
                 ) })}
             </Box>
            <Typography><h2>Height</h2></Typography>
            <Typography>{data.height}</Typography>
            <Typography><h2>Weight</h2></Typography>
            <Typography>{data.weight}</Typography>
            

        
            </Container>

          </Container>
        </Card>
      </Container>
            
    </Container>
  );
}
