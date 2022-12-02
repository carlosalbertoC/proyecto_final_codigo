import { CartGrid } from "../../components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, addCart, removeCart, totalCart } = useContext(CartContext);

  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Mi carrito de cusos Auquid
      </Typography>
      <CartGrid />
    </Box>
  );
};

export default Cart;
