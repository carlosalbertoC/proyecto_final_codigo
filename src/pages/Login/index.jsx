import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import { get } from "../../services";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { authLogin, isAuth } = useContext(AuthContext);

  const [flag, setFlag] = useState(false);

  const [values, setValues] = useState({
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

  if (isAuth()) return <Navigate to={"/"} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await get();
    console.log(values);

    data.forEach((element, index) => {
      if (element.email === values.email) {
        // console.log("ENTRO A EMAIL");
        if (element.password === values.password) {
          // console.log("ENTRO A PASS Y EMAIL");
          authLogin(element);
          navigate("/");
        }
      } else {
        console.log(flag);
        setFlag(true);
      }
    });
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
        <Box p={3} component="form" onSubmit={handleSubmit}>
          <Typography textAlign="center" variant="h5">
            Inicia sesión en tu cuenta de Auquid
          </Typography>
          <Box my={3}>
            <TextField
              name="email"
              type="email"
              label="E-mail"
              value={values.email}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <TextField
              type="password"
              name="password"
              label="Password"
              value={values.password}
              onChange={handleInputChange}
              fullWidth
              required
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
              Iniciar Sesion
            </Button>
          </Box>
          <Box>
            {flag && (
              <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
                Error al ingresar datos de usuario
              </Typography>
            )}
            ¿No tienes una cuenta?
            <Button
              component={Link}
              to="/register"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Regístrate
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
