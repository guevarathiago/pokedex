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
import { useFavoriteContext } from "context/favorites";
import favIcon from './favoritar.png'
import unFavIcon from './desfavoritar.png'


export default function Cards({ name, sprites, id}) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = !isFavorite? favIcon : unFavIcon;
return (
    <Card sx={{margin:3,minWidth:300, minHeight:300, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <CardContent sx={{mt:-4}}>
        <Typography align="center" sx={{mt:5, mb:-4}}>{`#${id}`}</Typography>
        <Typography align="center" sx={{mt:3}}>
          <h1>{name}</h1>
        </Typography>
        <Link to={`/${id}`}>
        <Avatar sx={{minWidth:150, minHeight: 150}} alt={name} src={sprites.other["official-artwork"].front_default} />
        </Link>
      </CardContent>
      <CardActions>
        <Typography fontSize={"sm"} sx={{mt:1,mb:1, mr:1, color:"blue"}}>Add to Favorites</Typography>
        <img style={{cursor:"pointer"}}src={icon}
      alt="Favoritar filme"
      onClick={() => {
        addFavorite({  name, sprites, id })
        
      }}
        />
      </CardActions>
      
    </Card>
  );
}
