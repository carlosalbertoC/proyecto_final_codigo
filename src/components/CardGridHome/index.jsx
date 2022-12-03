import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { useContext } from "react";

import "../../assets/react.svg";

import { CartContext } from "../../context/CartContext";

export default function MultiActionAreaCard(props) {
  const { data } = props;
  const { cart, addCart } = useContext(CartContext);

  const handleClick = () => {
    console.log(data);
    addCart(data);
    console.log(cart);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.link}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.descripcion}
            </Typography>
            <Typography variant="body2" color="succees">
              $ {data.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClick}>
            Agregar al carrito
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
