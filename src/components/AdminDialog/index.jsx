import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

import { useState } from "react";

import { getCursos, postCursos } from "../../services";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    name: "",
    descripcion: "",
    link: "",
    precio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postCursos(values);
    setValues({
      name: "",
      descripcion: "",
      link: "",
      precio: "",
    });
    handleClose();
    return;
  };

  return (
    <Box component="form" method="post" onSubmit={handleSubmit}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar Curso
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar cursos a la plataforma</DialogTitle>
        <DialogContent>
          <DialogContentText>Nombre del curso</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            name="name"
            variant="standard"
            onChange={handleInputChange}
            value={values.name}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Descripcion del curso</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            name="descripcion"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
            value={values.descripcion}
          />
        </DialogContent>{" "}
        <DialogContent>
          <DialogContentText>Link de la imagen del curso</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            name="link"
            fullWidth
            onChange={handleInputChange}
            value={values.link}
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Precio del curso</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            name="precio"
            fullWidth
            onChange={handleInputChange}
            value={values.precio}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit}>
            Subir Curso
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
