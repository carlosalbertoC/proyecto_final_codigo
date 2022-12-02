import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { getCursos, postCursos } from "../../services";

import { AdminGrid, AdminDialog } from "../../components";

export default function IconLabelButtons() {
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ margin: "50px" }}>
        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
        {/* <Button variant="contained" endIcon={<SendIcon />}>
          Agregar curso
        </Button> */}
        <AdminDialog />
      </Stack>
      <AdminGrid />
    </div>
  );
}
