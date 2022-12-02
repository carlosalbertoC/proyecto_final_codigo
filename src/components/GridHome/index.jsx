import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { CardGridHome } from "..";

import { getCursos } from "../../services";

import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
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
      <Box sx={{ flexGrow: 1, margin: "20px 50px" }}>
        <Grid container spacing={2}>
          {dataCursos.length > 0 &&
            dataCursos.map((data, index) => (
              <Grid xs={4} sx={{ margin: "10px 0" }}>
                <CardGridHome data={data} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
