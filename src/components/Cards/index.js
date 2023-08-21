import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


export default function Cards({ name, sprites, id}) {
  return (
    <Card sx={{margin:3,minWidth:300, minHeight:300, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <CardContent sx={{mt:-4}}>
        <Typography align="center">
          <h1>{name}</h1>
        </Typography>
        <Link to={`/${id}`}>
        <Avatar sx={{minWidth:150, minHeight: 150}} alt={name} src={sprites.other["official-artwork"].front_default} />
        </Link>
      </CardContent>
      <CardActions>
        <Button sx={{mb:1, color:"blue"}} size="large">Add to Favorites</Button>
      </CardActions>
      
    </Card>
  );
}
