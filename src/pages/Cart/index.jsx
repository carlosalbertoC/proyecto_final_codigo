import { CartGrid } from "../../components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Cart = () => {
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
