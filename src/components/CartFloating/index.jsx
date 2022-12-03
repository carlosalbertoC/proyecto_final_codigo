import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartFloating() {
  const navigate = useNavigate();

  const [cartShow, setCartShow] = useState(false);
  const handleClick = () => {
    setCartShow(!cartShow);
    navigate("/");
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, textAlign: "right" }}>
      <Fab color="secondary" aria-label="edit" onClick={handleClick}>
        <ShoppingCartIcon />
      </Fab>
      {/* {cartShow && <CardDialog />} */}
    </Box>
  );
}
