import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import Swal from "sweetalert2";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function CustomizedButtons(props) {
  const { totalCart } = useContext(CartContext);

  const ComprarCursosButton = () => {
    if (totalCart() > 0) {
      Swal.fire("Cursos comprados!!");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No has puesto algun curso en tu carrito",
      });
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        variant="contained"
        sx={{ width: "100%", height: "50px" }}
        onClick={ComprarCursosButton}
      >
        Comprar cursos
      </ColorButton>
    </Stack>
  );
}
