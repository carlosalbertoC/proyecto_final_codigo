import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { post } from "../../services";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post(values);
    if (data) {
      Swal.fire({
        icon: "success",
        text: "Usuairo creado correctamente",
      });
      setValues({
        nombre: "",
        email: "",
        password: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: data.message.detail,
      });
    }
  };

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        sx={{
          width: 500,
        }}
      >
        <Box p={3} component="form" onSubmit={handleSubmit} method="post">
          <Typography textAlign="center" variant="h5">
            Inicia sesión en tu cuenta de Auquid
          </Typography>
          <Box my={3}>
            <TextField
              name="nombre"
              type="text"
              label="Nombre"
              value={values.nombre}
              fullWidth
              required
              onChange={handleInputChange}
            />
          </Box>
          <Box my={3}>
            <TextField
              name="email"
              type="email"
              label="E-mail"
              value={values.email}
              fullWidth
              required
              onChange={handleInputChange}
            />
          </Box>
          <Box my={3}>
            <TextField
              type="password"
              name="password"
              label="Password"
              value={values.password}
              fullWidth
              required
              onChange={handleInputChange}
            />
          </Box>
          <Box my={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{
                textTransform: "capitalize",
                height: "60px",
                fontSize: "20px",
              }}
            >
              Registrarse
            </Button>
          </Box>
          <Box>
            ¿Ya tienes una cuenta?
            <Button
              component={Link}
              to="/login"
              sx={{
                textTransform: "none",
              }}
            >
              Ingresa con tu cuenta Auquit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
