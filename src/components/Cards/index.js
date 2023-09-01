import * as React from "react";
import {
  Avatar,
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
  const sxStyle = {margin:3,minWidth:280, minHeight:280, display:"flex", flexDirection:"column", alignItems:"center",
  justifyContent:"center", background:"rgba(242, 242, 242, 0.25)",'&:hover': {transform: "scale(1.01)"},transition: "transform 0.5s ease" }
    
return (
    <Card variant="elevation" sx={sxStyle}>
      <CardContent sx={{mt:-4 }}>
        <Typography align="center" sx={{color:"white",mt:5, mb:-4}}>{`#${id}`}</Typography>
        <Typography align="center" sx={{color:"white", mt:3}}>
          <h1>{name}</h1>
        </Typography>
        <Link to={`/${id}`}>
        <Avatar sx={{minWidth:200, minHeight: 200, backgroundImage:"linear-gradient(red, white)", borderWith:"50px", 
        borderStyle: "solid", borderColor:"black", mt:-2, mb:-3}} alt={name} src={sprites.other["official-artwork"].front_default} />
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
