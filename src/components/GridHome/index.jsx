import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { CardGridHome } from "..";

import { getCursos } from "../../services";

import { useEffect, useState } from "react";

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
