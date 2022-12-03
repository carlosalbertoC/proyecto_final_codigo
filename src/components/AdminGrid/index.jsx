import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import { getCursos, deleteCursos } from "../../services";
import { Box } from "@mui/material";

import Avatar from "@mui/material/Avatar";

export default function ComplexGrid() {
  const [dataCursos, setDataCursos] = useState([]);

  const recogiendoData = async () => {
    const data = await getCursos();
    setDataCursos(data);
  };

  useEffect(() => {
    recogiendoData();
  }, []);

  return (
    <Box>
      {dataCursos.length > 0 &&
        dataCursos.map((data, index) => (
          <Paper
            sx={{
              p: 2,
              margin: "50px auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={data.link}
                    sx={{ width: 100, height: 100 }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {data.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {data.descripcion}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID:{data.id}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="text"
                      onClick={() => deleteCursos(data.id)}
                    >
                      Borrar Curso
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    ${data.precio}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </Box>
  );
}
