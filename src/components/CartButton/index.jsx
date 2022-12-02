import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import Swal from "sweetalert2";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function CustomizedButtons(props) {
  const { cart, addCart, removeCart, totalCart } = useContext(CartContext);

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
