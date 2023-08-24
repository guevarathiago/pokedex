import { Box } from "@mui/material"
import Cards from "components/Cards"
import { useFavoriteContext } from "context/favorites"

export default function Favorites () {
    const { favorite } = useFavoriteContext()
    console.log(favorite)
    return (
        <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        {favorite.map((fav) => (
          <Cards key={fav.id} {...fav} />
        ))}
      </Box>
    )
}